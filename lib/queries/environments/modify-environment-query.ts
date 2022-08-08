import { BaseQuery } from '../base-query';
import { EnvironmentResponses } from '../../responses/environments/environment-responses';
import { IManagementClientConfig } from '../../config';
import { ManagementQueryService } from '../../services';
import { EnvironmentModels } from '../../models/environments/environment.models';

export class ModifyEnvironmentQuery extends BaseQuery<EnvironmentResponses.ModifyEnvironmentResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public data: EnvironmentModels.IModifyEnvironmentData[]) {
        super(config, queryService);
    }

    toPromise(): Promise<EnvironmentResponses.ModifyEnvironmentResponse> {
        return this.queryService.modifyEnvironmentAsync(this.getUrl(), this.queryConfig, this.data);
    }

    protected getAction(): string {
        return this.apiEndpoints.modifyEnvironment();
    }
}
