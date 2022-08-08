

import { IManagementClientConfig } from '../../config';
import { AssetModels } from '../../models';
import { AssetResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class UploadBinaryFileQuery extends BaseQuery<AssetResponses.UploadBinaryFileResponse> {

  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ManagementQueryService,
    public data: AssetModels.IUploadBinaryFileRequestData,
  ) {
    super(config, queryService);
  }

  toPromise(): Promise<AssetResponses.UploadBinaryFileResponse> {
    return this.queryService.uploadBinaryFileAsync(this.getUrl(), this.data, this.queryConfig);
  }

  protected getAction(): string {
    return this.apiEndpoints.uploadBinaryFile(this.data.filename);
  }
}

