import { BaseResponses } from '../base-responses';
import { WebhookContracts } from '../../contracts/webhook-contracts';

export namespace WebhookResponses {

    export class DeleteWebhookResponse extends BaseResponses.BaseContentManagementResponse<WebhookContracts.IDeleteWebhookResponseContract, void>  {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: WebhookContracts.IDeleteWebhookResponseContract,
            data: void
        ) {
            super(debug, rawData, data);
        }
    }
}
