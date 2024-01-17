import { WebhookResponses, WebhookModels } from '../../../lib';
import * as responseJson from '../fake-responses/webhooks/fake-get-legacy-webhook.json';
import { cmLiveClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Get legacy webhook', () => {
    let response: WebhookResponses.GetLegacyWebhookResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).getLegacyWebhook().byId('x').toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmLiveClient.getLegacyWebhook().byId('x').getUrl();
        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/webhooks/x`);
    });

    it(`response should be instance of GetWebhookResponse class`, () => {
        expect(response).toEqual(jasmine.any(WebhookResponses.GetLegacyWebhookResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it(`webhook properties should be mapped`, () => {
        const originalItem = responseJson;
        const webhook = response.data;

        expect(webhook.secret).toEqual(originalItem.secret);
        expect(webhook.name).toEqual(originalItem.name);
        expect(webhook.lastModified).toEqual(undefined);
        expect(webhook.url).toEqual(originalItem.url);

        expect(webhook.triggers.deliveryApiContentChanges).toEqual(jasmine.any(Array));
        expect(webhook.triggers.workflowStepChanges).toEqual(jasmine.any(Array));

        for (const trigger of webhook.triggers.deliveryApiContentChanges) {
            expect(trigger).toEqual(jasmine.any(WebhookModels.LegacyWebhookDeliveryApiContentChanges));
            expect(trigger.type).toBeDefined();
        }

        for (const trigger of webhook.triggers.workflowStepChanges) {
            expect(trigger).toEqual(jasmine.any(WebhookModels.LegacyWebhookWorkflowStepChanges));
            expect(trigger.type).toBeDefined();

            for (const transition of trigger.transitionsTo) {
                expect(transition).toEqual(jasmine.any(WebhookModels.WebhookTransitionsTo));
                expect(transition.id).toBeDefined();
            }
        }
    });
});
