

import { IManagementClientConfig } from '../../config';
import { WebhookModels } from '../../models';
import { WebhookResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class AddWebhookQuery extends BaseQuery<WebhookResponses.AddWebhookResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public data: WebhookModels.IAddWebhookData
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<WebhookResponses.GetWebhookResponse> {
        return this.queryService.addWebhookAsync(this.getUrl(), this.queryConfig, this.data);
    }

    protected getAction(): string {
        return this.apiEndpoints.addWebhook();
    }
}
