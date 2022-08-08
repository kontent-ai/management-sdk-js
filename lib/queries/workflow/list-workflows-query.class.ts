import { IManagementClientConfig } from '../../config';
import { WorkflowResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ListWorkflowsQuery extends BaseQuery<WorkflowResponses.ListWorkflowsResponse> {
    constructor(protected config: IManagementClientConfig, protected queryService: ManagementQueryService) {
        super(config, queryService);
    }

    toPromise(): Promise<WorkflowResponses.ListWorkflowsResponse> {
        return this.queryService.listWorkflowsAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.listWorkflows();
    }
}
