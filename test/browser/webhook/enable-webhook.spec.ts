import { WebhookResponses, WebhookModels } from '../../../lib';
import * as responseJson from '../fake-responses/webhooks/fake-get-webhook.json';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';

describe('Enable webhook', () => {
    let response: WebhookResponses.EnableWebhookResponse;

    beforeAll((done) => {
        getTestClientWithJson(responseJson)
            .enableWebhook()
            .byId('x')
            .toObservable()
            .subscribe((result) => {
                response = result;
                done();
            });
    });

    it(`url should be correct`, () => {
        const url = cmLiveClient.enableWebhook().byId('x').getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/webhooks/x/enable`);
    });

    it(`response should be instance of EnableWebhookResponse class`, () => {
        expect(response).toEqual(jasmine.any(WebhookResponses.EnableWebhookResponse));
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
            expect(trigger).toEqual(jasmine.any(WebhookModels.WebhookDeliveryApiContentChanges));
            expect(trigger.type).toBeDefined();
        }

        for (const trigger of webhook.triggers.workflowStepChanges) {
            expect(trigger).toEqual(jasmine.any(WebhookModels.WebhookWorkflowStepChanges));
            expect(trigger.type).toBeDefined();

            for (const transition of trigger.transitionsTo) {
                expect(transition).toEqual(jasmine.any(WebhookModels.WebhookTransitionsTo));
                expect(transition.id).toBeDefined();
            }
        }
    });
});
