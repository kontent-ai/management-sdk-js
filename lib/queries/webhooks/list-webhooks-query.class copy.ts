

import { IManagementClientConfig } from '../../config';
import { WebhookResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ListLegacyWebhooksQuery extends BaseQuery<WebhookResponses.LegacyWebhookListResponse> {
    constructor(protected config: IManagementClientConfig, protected queryService: ManagementQueryService) {
        super(config, queryService);
    }

    toPromise(): Promise<WebhookResponses.LegacyWebhookListResponse> {
        return this.queryService.listLegacyWebhooksAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.listWebhooks();
    }
}
