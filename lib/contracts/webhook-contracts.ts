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

    export interface IGetWebhookContract extends IWebhookContract {}

    export interface IAddWebhookContract extends IWebhookContract {}

    export type IWebhookListContract = IWebhookContract[];
}
