import { Identifiers } from '../../models';
import { IManagementClientConfig } from '../../config';
import { EnvironmentResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';

export class ListEnvironmentValidationIssuesQuery extends BaseListingQuery<
    EnvironmentResponses.EnvironmentValidationIssuesListResponse,
    EnvironmentResponses.EnvironmentValidationIssuesListAllResponse
> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public taskIdentifier: Identifiers.TaskIdentifier
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<EnvironmentResponses.EnvironmentValidationIssuesListResponse> {
        return this.queryService.listEnvironmentValidationIssuesAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.listEnvironmentIssues(this.taskIdentifier);
    }

    protected allResponseFactory(
        items: any[],
        responses: EnvironmentResponses.EnvironmentValidationIssuesListResponse[]
    ): EnvironmentResponses.EnvironmentValidationIssuesListAllResponse {
        return new EnvironmentResponses.EnvironmentValidationIssuesListAllResponse({
            items: items,
            responses: responses
        });
    }
}
