import { IManagementClientConfig } from '../../config';
import { EnvironmentResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class StartEnvironmentValidationQuery extends BaseQuery<EnvironmentResponses.StartEnvironmentValidationResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<EnvironmentResponses.StartEnvironmentValidationResponse> {
        return this.queryService.startEnvironmentValidationAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.startProjectValidation();
    }
}
