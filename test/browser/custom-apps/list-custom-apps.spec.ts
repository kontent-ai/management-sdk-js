import { CustomAppModels, CustomAppsResponses } from '../../../lib';
import * as responseJson from '../fake-responses/custom-apps/fake-list-custom-apps.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('List custom apps', () => {
    let response: CustomAppsResponses.ListCustomAppsResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).listCustomApps().toPromise();
    });

    it(`url should be correct`, () => {
        const listUrl = cmClient.listCustomApps().getUrl();

        expect(listUrl).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/custom-apps`);
    });

    it(`response should be instance of ListCustomAppsResponse class`, () => {
        expect(response).toEqual(jasmine.any(CustomAppsResponses.ListCustomAppsResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        for (const customApp of response.data) {
            expect(customApp).toEqual(jasmine.any(CustomAppModels.CustomApp));
        }
    });
});
