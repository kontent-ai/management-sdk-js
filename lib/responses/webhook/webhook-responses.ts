import { BaseResponses } from '../base-responses';
import { WebhookContracts } from '../../contracts/webhook-contracts';
import { WebhookModels } from '../../models/webhook/webhook.models';

export namespace WebhookResponses {
    export class GetWebhookResponse extends BaseResponses.BaseContentManagementResponse<WebhookContracts.IGetWebhookContract, WebhookModels.Webhook>  {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: WebhookContracts.IGetWebhookContract,
            data: WebhookModels.Webhook
        ) {
            super(debug, rawData, data);
        }
    }

    export class AddWebhookResponse extends BaseResponses.BaseContentManagementResponse<WebhookContracts.IAddWebhookContract, WebhookModels.Webhook>  {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: WebhookContracts.IAddWebhookContract,
            data: WebhookModels.Webhook
        ) {
            super(debug, rawData, data);
        }
    }

    export class WebhookListResponse extends BaseResponses.BaseContentManagementResponse<WebhookContracts.IWebhookListContract,
    {
        webhooks: WebhookModels.Webhook[],
    }>  {
    constructor(
        debug: BaseResponses.IContentManagementResponseDebug,
        rawData: WebhookContracts.IWebhookListContract,
        data: {
            webhooks: WebhookModels.Webhook[],
        }
    ) {
        super(debug, rawData, data);
    }
}
}
