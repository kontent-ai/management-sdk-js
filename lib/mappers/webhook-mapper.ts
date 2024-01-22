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

    mapGetLegacyWebhookResponse(
        response: IResponse<WebhookContracts.IGetLegacyWebhookContract>
    ): WebhookResponses.GetLegacyWebhookResponse {
        return new WebhookResponses.GetLegacyWebhookResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapLegacyWebhook(response.data)
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

    mapAddLegacyWebhookResponse(
        response: IResponse<WebhookContracts.IGetLegacyWebhookContract>
    ): WebhookResponses.AddLegacyWebhookResponse {
        return new WebhookResponses.AddLegacyWebhookResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapLegacyWebhook(response.data)
        );
    }

    mapWebhooksListResponse(
        response: IResponse<WebhookContracts.IWebhookListContract>
    ): WebhookResponses.WebhookListResponse {
        return new WebhookResponses.WebhookListResponse(super.mapResponseDebug(response), response.data, {
            webhooks: response.data.map((m) => this.mapWebhook(m))
        });
    }

    mapLegacyWebhooksListResponse(
        response: IResponse<WebhookContracts.ILegacyWebhookListContract>
    ): WebhookResponses.LegacyWebhookListResponse {
        return new WebhookResponses.LegacyWebhookListResponse(super.mapResponseDebug(response), response.data, {
            webhooks: response.data.map((m) => this.mapLegacyWebhook(m))
        });
    }

    mapLegacyWebhook(rawWebhook: WebhookContracts.ILegacyWebhookContract): WebhookModels.LegacyWebhook {
        return new WebhookModels.LegacyWebhook({
            id: rawWebhook.id,
            name: rawWebhook.name,
            lastModified: rawWebhook.last_modified ? new Date(rawWebhook.last_modified) : undefined,
            healthStatus: rawWebhook.health_status ? rawWebhook.health_status : undefined,
            secret: rawWebhook.secret,
            triggers: {
                deliveryApiContentChanges: rawWebhook.triggers.delivery_api_content_changes.map(
                    (m) =>
                        new WebhookModels.LegacyWebhookDeliveryApiContentChanges({
                            operations: m.operations,
                            type: m.type
                        })
                ),
                workflowStepChanges: rawWebhook.triggers.workflow_step_changes.map(
                    (m) =>
                        new WebhookModels.LegacyWebhookWorkflowStepChanges({
                            transitionsTo: m.transitions_to.map(
                                (s) =>
                                    new WebhookModels.WebhookTransitionsTo({
                                        id: s.id
                                    })
                            ),
                            type: m.type
                        })
                ),
                previewDeliveryContentChanges: rawWebhook.triggers.preview_delivery_api_content_changes.map(
                    (m) =>
                        new WebhookModels.LegacyWebhookPreviewDeliveryApiContentChanges({
                            operations: m.operations,
                            type: m.type
                        })
                ),
                managementApiContentChanges: rawWebhook.triggers.management_api_content_changes.map(
                    (m) =>
                        new WebhookModels.LegacyWebhookManagementApiContentChanges({
                            operations: m.operations,
                            type: m.type
                        })
                )
            },
            url: rawWebhook.url,
            _raw: rawWebhook
        });
    }

    mapWebhook(rawWebhook: WebhookContracts.IWebhookContract): WebhookModels.Webhook {
        return new WebhookModels.Webhook({
            id: rawWebhook.id,
            name: rawWebhook.name,
            lastModified: rawWebhook.last_modified ? new Date(rawWebhook.last_modified) : undefined,
            healthStatus: rawWebhook.health_status as WebhookModels.WebhookHealthStatus,
            enabled: rawWebhook.enabled,
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
                          actions: rawWebhook.delivery_triggers.content_type.actions
                      })
                    : undefined,
                taxonomy: rawWebhook.delivery_triggers.taxonomy
                    ? new WebhookModels.WebhookDeliveryTriggersTaxonomy({
                          enabled: rawWebhook.delivery_triggers.taxonomy.enabled,
                          actions: rawWebhook.delivery_triggers.taxonomy.actions
                      })
                    : undefined,
                language: rawWebhook.delivery_triggers.language
                    ? new WebhookModels.WebhookDeliveryTriggersLanguage({
                          enabled: rawWebhook.delivery_triggers.language.enabled,
                          actions: rawWebhook.delivery_triggers.language.actions
                      })
                    : undefined,
                contentItem: rawWebhook.delivery_triggers.content_item
                    ? new WebhookModels.WebhookDeliveryTriggersContentItem({
                          enabled: rawWebhook.delivery_triggers.content_item.enabled,
                          actions: rawWebhook.delivery_triggers.content_item.actions
                      })
                    : undefined
            },
            url: rawWebhook.url,
            _raw: rawWebhook
        });
    }
}

export const webhookMapper = new WebhookMapper();
