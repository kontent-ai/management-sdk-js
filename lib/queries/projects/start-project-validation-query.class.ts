import { IManagementClientConfig } from '../../config';
import { ProjectResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class StartProjectValidationQuery extends BaseQuery<ProjectResponses.StartProjectValidationResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<ProjectResponses.StartProjectValidationResponse> {
        return this.queryService.startProjectValidation(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.startProjectValidation();
    }
}
