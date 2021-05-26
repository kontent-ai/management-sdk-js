

import { IManagementClientConfig } from '../../config';
import { WebhookResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
import { Identifiers } from '../../models';

export class DisableWebhookQuery extends BaseQuery<WebhookResponses.DisableWebhookResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        public identifier: Identifiers.WebhookIdentifier
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<WebhookResponses.DisableWebhookResponse> {
        return this.queryService.disableWebhook(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.disableWebhook(this.identifier);
    }
}
