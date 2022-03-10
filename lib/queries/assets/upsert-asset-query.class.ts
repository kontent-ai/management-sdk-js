import { IManagementClientConfig } from '../../config';
import { AssetElementsBuilder, assetElementsBuilder, AssetModels, Identifiers } from '../../models';
import { AssetResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class UpsertAssetQuery extends BaseQuery<AssetResponses.UpdateAssetResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        public identifier: Identifiers.AssetIdentifier,
        public data: (builder: AssetElementsBuilder) => AssetModels.IUpsertAssetRequestData
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<AssetResponses.UpsertAssertResponse> {
        return this.queryService.upsertAsset(this.getUrl(), this.data(assetElementsBuilder), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.upsertAsset(this.identifier);
    }
}
