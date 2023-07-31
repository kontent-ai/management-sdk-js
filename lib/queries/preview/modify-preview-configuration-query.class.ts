import { IManagementClientConfig } from '../../config';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ModifyPreviewConfigurationQuery extends BaseQuery<any> {
    constructor(protected config: IManagementClientConfig, protected queryService: ManagementQueryService) {
        super(config, queryService);
    }

    toPromise(): Promise<any> {
        return this.queryService.getPreviewConfigurationAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.getPreviewConfigruation();
    }
}
