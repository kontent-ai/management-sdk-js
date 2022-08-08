import { Identifiers } from '../../models';
import { IManagementClientConfig } from '../../config';
import { ProjectResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class CheckProjectValidationQuery extends BaseQuery<ProjectResponses.StartProjectValidationResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        public taskIdentifier: Identifiers.TaskIdentifier,
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<ProjectResponses.StartProjectValidationResponse> {
        return this.queryService.checkProjectValidation(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.checkProjectValidation(this.taskIdentifier);
    }
}
