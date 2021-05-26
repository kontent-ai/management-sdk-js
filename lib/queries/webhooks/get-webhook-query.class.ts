

import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { WebhookResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class GetWebhookQuery extends BaseQuery<WebhookResponses.GetWebhookResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        public identifier: Identifiers.WebhookIdentifier
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<WebhookResponses.GetWebhookResponse> {
        return this.queryService.getWebhook(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.getWebhook(this.identifier);
    }
}
