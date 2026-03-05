import { PreviewResponses } from '../../responses';
import { IManagementClientConfig } from '../../config';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
import { PreviewModels } from '../../models';

export class ChangeLivePreviewConfigurationQuery extends BaseQuery<PreviewResponses.ChangeLivePreviewConfigurationResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        private data: PreviewModels.IChangeLivePreviewConfigurationData
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<PreviewResponses.ChangeLivePreviewConfigurationResponse> {
        return this.queryService.changeLivePreviewConfigurationAsync(this.getUrl(), this.queryConfig, this.data);
    }

    protected getAction(): string {
        return this.apiEndpoints.changeLivePreviewConfiguration();
    }
}
