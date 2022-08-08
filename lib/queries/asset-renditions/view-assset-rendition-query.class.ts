import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { AssetRenditionResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ViewAssetRenditionQuery extends BaseQuery<AssetRenditionResponses.ViewAssetRenditionResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public assetIdentifier: Identifiers.AssetIdentifier,
        public renditionIdentifier: Identifiers.RenditionIdentifier
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<AssetRenditionResponses.ViewAssetRenditionResponse> {
        return this.queryService.viewAssetRenditionAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.viewAssetRendition(this.assetIdentifier, this.renditionIdentifier);
    }
}
