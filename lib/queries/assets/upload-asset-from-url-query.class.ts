import { IManagementClientConfig } from '../../config';
import { AssetModels } from '../../models';
import { AssetResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class UploadAssetFromUrlQuery extends BaseQuery<AssetResponses.AddAssetResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public data: AssetModels.IUploadAssetFromUrlRequestData
    ) {
        super(config, queryService);

        this.withUrl('none'); // do not set url as there are multiple endpoints used
    }

    toPromise(): Promise<AssetResponses.AddAssetResponse> {
        return this.queryService.uploadAssetFromUrlAsync(
            this.getUploadBinaryFileUrl(),
            this.getAddAssetUrl(),
            this.data,
            this.queryConfig
        );
    }

    getAddAssetUrl(): string {
        return super.getUrlForAction(this.apiEndpoints.addAsset());
    }

    getUploadBinaryFileUrl(): string {
        return super.getUrlForAction(this.apiEndpoints.uploadBinaryFile(this.data.binaryFile.filename));
    }

    protected getAction(): string {
        return this.apiEndpoints.addAsset();
    }
}
