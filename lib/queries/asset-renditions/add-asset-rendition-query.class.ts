import { IManagementClientConfig } from '../../config';
import { Identifiers, AssetRenditionModels } from '../../models';
import { AssetRenditionResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class AddAssetRenditionQuery extends BaseQuery<AssetRenditionResponses.AddAssetRenditionResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public assetIdentifier: Identifiers.AssetIdentifier,
        public data: AssetRenditionModels.IAddAssetRenditionData
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<AssetRenditionResponses.AddAssetRenditionResponse> {
        return this.queryService.addAssetRenditionAsync(this.getUrl(), this.queryConfig, this.data);
    }

    protected getAction(): string {
        return this.apiEndpoints.addAssetRendition(this.assetIdentifier);
    }
}
