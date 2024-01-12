

import { IManagementClientConfig } from '../../config';
import { WebhookModels } from '../../models';
import { WebhookResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class AddLegacyWebhookQuery extends BaseQuery<WebhookResponses.AddLegacyWebhookResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public data: WebhookModels.IAddLegacyWebhookData
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<WebhookResponses.GetLegacyWebhookResponse> {
        return this.queryService.addLegacyWebhookAsync(this.getUrl(), this.queryConfig, this.data);
    }

    protected getAction(): string {
        return this.apiEndpoints.addLegacyWebhook();
    }
}

