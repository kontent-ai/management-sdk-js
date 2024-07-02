import { WebhookResponses, WebhookModels } from '../../../lib';
import * as responseJson from '../fake-responses/webhooks/fake-add-webhook.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Add webhook', () => {
    let response: WebhookResponses.AddWebhookResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson)
            .addWebhook()
            .withData({
                name: 'x',
                secret: 'x',
                delivery_triggers: {
                    slot: 'published',
                    events: 'all',
                    content_type: { enabled: false },
                    asset: { enabled: true, actions: ['metadata_changed', 'created'] },
                    content_item: {
                        enabled: true,
                        filters: {
                            collections: [{ codename: 'y' }],
                            content_types: [{ codename: 'x' }],
                            languages: [{ codename: 'z' }]
                        },
                        actions: [
                            {
                                action: 'published',
                                transition_to: {
                                    workflow_identifier: {
                                        codename: 'x'
                                    },
                                    step_identifier: {
                                        codename: 'z'
                                    }
                                }
                            }
                        ]
                    },
                    language: {
                        enabled: true,
                        actions: ['changed'],
                        filters: { languages: [{ codename: 'y' }] }
                    },
                    taxonomy: {
                        enabled: true,
                        actions: ['term_changed'],
                        filters: { taxonomies: [{ codename: 'z' }] }
                    }
                },
                url: 's',
                enabled: true,
                headers: [
                    {
                        key: 'name',
                        value: 'value'
                    }
                ]
            })
            .toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmClient
            .addWebhook()
            .withData({} as any)
            .getUrl();
        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/webhooks-vnext`);
    });

    it(`response should be instance of AddWebhookResponse class`, () => {
        expect(response).toEqual(jasmine.any(WebhookResponses.AddWebhookResponse));
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

        // type checks
        expect(webhook.deliveryTriggers.asset).toEqual(jasmine.any(WebhookModels.WebhookDeliveryTriggersAsset));
        expect(webhook.deliveryTriggers.contentItem).toEqual(
            jasmine.any(WebhookModels.WebhookDeliveryTriggersContentItem)
        );
        expect(webhook.deliveryTriggers.contentType).toEqual(
            jasmine.any(WebhookModels.WebhookDeliveryTriggersContentType)
        );
        expect(webhook.deliveryTriggers.language).toEqual(jasmine.any(WebhookModels.WebhookDeliveryTriggersLanguage));
        expect(webhook.deliveryTriggers.taxonomy).toEqual(jasmine.any(WebhookModels.WebhookDeliveryTriggersTaxonomy));
    });
});
