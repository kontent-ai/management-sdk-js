import { IManagementClientConfig } from '../../config';
import { CustomAppModels } from '../../models';
import { CustomAppsResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class AddCustomAppQuery extends BaseQuery<CustomAppsResponses.AddCustomAppResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public data: CustomAppModels.IAddCustomAppData
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<CustomAppsResponses.AddCustomAppResponse> {
        return this.queryService.addCustomAppAsync(this.getUrl(), this.data, this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.addCustomApp();
    }
}
