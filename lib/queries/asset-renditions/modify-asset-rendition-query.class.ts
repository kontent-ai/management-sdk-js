import { IManagementClientConfig } from '../../config';
import { Identifiers, AssetRenditionModels } from '../../models';
import { AssetRenditionResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ModifyAssetRenditionQuery extends BaseQuery<AssetRenditionResponses.ModifyAssetRenditionResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public assetIdentifier: Identifiers.AssetIdentifier,
        public renditionIdentifier: Identifiers.RenditionIdentifier,
        public data: AssetRenditionModels.IModifyAssetRenditionData
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<AssetRenditionResponses.ModifyAssetRenditionResponse> {
        return this.queryService.modifyAssetRenditionAsync(this.getUrl(), this.queryConfig, this.data);
    }

    protected getAction(): string {
        return this.apiEndpoints.modifyAssetRendition(this.assetIdentifier, this.renditionIdentifier);
    }
}
