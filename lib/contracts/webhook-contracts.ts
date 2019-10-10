export namespace WebhookContracts {

    export interface IWebhookContract {
        webhook_identifier: string;
    }

    export interface IViewTaxonomyResponseContract extends IWebhookContract {
    }

    export interface IAddTaxonomyResponseContract extends IWebhookContract {
    }

    export interface IDeleteWebhookResponseContract {
    }
}
