import { IManagementClientConfig } from '../../config';
import { CustomAppsResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ListCustomAppsQuery extends BaseQuery<CustomAppsResponses.ListCustomAppsResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<CustomAppsResponses.ListCustomAppsResponse> {
        return this.queryService.listCustomAppsAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.listCustomApps();
    }
}
