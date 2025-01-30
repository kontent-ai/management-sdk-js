import { BaseResponses } from '../../../lib';
import * as responseJson from '../fake-responses/custom-apps/fake-delete-custom-app.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Delete custom app', () => {
    let response: BaseResponses.EmptyContentManagementResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).deleteCustomApp().byCustomAppCodename('xxx').toPromise();
    });

    it(`url should be correct`, () => {
        const codenameUrl = cmClient.deleteCustomApp().byCustomAppCodename('xCodename').getUrl();
        const internalIdUrl = cmClient.deleteCustomApp().byCustomAppId('xInternalId').getUrl();

        expect(codenameUrl).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/custom-apps/codename/xCodename`
        );
        expect(internalIdUrl).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/custom-apps/xInternalId`
        );
    });

    it(`response should be instance of EmptyContentManagementResponse class`, () => {
        expect(response).toEqual(jasmine.any(BaseResponses.EmptyContentManagementResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should be emmpty`, () => {
        expect(response.data).toBeUndefined();
    });
});
