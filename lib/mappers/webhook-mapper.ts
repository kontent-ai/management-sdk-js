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

    mapEnableWebhookResponse(
        response: IResponse<WebhookContracts.IEnableWebhookContract>
    ): WebhookResponses.EnableWebhookResponse {
        return new WebhookResponses.EnableWebhookResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapWebhook(response.data)
        );
    }

    mapDisableWebhookResponse(
        response: IResponse<WebhookContracts.IDisableWebhookContract>
    ): WebhookResponses.DisableWebhookResponse {
        return new WebhookResponses.DisableWebhookResponse(
            super.mapResponseDebug(response),
            response.data,
            this.mapWebhook(response.data)
        );
    }

    mapWebhooksListResponse(
        response: IResponse<WebhookContracts.IWebhookListContract>
    ): WebhookResponses.WebhookListResponse {
        return new WebhookResponses.WebhookListResponse(super.mapResponseDebug(response), response.data, {
            webhooks: response.data.map(m => this.mapWebhook(m))
        });
    }

    mapWebhook(rawWebhook: WebhookContracts.IWebhookContract): WebhookModels.Webhook {
        return new WebhookModels.Webhook({
            id: rawWebhook.id,
            name: rawWebhook.name,
            lastModified: rawWebhook.last_modified ? new Date(rawWebhook.last_modified) : undefined,
            secret: rawWebhook.secret,
            triggers: {
                deliveryApiContentChanges: rawWebhook.triggers.delivery_api_content_changes.map(
                    m =>
                        new WebhookModels.WebhookDeliveryApiContentChanges({
                            operations: m.operations,
                            type: m.type
                        })
                ),
                workflowStepChanges: rawWebhook.triggers.workflow_step_changes.map(
                    m =>
                        new WebhookModels.WebhookWorkflowStepChanges({
                            transitionsTo: m.transitions_to.map(
                                s =>
                                    new WebhookModels.WebhookTransitionsTo({
                                        id: s.id
                                    })
                            ),
                            type: m.type
                        })
                )
            },
            url: rawWebhook.url,
            _raw: rawWebhook
        });
    }
}

export const webhookMapper = new WebhookMapper();
