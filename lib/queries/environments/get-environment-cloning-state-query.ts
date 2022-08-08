import { BaseQuery } from '../base-query';
import { EnvironmentResponses } from '../../responses/environments/environment-responses';
import { IManagementClientConfig } from '../../config';
import { ManagementQueryService } from '../../services';

export class GetEnvironmentCloningStateQuery extends BaseQuery<EnvironmentResponses.GetCloningStateResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService) {
        super(config, queryService);
    }

    toPromise(): Promise<EnvironmentResponses.GetCloningStateResponse> {
        return this.queryService.getEnvironmentCloningStateAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.getEnvironmentCloningStatus();
    }
}
