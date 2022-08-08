
import { BaseQuery } from '../base-query';
import { ManagementQueryService } from '../../services';
import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { BaseResponses } from '../../responses';

export class DeleteWorkflowQuery extends BaseQuery<BaseResponses.EmptyContentManagementResponse> {

    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public identifier: Identifiers.WorkflowIdentifier,
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<BaseResponses.EmptyContentManagementResponse> {
        return this.queryService.deleteWorkflowAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.deleteWorkflow(this.identifier);
    }
}
