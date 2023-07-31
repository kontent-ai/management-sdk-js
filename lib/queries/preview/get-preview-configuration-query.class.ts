import { PreviewResponses } from '../../responses';
import { IManagementClientConfig } from '../../config';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class GetPreviewConfigurationQuery extends BaseQuery<PreviewResponses.PreviewConfigurationResponse> {
    constructor(protected config: IManagementClientConfig, protected queryService: ManagementQueryService) {
        super(config, queryService);
    }

    toPromise(): Promise<PreviewResponses.PreviewConfigurationResponse> {
        return this.queryService.getPreviewConfigurationAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.getPreviewConfigruation();
    }
}
