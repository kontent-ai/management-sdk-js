import { BaseResponses } from '../../../lib';
import * as responseJson from '../fake-responses/webhooks/fake-get-webhook.json';
import { cmLiveClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Disable webhook', () => {
    let response: BaseResponses.EmptyContentManagementResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).disableWebhook().byId('x').toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmLiveClient.disableWebhook().byId('x').getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/webhooks/x/disable`);
    });

    it(`response should be instance of BaseResponses.EmptyContentManagementResponse class`, () => {
        expect(response).toEqual(jasmine.any(BaseResponses.EmptyContentManagementResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });
});
