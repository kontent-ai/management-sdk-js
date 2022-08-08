import { IManagementClientConfig } from '../../config';
import { ProjectResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class StartProjectValidationQuery extends BaseQuery<ProjectResponses.StartProjectValidationResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<ProjectResponses.StartProjectValidationResponse> {
        return this.queryService.startProjectValidationAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.startProjectValidation();
    }
}
