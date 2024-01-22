import { BaseResponses } from '../base-responses';
import { WebhookContracts } from '../../contracts/webhook-contracts';
import { WebhookModels } from '../../models/webhook/webhook.models';

export namespace WebhookResponses {
    export class GetLegacyWebhookResponse extends BaseResponses.BaseContentManagementResponse<
        WebhookContracts.IGetLegacyWebhookContract,
        WebhookModels.LegacyWebhook
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: WebhookContracts.IGetLegacyWebhookContract,
            data: WebhookModels.LegacyWebhook
        ) {
            super(debug, rawData, data);
        }
    }

    export class GetWebhookResponse extends BaseResponses.BaseContentManagementResponse<
        WebhookContracts.IGetWebhookContract,
        WebhookModels.Webhook
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: WebhookContracts.IGetWebhookContract,
            data: WebhookModels.Webhook
        ) {
            super(debug, rawData, data);
        }
    }

    export class AddLegacyWebhookResponse extends BaseResponses.BaseContentManagementResponse<
        WebhookContracts.IAddLegacyWebhookContract,
        WebhookModels.LegacyWebhook
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: WebhookContracts.IAddLegacyWebhookContract,
            data: WebhookModels.LegacyWebhook
        ) {
            super(debug, rawData, data);
        }
    }

    export class AddWebhookResponse extends BaseResponses.BaseContentManagementResponse<
    WebhookContracts.IAddWebhookContract,
    WebhookModels.Webhook
> {
    constructor(
        debug: BaseResponses.IContentManagementResponseDebug,
        rawData: WebhookContracts.IAddWebhookContract,
        data: WebhookModels.Webhook
    ) {
        super(debug, rawData, data);
    }
}


    export class LegacyWebhookListResponse extends BaseResponses.BaseContentManagementResponse<
        WebhookContracts.ILegacyWebhookListContract,
        {
            webhooks: WebhookModels.LegacyWebhook[];
        }
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: WebhookContracts.ILegacyWebhookListContract,
            data: {
                webhooks: WebhookModels.LegacyWebhook[];
            }
        ) {
            super(debug, rawData, data);
        }
    }
    export class WebhookListResponse extends BaseResponses.BaseContentManagementResponse<
    WebhookContracts.IWebhookListContract,
    {
        webhooks: WebhookModels.Webhook[];
    }
> {
    constructor(
        debug: BaseResponses.IContentManagementResponseDebug,
        rawData: WebhookContracts.IWebhookListContract,
        data: {
            webhooks: WebhookModels.Webhook[];
        }
    ) {
        super(debug, rawData, data);
    }
}

}
