import { Observable } from 'rxjs';

import { IManagementClientConfig } from '../../config';
import { AssetModels } from '../../models';
import { AssetResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
import { IHeader } from '@kentico/kontent-core';

export class UploadBinaryFileQuery extends BaseQuery<AssetResponses.UploadBinaryFileResponse> {

  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ContentManagementQueryService,
    public data: AssetModels.IUploadBinaryFileRequestData,
  ) {
    super(config, queryService);

    const uploadBinaryQueryHeaders: IHeader[] = [
        { header: 'Content-type', value: data.contentType },
    ];

    if (data.contentLength) {
        uploadBinaryQueryHeaders.push(
            { header: 'Content-length', value: data.contentLength.toString() }
        );
    }

    // add headers required for uploading binary files by mutating config obj
    this.queryConfig.headers.push(...uploadBinaryQueryHeaders);
  }

  toObservable(): Observable<AssetResponses.UploadBinaryFileResponse> {
    return this.queryService.uploadBinaryFile(this.getUrl(), this.data, this.queryConfig);
  }

  protected getAction(): string {
    return this.apiEndpoints.uploadBinaryFile(this.data.filename);
  }
}

