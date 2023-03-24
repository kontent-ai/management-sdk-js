import { Identifiers } from '../../models';
import { IManagementClientConfig } from '../../config';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
import { EnvironmentResponses } from '../../responses';

export class CheckEnvironmentValidationQuery extends BaseQuery<EnvironmentResponses.StartEnvironmentValidationResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public identifier: Identifiers.TaskIdentifier
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<EnvironmentResponses.StartEnvironmentValidationResponse> {
        return this.queryService.checkEnvironmentValidationAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.checkEnvironmentValidation(this.identifier);
    }
}
