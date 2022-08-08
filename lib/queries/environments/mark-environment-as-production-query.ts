import { BaseQuery } from '../base-query';
import { IManagementClientConfig } from '../../config';
import { ManagementQueryService } from '../../services';
import { EnvironmentModels } from '../../models/environments/environment.models';
import { BaseResponses } from '../../responses';

export class MarkEnvironmentAsProductionQuery extends BaseQuery<BaseResponses.EmptyContentManagementResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public data: EnvironmentModels.IMarkEnvironmentAsProductionData
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<BaseResponses.EmptyContentManagementResponse> {
        return this.queryService.markEnvironmentAsProductionAsync(this.getUrl(), this.queryConfig, this.data);
    }

    protected getAction(): string {
        return this.apiEndpoints.markEnvironmentAsProduction();
    }
}
