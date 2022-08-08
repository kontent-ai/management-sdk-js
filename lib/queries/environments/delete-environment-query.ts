import { BaseQuery } from '../base-query';
import { BaseResponses } from '../../responses';
import { IManagementClientConfig } from '../../config';
import { ManagementQueryService } from '../../services';

export class DeleteEnvironmentQuery extends BaseQuery<BaseResponses.EmptyContentManagementResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<BaseResponses.EmptyContentManagementResponse> {
        return this.queryService.deleteEnvironmentAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.deleteEnvironment();
    }
}
