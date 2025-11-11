import { IResponse } from '@kontent-ai/core-sdk';
import { WebhookContracts } from '../contracts/webhook-contracts';
import { WebhookModels } from '../models/webhook/webhook.models';
import { WebhookResponses } from '../responses';

import { BaseMapper } from './base-mapper';

export class WebhookMapper extends BaseMapper {
    mapGetWebhookResponse(
        response: IResponse<WebhookContracts.IGetWebhookContract>
    ): WebhookResponses.GetWebhookResponse {
        return new WebhookResponses.GetWebhookResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapWebhook(response.data)
        );
    }

    mapAddWebhookResponse(
        response: IResponse<WebhookContracts.IGetWebhookContract>
    ): WebhookResponses.AddWebhookResponse {
        return new WebhookResponses.AddWebhookResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapWebhook(response.data)
        );
    }

    mapWebhooksListResponse(
        response: IResponse<WebhookContracts.IWebhookListContract>
    ): WebhookResponses.WebhookListResponse {
        return new WebhookResponses.WebhookListResponse(super.mapResponseDebug(response), response.data, {
            webhooks: response.data.map((m) => this.mapWebhook(m))
        });
    }

    mapWebhook(rawWebhook: WebhookContracts.IWebhookContract): WebhookModels.Webhook {
        return new WebhookModels.Webhook({
            id: rawWebhook.id,
            name: rawWebhook.name,
            lastModified: rawWebhook.last_modified ? new Date(rawWebhook.last_modified) : undefined,
            healthStatus: rawWebhook.health_status as WebhookModels.WebhookHealthStatus,
            enabled: rawWebhook.enabled,
            headers: rawWebhook.headers,
            secret: rawWebhook.secret,
            deliveryTriggers: {
                slot: rawWebhook.delivery_triggers.slot,
                events: rawWebhook.delivery_triggers.events,
                asset: rawWebhook.delivery_triggers.asset
                    ? new WebhookModels.WebhookDeliveryTriggersAsset({
                          enabled: rawWebhook.delivery_triggers.asset.enabled,
                          actions: rawWebhook.delivery_triggers.asset.actions
                      })
                    : undefined,
                contentType: rawWebhook.delivery_triggers.content_type
                    ? new WebhookModels.WebhookDeliveryTriggersContentType({
                          enabled: rawWebhook.delivery_triggers.content_type.enabled,
                          actions: rawWebhook.delivery_triggers.content_type.actions,
                          filters: rawWebhook.delivery_triggers.content_type.filters
                      })
                    : undefined,
                taxonomy: rawWebhook.delivery_triggers.taxonomy
                    ? new WebhookModels.WebhookDeliveryTriggersTaxonomy({
                          enabled: rawWebhook.delivery_triggers.taxonomy.enabled,
                          actions: rawWebhook.delivery_triggers.taxonomy.actions,
                          filters: rawWebhook.delivery_triggers.taxonomy.filters
                      })
                    : undefined,
                language: rawWebhook.delivery_triggers.language
                    ? new WebhookModels.WebhookDeliveryTriggersLanguage({
                          enabled: rawWebhook.delivery_triggers.language.enabled,
                          actions: rawWebhook.delivery_triggers.language.actions,
                          filters: rawWebhook.delivery_triggers.language.filters
                      })
                    : undefined,
                contentItem: rawWebhook.delivery_triggers.content_item
                    ? new WebhookModels.WebhookDeliveryTriggersContentItem({
                          enabled: rawWebhook.delivery_triggers.content_item.enabled,
                          actions: rawWebhook.delivery_triggers.content_item.actions,
                          filters: rawWebhook.delivery_triggers.content_item.filters
                      })
                    : undefined
            },
            url: rawWebhook.url,
            _raw: rawWebhook
        });
    }
}

export const webhookMapper = new WebhookMapper();
