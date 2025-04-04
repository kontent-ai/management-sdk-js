import { WebhookContracts } from '../../contracts/webhook-contracts';
import { SharedModels } from '../shared/shared-models';

export namespace WebhookModels {
    export type WebhookWorkflowStepOperation = 'publish' | 'unpublish' | 'archive' | 'restore' | 'upsert';
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
    export type WebhookManagementContentChangesOperations = 'archive' | 'create' | 'restore';
    export type WebhookPreviewContentChangesOperations = 'archive' | 'upsert' | 'restore';
    export type WebhookDeliveryTriggerSlots = 'published' | 'preview';
    export type WebhookDeliveryTriggersEvents = 'all' | 'specific';
    export type WebhookHealthStatus = 'unknown' | 'working' | 'failing' | 'dead';

    export interface IAddLegacyWebhookData {
        name: string;
        secret: string;
        url: string;
        enabled?: boolean;
        triggers: {
            delivery_api_content_changes?: WebhookContracts.ILegacyWebhookDeliveryApiContentChangesContract[];
            preview_delivery_api_content_changes?: WebhookContracts.ILegacyWebhookPreviewDeliveryApiContentChangesContract[];
            workflow_step_changes?: WebhookContracts.ILegacyWebhookWorkflowStepChangesContract[];
            management_api_content_changes?: WebhookContracts.ILegacyWebhookManagementApiContentChangesContract[];
        };
    }
    export interface IAddWebhookData {
        name: string;
        secret: string;
        url: string;
        enabled?: boolean;
        headers?: IWebhookHeader[];

        delivery_triggers: {
            slot: WebhookDeliveryTriggerSlots;
            events: WebhookDeliveryTriggersEvents;
            asset?: WebhookContracts.IWebhookAssetContract;
            content_type?: WebhookContracts.IWebhookContentTypeContract;
            taxonomy?: WebhookContracts.IWebhookTaxonomyContract;
            language?: WebhookContracts.IWebhookLanguageContract;
            content_item?: WebhookContracts.IWebhookContentItemContract;
        };
    }

    export class WebhookDeliveryTriggersContentType {
        public enabled: boolean;
        public actions?: WebhookContracts.WebhookAction<WebhookContentTypeActions>[];
        public filters?: WebhookContracts.IContentTypeFilters;

        constructor(data: {
            enabled: boolean;
            actions?: WebhookContracts.WebhookAction<WebhookContentTypeActions>[];
            filters?: WebhookContracts.IContentTypeFilters;
        }) {
            this.enabled = data.enabled;
            this.actions = data.actions;
            this.filters = data.filters;
        }
    }

    export class WebhookDeliveryTriggersAsset {
        public enabled: boolean;
        public actions?: WebhookContracts.WebhookAction<WebhookAssetActions>[];

        constructor(data: { enabled: boolean; actions?: WebhookContracts.WebhookAction<WebhookAssetActions>[] }) {
            this.enabled = data.enabled;
            this.actions = data.actions;
        }
    }

    export class WebhookDeliveryTriggersTaxonomy {
        public enabled: boolean;
        public actions?: WebhookContracts.WebhookAction<WebhookTaxonomyActions>[];
        public filters?: WebhookContracts.ITaxonomyFilters;

        constructor(data: {
            enabled: boolean;
            actions?: WebhookContracts.WebhookAction<WebhookTaxonomyActions>[];
            filters?: WebhookContracts.ITaxonomyFilters;
        }) {
            this.enabled = data.enabled;
            this.actions = data.actions;
            this.filters = data.filters;
        }
    }

    export class WebhookDeliveryTriggersLanguage {
        public enabled: boolean;
        public actions?: WebhookContracts.WebhookAction<WebhookLanguageActions>[];
        public filters?: WebhookContracts.ILanguageFilters;

        constructor(data: {
            enabled: boolean;
            actions?: WebhookContracts.WebhookAction<WebhookLanguageActions>[];
            filters?: WebhookContracts.ILanguageFilters;
        }) {
            this.enabled = data.enabled;
            this.actions = data.actions;
            this.filters = data.filters;
        }
    }

    export class WebhookDeliveryTriggersContentItem {
        public enabled: boolean;
        public actions?: (WebhookContracts.WebhookAction<WebhookContentItemActions> & {
            transition_to?: WebhookContracts.ContentItemTransitionTo[];
        })[];
        public filters?: WebhookContracts.IContentItemFilters;

        constructor(data: {
            enabled: boolean;
            actions?: (WebhookContracts.WebhookAction<WebhookContentItemActions> & {
                transition_to?: WebhookContracts.ContentItemTransitionTo[];
            })[];
            filters?: WebhookContracts.IContentItemFilters;
        }) {
            this.enabled = data.enabled;
            this.actions = data.actions;
            this.filters = data.filters;
        }
    }

    export class WebhookTransitionsTo {
        public id: string;

        constructor(data: { id: string }) {
            this.id = data.id;
        }
    }

    export class LegacyWebhookWorkflowStepChanges {
        public type: 'content_item_variant';
        public transitionsTo: WebhookTransitionsTo[];

