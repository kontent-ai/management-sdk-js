

import { IManagementClientConfig } from '../../config';
import { WebhookResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
import { Identifiers } from '../../models';

export class EnableWebhookQuery extends BaseQuery<WebhookResponses.EnableWebhookResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        public identifier: Identifiers.WebhookIdentifier
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<WebhookResponses.EnableWebhookResponse> {
        return this.queryService.enableWebhook(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.enableWebhook(this.identifier);
    }
}
