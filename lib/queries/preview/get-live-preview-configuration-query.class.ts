import { PreviewResponses } from '../../responses';
import { IManagementClientConfig } from '../../config';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class GetLivePreviewConfigurationQuery extends BaseQuery<PreviewResponses.LivePreviewConfigurationResponse> {
    constructor(protected config: IManagementClientConfig, protected queryService: ManagementQueryService) {
        super(config, queryService);
    }

    toPromise(): Promise<PreviewResponses.LivePreviewConfigurationResponse> {
        return this.queryService.getLivePreviewConfigurationAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.getLivePreviewConfiguration();
    }
}
