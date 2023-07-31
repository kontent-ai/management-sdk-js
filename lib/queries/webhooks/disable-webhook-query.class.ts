import { IManagementClientConfig } from '../../config';
import { BaseResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
import { Identifiers } from '../../models';

export class DisableWebhookQuery extends BaseQuery<BaseResponses.EmptyContentManagementResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public identifier: Identifiers.WebhookIdentifier
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<BaseResponses.EmptyContentManagementResponse> {
        return this.queryService.disableWebhookAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.disableWebhook(this.identifier);
    }
}
