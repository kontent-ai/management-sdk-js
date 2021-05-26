

import { IManagementClientConfig } from '../../config';
import { WebhookResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ListWebhooksQuery extends BaseQuery<WebhookResponses.WebhookListResponse> {
    constructor(protected config: IManagementClientConfig, protected queryService: ContentManagementQueryService) {
        super(config, queryService);
    }

    toPromise(): Promise<WebhookResponses.WebhookListResponse> {
        return this.queryService.listWebhooks(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.listWebhooks();
    }
}
