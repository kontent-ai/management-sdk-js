

import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { WebhookResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class GetWebhookQuery extends BaseQuery<WebhookResponses.GetWebhookResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public identifier: Identifiers.WebhookIdentifier
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<WebhookResponses.GetWebhookResponse> {
        return this.queryService.getWebhookAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.getWebhook(this.identifier);
    }
}
