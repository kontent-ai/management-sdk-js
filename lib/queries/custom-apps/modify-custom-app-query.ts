import { IManagementClientConfig } from '../../config';
import { CustomAppModels, Identifiers } from '../../models';
import { CustomAppsResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ModifyCustomAppQuery extends BaseQuery<CustomAppsResponses.ModifyCustomAppResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public identifier: Identifiers.CustomAppIdentifier,
        public data: CustomAppModels.ModifyCustomAppOperation[]
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<CustomAppsResponses.ModifyCustomAppResponse> {
        return this.queryService.modifyCustomAppAsync(this.getUrl(), this.data, this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.modifyCustomApp(this.identifier);
    }
}
