

import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { WebhookResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class GetLegacyWebhookQuery extends BaseQuery<WebhookResponses.GetLegacyWebhookResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public identifier: Identifiers.WebhookIdentifier
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<WebhookResponses.GetLegacyWebhookResponse> {
        return this.queryService.getLegacyWebhookAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.getLegacyWebhook(this.identifier);
    }
}
