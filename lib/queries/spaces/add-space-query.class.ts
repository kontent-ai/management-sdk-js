import { IManagementClientConfig } from '../../config';
import { SpaceResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
import { SpaceModels } from '../../models';

export class AddSpaceQuery extends BaseQuery<SpaceResponses.AddSpaceResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public data: SpaceModels.IAddSpaceData
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<SpaceResponses.AddSpaceResponse> {
        return this.queryService.addSpaceAsync(this.getUrl(), this.data, this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.addSpace();
    }
}
