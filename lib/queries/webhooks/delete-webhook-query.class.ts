
import { BaseQuery } from '../base-query';
import { ManagementQueryService } from '../../services';
import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { BaseResponses } from '../../responses';

export class DeleteWebhookQuery extends BaseQuery<BaseResponses.EmptyContentManagementResponse> {

    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public identifier: Identifiers.WebhookIdentifier,
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<BaseResponses.EmptyContentManagementResponse> {
        return this.queryService.deleteWebhookAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.deleteWebhook(this.identifier);
    }
}
