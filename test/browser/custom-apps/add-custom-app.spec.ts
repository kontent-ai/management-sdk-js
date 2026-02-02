import { CustomAppModels, CustomAppsResponses } from '../../../lib';
import * as responseJson from '../fake-responses/custom-apps/fake-add-custom-app.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Add custom app', () => {
    let response: CustomAppsResponses.AddCustomAppResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson)
            .addCustomApp()
            .withData({
                name: 'x',
                codename: 'x',
                config: '',
                source_url: 'x',
                allowed_roles: [{ codename: 'x' }],
                display_mode: 'fullScreen'
            })
            .toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmClient
            .addCustomApp()
            .withData({
                name: 'x',
                codename: 'x',
                config: '',
                source_url: 'x',
                allowed_roles: [{ codename: 'x' }],
                display_mode: 'fullScreen'
            })
            .getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/custom-apps`);
    });

    it(`response should be instance of AddCustomAppResponse class`, () => {
        expect(response).toEqual(jasmine.any(CustomAppsResponses.AddCustomAppResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toEqual(jasmine.any(CustomAppModels.CustomApp));
    });
});
