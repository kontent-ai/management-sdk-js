
import { BaseQuery } from '../base-query';
import { ContentManagementQueryService } from '../../services';
import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { BaseResponses } from '../../responses';

export class DeleteWorkflowQuery extends BaseQuery<BaseResponses.EmptyContentManagementResponse> {

    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        public identifier: Identifiers.WorkflowIdentifier,
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<BaseResponses.EmptyContentManagementResponse> {
        return this.queryService.deleteWorkflow(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.deleteWorkflow(this.identifier);
    }
}
