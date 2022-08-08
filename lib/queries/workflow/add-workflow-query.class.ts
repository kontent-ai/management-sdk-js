

import { IManagementClientConfig } from '../../config';
import { WorkflowModels } from '../../models';
import { WorkflowResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class AddWorkflowQuery extends BaseQuery<WorkflowResponses.AddWorkflowResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public data: WorkflowModels.IAddWorkflowData
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<WorkflowResponses.AddWorkflowResponse> {
        return this.queryService.addWorkflowAsync(this.getUrl(), this.queryConfig, this.data);
    }

    protected getAction(): string {
        return this.apiEndpoints.addWorkflow();
    }
}
