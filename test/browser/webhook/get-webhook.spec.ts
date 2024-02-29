import { WebhookResponses, WebhookModels } from '../../../lib';
import * as responseJson from '../fake-responses/webhooks/fake-get-webhook.json';
import { cmLiveClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Get webhook', () => {
    let response: WebhookResponses.GetWebhookResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).getWebhook().byId('x').toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmLiveClient.getWebhook().byId('x').getUrl();
        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/webhooks-vnext/x`);
    });

    it(`response should be instance of GetWebhookResponse class`, () => {
        expect(response).toEqual(jasmine.any(WebhookResponses.GetWebhookResponse));
    });

    it('response should contain raw data', () => {
        expect(response.rawData).toBeDefined();
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
        expect(webhook.deliveryTriggers.asset).toEqual(jasmine.any(WebhookModels.WebhookDeliveryTriggersAsset));
        expect(webhook.deliveryTriggers.contentItem).toEqual(
            jasmine.any(WebhookModels.WebhookDeliveryTriggersContentItem)
        );
        expect(webhook.deliveryTriggers.contentType).toEqual(
            jasmine.any(WebhookModels.WebhookDeliveryTriggersContentType)
        );
        expect(webhook.deliveryTriggers.events).toEqual(originalItem.delivery_triggers.events);
        expect(webhook.deliveryTriggers.language).toEqual(jasmine.any(WebhookModels.WebhookDeliveryTriggersLanguage));
        expect(webhook.deliveryTriggers.slot).toEqual(originalItem.delivery_triggers.slot);
        expect(webhook.deliveryTriggers.taxonomy).toEqual(jasmine.any(WebhookModels.WebhookDeliveryTriggersTaxonomy));
    });
});
