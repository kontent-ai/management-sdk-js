

import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { AssetResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ViewAssetsQuery extends BaseQuery<AssetResponses.ViewAssetResponse> {

  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ManagementQueryService,
    public identifier: Identifiers.AssetIdentifier,
  ) {
    super(config, queryService);
  }

  toPromise(): Promise<AssetResponses.ViewAssetResponse> {
    return this.queryService.viewAssetAsync(this.getUrl(), this.queryConfig);
  }

  protected getAction(): string {
      return this.apiEndpoints.viewAsset(this.identifier);
  }
}

