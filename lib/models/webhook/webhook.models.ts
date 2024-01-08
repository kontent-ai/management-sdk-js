import { WebhookContracts } from '../../contracts/webhook-contracts';
import { SharedModels } from '../shared/shared-models';

export namespace WebhookModels {
    export interface IAddLegacyWebhookData {
        name: string;
        secret: string;
        url: string;
        enabled?: boolean;
        triggers: {
            delivery_api_content_changes?: WebhookContracts.ILegacyWebhookDeliveryApiContentChangesContract[];
            preview_delivery_api_content_changes?: WebhookContracts.ILegacyWebhookDeliveryApiContentChangesContract[];
            workflow_step_changes?: WebhookContracts.ILegacyWebhookWorkflowStepChangesContract[];
            management_api_content_changes?: WebhookContracts.ILegacyWebhookManagementApiContentChangesContract[];
        };
    }
    export interface IAddWebhookModel {
        id: string;
        name: string;
        secret: string;
        url: string;
        last_modified?: string;
        delivery_triggers: {
            slot: string;
            events: string;
            asset?: WebhookContracts.IWebhookAssetContract[];
            content_type?: WebhookContracts.IWebhookContentTypeContract[];
            taxonomy?: WebhookContracts.IWebhookTaxonomyContract[];
            language?: WebhookContracts.IWebhookLanguageContract[];
            content_item?: WebhookContracts.IWebhookContentItemContract[];
        };
    };



    export type WebhookWorkflowStepOperation = 'publish' | 'unpublish' | 'archive' | 'restore' | 'upsert';

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

    export class Webhook implements SharedModels.IBaseModel<WebhookContracts.IWebhookContract> {
        public id: string;
        public name: string;
        public secret: string;
        public url: string;
        public lastModified?: Date;
        delivery_triggers: {
            slot: string;
            events: string;
            asset?: WebhookContracts.IWebhookAssetContract[];
            content_type?: WebhookContracts.IWebhookContentTypeContract[];
            taxonomy?: WebhookContracts.IWebhookTaxonomyContract[];
            language?: WebhookContracts.IWebhookLanguageContract[];
            content_item?: WebhookContracts.IWebhookContentItemContract[];

        };
        public _raw!: WebhookContracts.IWebhookContract;

        constructor(data: {
            id: string;
            name: string;
            secret: string;
            url: string;
            lastModified?: Date;
            delivery_triggers: {
                slot: string;
                events: string;
                asset?: WebhookContracts.IWebhookAssetContract[];
                content_type?: WebhookContracts.IWebhookContentTypeContract[];
                taxonomy?: WebhookContracts.IWebhookTaxonomyContract[];
                language?: WebhookContracts.IWebhookLanguageContract[];
                content_item?: WebhookContracts.IWebhookContentItemContract[];
    
            };
            _raw: WebhookContracts.IWebhookContract
        }) {
            this.id = data.id;
            this.name = data.name;
            this.secret = data.secret;
            this.url = data.url;
            this.lastModified = data.lastModified;
            this.delivery_triggers = data.delivery_triggers;
        }


    };

    export class LegacyWebhook implements SharedModels.IBaseModel<WebhookContracts.ILegacyWebhookContract> {
        public id: string;
        public name: string;
        public secret: string;
        public url: string;
        public lastModified?: Date;
        public triggers: {
            deliveryApiContentChanges: LegacyWebhookDeliveryApiContentChanges[];
            workflowStepChanges: LegacyWebhookWorkflowStepChanges[];
        };
        public _raw!: WebhookContracts.ILegacyWebhookContract;

        constructor(data: {
            id: string;
            name: string;
            secret: string;
            url: string;
            lastModified?: Date;
            triggers: {
                deliveryApiContentChanges: LegacyWebhookDeliveryApiContentChanges[];
                workflowStepChanges: LegacyWebhookWorkflowStepChanges[];
            };
            _raw: WebhookContracts.ILegacyWebhookContract
        }) {
            this.id = data.id;
            this.name = data.name;
            this.secret = data.secret;
            this.url = data.url;
            this.triggers = data.triggers;
            this.lastModified = data.lastModified;
        }
    }
}
