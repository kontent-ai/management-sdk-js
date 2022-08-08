

import { IManagementClientConfig } from '../../config';
import { Identifiers, WorkflowModels } from '../../models';
import { WorkflowResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class UpdateWorkflowQuery extends BaseQuery<WorkflowResponses.UpdateWorkflowResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public data: WorkflowModels.IUpdateWorkflowData,
        public identifier: Identifiers.WorkflowIdentifier
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<WorkflowResponses.UpdateWorkflowResponse> {
        return this.queryService.updateWorkflowAsync(this.getUrl(), this.queryConfig, this.data);
    }

    protected getAction(): string {
        return this.apiEndpoints.updateWorkflow(this.identifier);
    }
}
