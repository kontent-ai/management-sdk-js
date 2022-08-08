import { BaseQuery } from '../base-query';
import { IManagementClientConfig } from '../../config';
import { ManagementQueryService } from '../../services';
import { EnvironmentModels } from '../../models/environments/environment.models';
import { EnvironmentResponses } from '../../responses/environments/environment-responses';


export class CloneEnvironmentQuery extends BaseQuery<EnvironmentResponses.CloneEnvironmentResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public data: EnvironmentModels.ICloneEnvironmentData
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<EnvironmentResponses.CloneEnvironmentResponse> {
        return this.queryService.cloneEnvironmentAsync(this.getUrl(), this.queryConfig, this.data);
    }

    protected getAction(): string {
        return this.apiEndpoints.cloneEnvironment();
    }
}
