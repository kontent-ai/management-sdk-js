export namespace WebhookContracts {

    export interface IDeleteWebhookResponseContract {
    }

    export interface ILegacyWebhookTransitionsToContract {
        id: string;
    }

    export type WebhookWorkflowStepOperationContract = 'publish' | 'unpublish' | 'archive' | 'restore' | 'upsert';

    export type WebhookManagementContentChangesOperations = 'archive' | 'create' | 'restore';

    export type WebhookContentTypeActions = 'created' | 'changed' | 'deleted';

    export type WebhookAssetActions = 'created' | 'changed' | 'metadata_changed' | 'deleted';

    export type WebhookTaxonomyActions = 'created' | 'metadata_changed' | 'deleted' | 'term_created' | 'term_changed' | 'term_deleted'| 'terms_moved';

    export type WebhookLanguageActions = 'created' | 'changed' | 'deleted';

    export type WebhookContentItemActions = 'published' | 'unpublished' | 'created' | 'changed' | 'metadata_changed' | 'deleted' | 'workflow_step_changed';

    export interface ILegacyWebhookWorkflowStepChangesContract {
        type: 'content_item_variant';
        transitions_to: ILegacyWebhookTransitionsToContract[];
    }

    export interface ILegacyWebhookManagementApiContentChangesContract {
        type: 'content_item_variant';
        operations: WebhookManagementContentChangesOperations[];
    }

    export interface ILegacyWebhookDeliveryApiContentChangesContract {
        type: 'taxonomy' | 'content_item_variant';
        operations: WebhookWorkflowStepOperationContract[];
    }

    export interface IWebhookContentTypeContract {
        enabled: boolean;
        actions?: WebhookContentTypeActions[];
    }

    export interface IWebhookAssetContract {
        enabled: boolean;
        actions?: WebhookAssetActions[];
    }

    export interface IWebhookTaxonomyContract {
        enabled: boolean;
        actions?: WebhookTaxonomyActions[];
    }

    export interface IWebhookLanguageContract {
        enabled: boolean;
        actions?: WebhookLanguageActions[];
    }

    export interface IWebhookContentItemContract {
        enabled: boolean;
        actions: WebhookContentItemActions[];
    }

    export interface ILegacyWebhookContract {
        id: string;
        name: string;
        secret: string;
        url: string;
        last_modified?: string;
        triggers: {
            delivery_api_content_changes: ILegacyWebhookDeliveryApiContentChangesContract[],
            workflow_step_changes: ILegacyWebhookWorkflowStepChangesContract[],
        };
    }

    export interface IWebhookContract {
        id: string;
        name: string;
        secret: string;
        url: string;
        last_modified?: string;
        delivery_triggers: {
            slot: string;
            events: string;
            asset?: IWebhookAssetContract[];
            content_type?: IWebhookContentTypeContract[];
            taxonomy?: IWebhookTaxonomyContract[];
            language?: IWebhookLanguageContract[];
            content_item?: IWebhookContentItemContract[];

        }
    }

    export interface IGetWebhookContract extends ILegacyWebhookContract {
    }

    export interface IAddWebhookContract extends ILegacyWebhookContract {
    }

    export type IWebhookListContract = ILegacyWebhookContract[];
}
