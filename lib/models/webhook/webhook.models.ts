import { WebhookContracts } from '../../contracts/webhook-contracts';
import { SharedModels } from '../shared/shared-models';

export namespace WebhookModels {
    export interface IAddWebhookData {
        name: string;
        secret: string;
        url: string;
        enabled?: boolean;
        triggers: {
            delivery_api_content_changes: WebhookContracts.IWebhookDeliveryApiContentChangesContract[];
            preview_delivery_api_content_changes: WebhookContracts.IWebhookDeliveryApiContentChangesContract[];
            workflow_step_changes: WebhookContracts.IWebhookWorkflowStepChangesContract[];
            management_api_content_changes: WebhookContracts.IWebhookManagementApiContentChangesContract[];
        };
    }

    export type WebhookWorkflowStepOperation = 'publish' | 'unpublish' | 'archive' | 'restore' | 'upsert';

    export class WebhookTransitionsTo {
        public id: string;

        constructor(data: { id: string }) {
            this.id = data.id;
        }
    }

    export class WebhookWorkflowStepChanges {
        public type: 'content_item_variant';
        public transitionsTo: WebhookTransitionsTo[];

        constructor(data: { type: 'content_item_variant'; transitionsTo: WebhookTransitionsTo[] }) {
            this.type = data.type;
            this.transitionsTo = data.transitionsTo;
        }
    }

    export class WebhookDeliveryApiContentChanges {
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
        public triggers: {
            deliveryApiContentChanges: WebhookDeliveryApiContentChanges[];
            workflowStepChanges: WebhookWorkflowStepChanges[];
        };
        public _raw!: WebhookContracts.IWebhookContract;

        constructor(data: {
            id: string;
            name: string;
            secret: string;
            url: string;
            lastModified?: Date;
            triggers: {
                deliveryApiContentChanges: WebhookDeliveryApiContentChanges[];
                workflowStepChanges: WebhookWorkflowStepChanges[];
            };
            _raw: WebhookContracts.IWebhookContract
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
