import { PreviewResponses } from '../../responses';
import { IManagementClientConfig } from '../../config';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
import { PreviewModels } from '../../models';

export class ModifyPreviewConfigurationQuery extends BaseQuery<PreviewResponses.ModifyConfigurationResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        private data: PreviewModels.IModifyPreviewConfigurationData
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<PreviewResponses.ModifyConfigurationResponse> {
        return this.queryService.modifyPreviewConfigurationAsync(this.getUrl(), this.queryConfig, this.data);
    }

    protected getAction(): string {
        return this.apiEndpoints.modifyPreviewConfigruation();
    }
}