        constructor(data: { type: 'content_item_variant'; transitionsTo: WebhookTransitionsTo[] }) {
            this.type = data.type;
            this.transitionsTo = data.transitionsTo;
        }
    }

    export class LegacyWebhookDeliveryApiContentChanges {
        public type: 'taxonomy' | 'content_item_variant';
        public operations: WebhookWorkflowStepOperation[];

        constructor(data: { type: 'taxonomy' | 'content_item_variant'; operations: WebhookWorkflowStepOperation[] }) {
            this.type = data.type;
            this.operations = data.operations;
        }
    }

    export class LegacyWebhookPreviewDeliveryApiContentChanges {
        public type: 'taxonomy' | 'content_item_variant';
        public operations: WebhookPreviewContentChangesOperations[];

        constructor(data: {
            type: 'taxonomy' | 'content_item_variant';
            operations: WebhookPreviewContentChangesOperations[];
        }) {
            this.type = data.type;
            this.operations = data.operations;
        }
    }

    export class LegacyWebhookManagementApiContentChanges {
        public type: 'taxonomy' | 'content_item_variant';
        public operations: WebhookManagementContentChangesOperations[];

        constructor(data: {
            type: 'taxonomy' | 'content_item_variant';
            operations: WebhookManagementContentChangesOperations[];
        }) {
            this.type = data.type;
            this.operations = data.operations;
        }
    }

    export interface IWebhookHeader {
        key: string;
        value: string;
    }

    export class Webhook implements SharedModels.IBaseModel<WebhookContracts.IWebhookContract> {
        public id: string;
        public name: string;
        public secret: string;
        public url: string;
        public enabled?: boolean;
        public lastModified?: Date;
        public healthStatus?: WebhookHealthStatus;
        public headers?: IWebhookHeader[];
        public deliveryTriggers: {
            slot: WebhookDeliveryTriggerSlots;
            events: WebhookDeliveryTriggersEvents;
            asset?: WebhookContracts.IWebhookAssetContract;
            contentType?: WebhookContracts.IWebhookContentTypeContract;
            taxonomy?: WebhookContracts.IWebhookTaxonomyContract;
            language?: WebhookContracts.IWebhookLanguageContract;
            contentItem?: WebhookContracts.IWebhookContentItemContract;
        };
        public _raw: WebhookContracts.IWebhookContract;

        constructor(data: {
            id: string;
            name: string;
            secret: string;
            url: string;
            enabled?: boolean;
            lastModified?: Date;
            healthStatus?: WebhookHealthStatus;
            headers?: IWebhookHeader[];
            deliveryTriggers: {
                slot: WebhookDeliveryTriggerSlots;
                events: WebhookDeliveryTriggersEvents;
                asset?: WebhookContracts.IWebhookAssetContract;
                contentType?: WebhookContracts.IWebhookContentTypeContract;
                taxonomy?: WebhookContracts.IWebhookTaxonomyContract;
                language?: WebhookContracts.IWebhookLanguageContract;
                contentItem?: WebhookContracts.IWebhookContentItemContract;
            };
            _raw: WebhookContracts.IWebhookContract;
        }) {
            this.id = data.id;
            this.name = data.name;
            this.secret = data.secret;
            this.url = data.url;
            this.lastModified = data.lastModified;
            this.healthStatus = data.healthStatus;
            this.deliveryTriggers = data.deliveryTriggers;
            this.enabled = data.enabled;
            this.headers = data.headers;
            this._raw = data._raw;
        }
    }

    export class LegacyWebhook implements SharedModels.IBaseModel<WebhookContracts.ILegacyWebhookContract> {
        public id: string;
        public name: string;
        public secret: string;
        public url: string;
        public enabled?: boolean;
        public healthStatus?: string;
        public lastModified?: Date;
        public triggers: {
            deliveryApiContentChanges: LegacyWebhookDeliveryApiContentChanges[];
            previewDeliveryContentChanges: LegacyWebhookPreviewDeliveryApiContentChanges[];
            workflowStepChanges: LegacyWebhookWorkflowStepChanges[];
            managementApiContentChanges: LegacyWebhookManagementApiContentChanges[];
        };
        public _raw!: WebhookContracts.ILegacyWebhookContract;

        constructor(data: {
            id: string;
            name: string;
            secret: string;
            url: string;
            healthStatus?: string;
            lastModified?: Date;
            triggers: {
                deliveryApiContentChanges: LegacyWebhookDeliveryApiContentChanges[];
                workflowStepChanges: LegacyWebhookWorkflowStepChanges[];
                previewDeliveryContentChanges: LegacyWebhookPreviewDeliveryApiContentChanges[];
                managementApiContentChanges: LegacyWebhookManagementApiContentChanges[];
            };
            _raw: WebhookContracts.ILegacyWebhookContract;
        }) {
            this.id = data.id;
            this.name = data.name;
            this.secret = data.secret;
            this.url = data.url;
            this.triggers = data.triggers;
            this.lastModified = data.lastModified;
            this.healthStatus = data.healthStatus;
        }
    }
}
