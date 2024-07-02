import { BaseResponses } from '../../../lib';
import * as responseJson from '../fake-responses/webhooks/fake-get-webhook.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Disable legacy webhook', () => {
    let response: BaseResponses.EmptyContentManagementResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).disableWebhook().byId('x').toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmClient.disableLegacyWebhook().byId('x').getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/webhooks/x/disable`);
    });

    it(`response should be instance of BaseResponses.EmptyContentManagementResponse class`, () => {
        expect(response).toEqual(jasmine.any(BaseResponses.EmptyContentManagementResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });
});
