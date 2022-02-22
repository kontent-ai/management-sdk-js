import { BaseQuery } from '../base-query';
import { EnvironmentResponses } from '../../responses/environments/environment-responses';
import { IManagementClientConfig } from '../../config';
import { ContentManagementQueryService } from '../../services';
import { EnvironmentModels } from '../../models/environments/environments.model';

export class RenameEnvironmentQuery extends BaseQuery<EnvironmentResponses.RenameEnvironmentResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        public data: EnvironmentModels.IRenameEnvironmentData[]) {
        super(config, queryService);
    }

    toPromise(): Promise<EnvironmentResponses.RenameEnvironmentResponse> {
        return this.queryService.renameEnvironment(this.getUrl(), this.queryConfig, this.data);
    }

    protected getAction(): string {
        return this.apiEndpoints.renameEnvironment();
    }
}
