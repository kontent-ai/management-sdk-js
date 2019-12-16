export namespace WebhookContracts {

    export interface IDeleteWebhookResponseContract {
    }

    export interface IWebhookTransitionsToContract {
        id: string;
    }

    export type WebhookWorkflowStepOperationContract = 'publish' | 'unpublish' | 'archive' | 'restore' | 'upsert';

    export interface IWebhookWorkflowStepChangesContract {
        type: 'content_item_variant';
        transitions_to: IWebhookTransitionsToContract[];
    }

    export interface IWebhookDeliveryApiContentChangesContract {
        type: 'taxonomy' | 'content_item_variant';
        operations: WebhookWorkflowStepOperationContract[];
    }

    export interface IWebhookContract {
        id: string;
        name: string;
        secret: string;
        url: string;
        last_modified?: string;
        triggers: {
            delivery_api_content_changes: IWebhookDeliveryApiContentChangesContract[],
            workflow_step_changes: IWebhookWorkflowStepChangesContract[],
        };
    }

    export interface IGetWebhookContract extends IWebhookContract {
    }

    export interface IAddWebhookContract extends IWebhookContract {
    }

    export type IWebhookListContract = IWebhookContract[];
}
