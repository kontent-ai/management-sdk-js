import { WebhookResponses, WebhookModels } from '../../../lib';
import * as responseJson from '../fake-responses/webhooks/fake-add-legacy-webhook.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Add legacy webhook', () => {
    let response: WebhookResponses.AddLegacyWebhookResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson)
            .addLegacyWebhook()
            .withData({
                name: 'x',
                secret: 'x',
                triggers: {
                    delivery_api_content_changes: [
                        {
                            operations: ['archive', 'restore'],
                            type: 'content_item_variant'
                        }
                    ],
                    workflow_step_changes: [
                        {
                            transitions_to: [
                                {
                                    id: 'x'
                                }
                            ],
                            type: 'content_item_variant'
                        }
                    ],
                    management_api_content_changes: [
                        {
                            operations: ['create'],
                            type: 'content_item_variant'
                        }
                    ],
                    preview_delivery_api_content_changes: [
                        {
                            operations: ['archive', 'restore'],
                            type: 'taxonomy'
                        }
                    ]
                },
                url: 's'
            })
            .toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmClient
            .addLegacyWebhook()
            .withData({} as any)
            .getUrl();
        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/webhooks`);
    });

    it(`response should be instance of AddLegacyWebhookResponse class`, () => {
        expect(response).toEqual(jasmine.any(WebhookResponses.AddLegacyWebhookResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it('response should contain raw data', () => {
        expect(response.rawData).toBeDefined();
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
