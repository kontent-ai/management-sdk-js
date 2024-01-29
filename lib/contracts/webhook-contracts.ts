import { SharedContracts } from './shared-contracts';

export namespace WebhookContracts {
    export type WebhookWorkflowStepOperationContract = 'publish' | 'unpublish' | 'archive' | 'restore' | 'upsert';
    export type WebhookManagementContentChangesOperations = 'archive' | 'create' | 'restore';
    export type WebhookPreviewContentChangesOperations = 'archive' | 'upsert' | 'restore';
    export type WebhookContentTypeActions = 'created' | 'changed' | 'deleted';
    export type WebhookAssetActions = 'created' | 'changed' | 'metadata_changed' | 'deleted';
    export type WebhookTaxonomyActions =
        | 'created'
        | 'metadata_changed'
        | 'deleted'
        | 'term_created'
        | 'term_changed'
        | 'term_deleted'
        | 'terms_moved';
    export type WebhookLanguageActions = 'created' | 'changed' | 'deleted';
    export type WebhookContentItemActions =
        | 'published'
        | 'unpublished'
        | 'created'
        | 'changed'
        | 'metadata_changed'
        | 'deleted'
        | 'workflow_step_changed';
    export type WebhookDeliveryTriggerSlots = 'published' | 'preview';
    export type WebhookDeliveryTriggersEvents = 'all' | 'specific';

    export interface IDeleteWebhookResponseContract {}

    export interface ILegacyWebhookTransitionsToContract {
        id: string;
    }

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

    export interface ILegacyWebhookPreviewDeliveryApiContentChangesContract {
        type: 'taxonomy' | 'content_item_variant';
        operations: WebhookPreviewContentChangesOperations[];
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

    export interface IContentItemFilters {
        collections?: SharedContracts.IReferenceObjectContract[];
        content_types?: SharedContracts.IReferenceObjectContract[];
        languages?: SharedContracts.IReferenceObjectContract[];
    }
    export interface IContentItemActions {
        action: WebhookContentItemActions;
        transition_to: {
            workflow_identifier: SharedContracts.ICodenameIdReferenceContract;
            step_identifier: SharedContracts.ICodenameIdReferenceContract;
        };
    }
    export interface IWebhookContentItemContract {
        enabled: boolean;
        actions?: IContentItemActions[];
        filters?: IContentItemFilters;
    }

    export interface ILegacyWebhookContract {
        id: string;
        name: string;
        secret: string;
        url: string;
        last_modified?: string;
        health_status?: string;
        triggers: {
            delivery_api_content_changes: ILegacyWebhookDeliveryApiContentChangesContract[];
            workflow_step_changes: ILegacyWebhookWorkflowStepChangesContract[];
            preview_delivery_api_content_changes: ILegacyWebhookPreviewDeliveryApiContentChangesContract[];
            management_api_content_changes: ILegacyWebhookManagementApiContentChangesContract[];
        };
    }

    export interface IWebhookContract {
        id: string;
        name: string;
        secret: string;
        url: string;
        last_modified?: string;
        enabled?: boolean;
        health_status?: string;
        delivery_triggers: {
            slot: WebhookDeliveryTriggerSlots;
            events: WebhookDeliveryTriggersEvents;
            asset?: IWebhookAssetContract;
            content_type?: IWebhookContentTypeContract;
            taxonomy?: IWebhookTaxonomyContract;
            language?: IWebhookLanguageContract;
            content_item?: IWebhookContentItemContract;
        };
    }

    export interface IGetLegacyWebhookContract extends ILegacyWebhookContract {}

    export interface IGetWebhookContract extends IWebhookContract {}

    export interface IAddLegacyWebhookContract extends ILegacyWebhookContract {}

    export interface IAddWebhookContract extends IWebhookContract {}

    export type ILegacyWebhookListContract = ILegacyWebhookContract[];

    export type IWebhookListContract = IWebhookContract[];
}
