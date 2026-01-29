import { CustomAppsResponses } from '../../../lib';
import * as responseJson from '../fake-responses/custom-apps/fake-modify-custom-app.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Modify custom app', () => {
    let response: CustomAppsResponses.ModifyCustomAppResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson)
            .modifyCustomApp()
            .byCustomAppCodename('x')
            .withData([
                {
                    op: 'addInto',
                    property_name: 'allowed_roles',
                    value: [{
                        codename: 'x'
                    },
                    {
                        id: 'x'
                    }]
                },
                {
                    op: 'replace',
                    property_name: 'allowed_roles',
                    value: [{
                        codename: 'z'
                    },
                    {
                        id: 'u'
                    }]
                },
                {
                    op: 'replace',
                    property_name: 'config',
                    value: null
                },
                {
                    op: 'replace',
                    property_name: 'name',
                    value: 'x'
                }
            ])
            .toPromise();
    });

    it(`url should be correct`, () => {
        const codenameUrl = cmClient.modifyCustomApp().byCustomAppCodename('xCodename').withData([]).getUrl();
        const internalIdUrl = cmClient.modifyCustomApp().byCustomAppId('xInternalId').withData([]).getUrl();

        expect(codenameUrl).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/custom-apps/codename/xCodename`
        );
        expect(internalIdUrl).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/custom-apps/xInternalId`
        );
    });

    it(`response should be instance of ModifyCustomAppResponse class`, () => {
        expect(response).toEqual(jasmine.any(CustomAppsResponses.ModifyCustomAppResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });
});
