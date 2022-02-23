import { BaseQuery } from '../base-query';
import { EnvironmentResponses } from '../../responses/environments/environment-responses';
import { IManagementClientConfig } from '../../config';
import { ContentManagementQueryService } from '../../services';
import { EnvironmentModels } from '../../models/environments/environment.models';

export class ModifyEnvironmentQuery extends BaseQuery<EnvironmentResponses.ModifyEnvironmentResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        public data: EnvironmentModels.IModifyEnvironmentData[]) {
        super(config, queryService);
    }

    toPromise(): Promise<EnvironmentResponses.ModifyEnvironmentResponse> {
        return this.queryService.modifyEnvironment(this.getUrl(), this.queryConfig, this.data);
    }

    protected getAction(): string {
        return this.apiEndpoints.modifyEnvironment();
    }
}
