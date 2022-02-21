import { BaseQuery } from '../base-query';
import { EnvironmentResponses } from '../../responses/environments/environment-responses';
import { IManagementClientConfig } from '../../config';
import { ContentManagementQueryService } from '../../services';

export class GetEnvironmentCloningStateQuery extends BaseQuery<EnvironmentResponses.GetCloningStateResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService) {
        super(config, queryService);
    }

    toPromise(): Promise<EnvironmentResponses.GetCloningStateResponse> {
        return this.queryService.getEnvironmentCloningState(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.getEnvironmentCloningStatus();
    }
}
