import { BaseQuery } from '../base-query';
import { BaseResponses } from '../../responses';
import { IManagementClientConfig } from '../../config';
import { ContentManagementQueryService } from '../../services';

export class DeleteEnvironmentQuery extends BaseQuery<BaseResponses.EmptyContentManagementResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<BaseResponses.EmptyContentManagementResponse> {
        return this.queryService.deleteEnvironment(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.deleteEnvironment();
    }
}
