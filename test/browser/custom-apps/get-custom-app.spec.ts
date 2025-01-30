import { CustomAppModels, CustomAppsResponses } from '../../../lib';
import * as responseJson from '../fake-responses/custom-apps/fake-get-custom-app.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Get custom app', () => {
    let response: CustomAppsResponses.GetCustomAppResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).getCustomApp().byCustomAppCodename('x').toPromise();
    });

    it(`url should be correct`, () => {
        const urlCodename = cmClient.getCustomApp().byCustomAppCodename('x').getUrl();
        const urlId = cmClient.getCustomApp().byCustomAppId('x').getUrl();

        expect(urlCodename).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/custom-apps/codename/x`
        );
        expect(urlId).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/custom-apps/x`);
    });

    it(`response should be instance of GetCustomAppResponse class`, () => {
        expect(response).toEqual(jasmine.any(CustomAppsResponses.GetCustomAppResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toEqual(jasmine.any(CustomAppModels.CustomApp));
    });
});
