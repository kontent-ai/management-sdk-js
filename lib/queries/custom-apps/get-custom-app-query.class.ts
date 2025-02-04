import { IManagementClientConfig } from '../../config';
import { CustomAppsResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
import { Identifiers } from '../../models';

export class GetCustomAppQuery extends BaseQuery<CustomAppsResponses.GetCustomAppResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public identifier: Identifiers.CustomAppIdentifier
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<CustomAppsResponses.GetCustomAppResponse> {
        return this.queryService.getCustomAppAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.getCustomApp(this.identifier);
    }
}
