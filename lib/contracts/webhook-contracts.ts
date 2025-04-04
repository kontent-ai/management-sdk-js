import { SharedContracts } from './shared-contracts';

export namespace WebhookContracts {
    export type WebhookWorkflowStepOperationContract = 'publish' | 'unpublish' | 'archive' | 'restore' | 'upsert';
    export type WebhookManagementContentChangesOperation = 'archive' | 'create' | 'restore';
    export type WebhookPreviewContentChangesOperation = 'archive' | 'upsert' | 'restore';
    export type WebhookContentTypeAction = 'created' | 'changed' | 'deleted';
    export type WebhookAssetAction = 'created' | 'changed' | 'metadata_changed' | 'deleted';
    export type WebhookTaxonomyAction =
        | 'created'
        | 'metadata_changed'
        | 'deleted'
        | 'term_created'
        | 'term_changed'
        | 'term_deleted'
        | 'terms_moved';
    export type WebhookLanguageAction = 'created' | 'changed' | 'deleted';
    export type WebhookContentItemAction =
        | 'published'
        | 'unpublished'
        | 'created'
        | 'changed'
        | 'metadata_changed'
        | 'deleted'
        | 'workflow_step_changed';
    export type WebhookDeliveryTriggerSlot = 'published' | 'preview';
    export type WebhookDeliveryTriggersEvent = 'all' | 'specific';

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
        operations: WebhookManagementContentChangesOperation[];
    }

    export interface ILegacyWebhookDeliveryApiContentChangesContract {
        type: 'taxonomy' | 'content_item_variant';
        operations: WebhookWorkflowStepOperationContract[];
    }

    export interface ILegacyWebhookPreviewDeliveryApiContentChangesContract {
        type: 'taxonomy' | 'content_item_variant';
        operations: WebhookPreviewContentChangesOperation[];
    }

    export type WebhookAction<
        T extends
            | WebhookContentTypeAction
            | WebhookAssetAction
            | WebhookTaxonomyAction
            | WebhookLanguageAction
            | WebhookContentItemAction
    > = {
        action: T;
    };

    export interface IWebhookContentTypeContract {
        enabled: boolean;
        actions?: WebhookAction<WebhookContentTypeAction>[];
        filters?: IContentTypeFilters;
    }

    export interface IWebhookAssetContract {
        enabled: boolean;
        actions?: WebhookAction<WebhookAssetAction>[];
    }

    export interface IWebhookTaxonomyContract {
        enabled: boolean;
        actions?: WebhookAction<WebhookTaxonomyAction>[];
        filters?: ITaxonomyFilters;
    }

    export interface IWebhookLanguageContract {
        enabled: boolean;
        actions?: WebhookAction<WebhookLanguageAction>[];
        filters?: ILanguageFilters;
    }

    export interface IContentItemFilters {
        collections?: SharedContracts.IReferenceObjectContract[];
        content_types?: SharedContracts.IReferenceObjectContract[];
        languages?: SharedContracts.IReferenceObjectContract[];
    }

    export interface IContentTypeFilters {
        content_types?: SharedContracts.IReferenceObjectContract[];
    }

    export interface ITaxonomyFilters {
        taxonomies?: SharedContracts.IReferenceObjectContract[];
    }

    export interface ILanguageFilters {
        languages?: SharedContracts.IReferenceObjectContract[];
    }

    export type ContentItemTransitionTo = {
        workflow_identifier: SharedContracts.ICodenameIdReferenceContract;
        step_identifier: SharedContracts.ICodenameIdReferenceContract;
    };

    export interface IWebhookContentItemContract {
        enabled: boolean;
        actions?: (WebhookAction<WebhookContentItemAction> & { transition_to?: ContentItemTransitionTo[] })[];
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

    export interface IWebhookHeaderContract {
        key: string;
        value: string;
    }

    export interface IWebhookContract {
        id: string;
        name: string;
        secret: string;
        url: string;
        last_modified?: string;
        enabled?: boolean;
        headers?: IWebhookHeaderContract[];
        health_status?: string;
        delivery_triggers: {
            slot: WebhookDeliveryTriggerSlot;
            events: WebhookDeliveryTriggersEvent;
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
