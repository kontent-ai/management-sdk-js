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
}
