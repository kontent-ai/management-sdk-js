import { IManagementClientConfig } from '../../config';
import { WorkflowResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ListWorkflowsQuery extends BaseQuery<WorkflowResponses.ListWorkflowsResponse> {
    constructor(protected config: IManagementClientConfig, protected queryService: ContentManagementQueryService) {
        super(config, queryService);
    }

    toPromise(): Promise<WorkflowResponses.ListWorkflowsResponse> {
        return this.queryService.listWorkflows(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.listWorkflows();
    }
}
