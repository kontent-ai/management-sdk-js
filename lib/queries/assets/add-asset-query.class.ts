

import { IManagementClientConfig } from '../../config';
import { assetElementsBuilder, AssetElementsBuilder, AssetModels } from '../../models';
import { AssetResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class AddAssetQuery extends BaseQuery<AssetResponses.AddAssetResponse> {

  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ContentManagementQueryService,
    public data: (builder: AssetElementsBuilder) => AssetModels.IAddAssetRequestData,
  ) {
    super(config, queryService);
  }

  toPromise(): Promise<AssetResponses.AddAssetResponse> {
    return this.queryService.addAsset(this.getUrl(), this.data(assetElementsBuilder), this.queryConfig);
  }

  protected getAction(): string {
    return this.apiEndpoints.addAsset();
  }
}

