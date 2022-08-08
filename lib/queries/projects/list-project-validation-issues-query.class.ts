import { Identifiers } from '../../models';
import { IManagementClientConfig } from '../../config';
import { ProjectResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';

export class ListProjectValidationIssuesQuery extends BaseListingQuery<
    ProjectResponses.ProjectValidationIssuesListResponse,
    ProjectResponses.ProjectValidationIssuesListAllResponse
> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        public taskIdentifier: Identifiers.TaskIdentifier
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<ProjectResponses.ProjectValidationIssuesListResponse> {
        return this.queryService.listProjectValidationIssues(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.listProjectIssues(this.taskIdentifier);
    }

    protected allResponseFactory(
        items: any[],
        responses: ProjectResponses.ProjectValidationIssuesListResponse[]
    ): ProjectResponses.ProjectValidationIssuesListAllResponse {
        return new ProjectResponses.ProjectValidationIssuesListAllResponse({
            items: items,
            responses: responses
        });
    }
}
