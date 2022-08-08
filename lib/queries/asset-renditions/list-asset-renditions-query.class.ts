import { Identifiers } from '../../models/identifiers';
import { IManagementClientConfig } from '../../config';
import { AssetRenditionResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';

export class ListAssetRenditionsQuery extends BaseListingQuery<
    AssetRenditionResponses.AssetRenditionsListResponse,
    AssetRenditionResponses.AssetRenditionsListAllResponse
> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public identifier: Identifiers.AssetIdentifier
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<AssetRenditionResponses.AssetRenditionsListResponse> {
        return this.queryService.listAssetRenditionsAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.listAssetRenditions(this.identifier);
    }

    protected allResponseFactory(
        items: any[],
        responses: AssetRenditionResponses.AssetRenditionsListResponse[]
    ): AssetRenditionResponses.AssetRenditionsListAllResponse {
        return new AssetRenditionResponses.AssetRenditionsListAllResponse({
            items: items,
            responses: responses
        });
    }
}
