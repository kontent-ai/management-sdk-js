

import { IManagementClientConfig } from '../../config';
import { WorkflowResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ListWorkflowStepsQuery extends BaseQuery<WorkflowResponses.ListWorkflowStepsResponse> {

  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ManagementQueryService
  ) {
    super(config, queryService);
  }

  toPromise(): Promise<WorkflowResponses.ListWorkflowStepsResponse> {
    return this.queryService.listWorkflowStepsAsync(this.getUrl(), this.queryConfig);
  }

  protected getAction(): string {
    return this.apiEndpoints.listWorkflowSteps();
  }
}
