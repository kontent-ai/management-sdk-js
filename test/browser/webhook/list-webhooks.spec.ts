import { WebhookResponses, WebhookModels } from '../../../lib';
import * as responseJson from '../fake-responses/webhooks/fake-list-webhooks.json';
import { cmLiveClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('List webhooks', () => {
    let response: WebhookResponses.WebhookListResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).listWebhooks().toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmLiveClient.listWebhooks().getUrl();
        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/webhooks-vnext`);
    });

    it(`response should be instance of WebhookListResponse class`, () => {
        expect(response).toEqual(jasmine.any(WebhookResponses.WebhookListResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it('response should contain raw data', () =>{
        expect(response.rawData).toBeDefined();
    });

    it(`webhook properties should be mapped`, () => {
        expect(response.data.webhooks.length).toBeGreaterThan(0);

        for (const webhook of response.data.webhooks) {
            const originalItem = responseJson.find((m) => m.id === webhook.id);

            if (!originalItem) {
                throw Error(`Original webhook with id '${webhook.id}' was not found`);
            }

            expect(webhook.secret).toEqual(originalItem.secret);
            expect(webhook.name).toEqual(originalItem.name);
            expect(webhook.lastModified).toEqual(
                originalItem.last_modified ? new Date(originalItem.last_modified) : undefined
            );
            expect(webhook.url).toEqual(originalItem.url);
            expect(webhook.delivery_triggers.asset).toEqual(jasmine.any(WebhookModels.WebhookDeliveryTriggersAsset));
            expect(webhook.delivery_triggers.content_item).toEqual(jasmine.any(WebhookModels.WebhookDeliveryTriggersContentItem));
            expect(webhook.delivery_triggers.content_type).toEqual(jasmine.any(WebhookModels.WebhookDeliveryTriggersContentType));
            expect(webhook.delivery_triggers.events).toEqual(jasmine.any(String));
            expect(webhook.delivery_triggers.language).toEqual(jasmine.any(WebhookModels.WebhookDeliveryTriggersLanguage));
            expect(webhook.delivery_triggers.slot).toEqual(jasmine.any(String));
            expect(webhook.delivery_triggers.taxonomy).toEqual(jasmine.any(WebhookModels.WebhookDeliveryTriggersTaxonomy));
            }
    });
});
