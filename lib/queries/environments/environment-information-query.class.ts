import { IManagementClientConfig } from '../../config';
import { EnvironmentResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class EnvironmentInformationQuery extends BaseQuery<EnvironmentResponses.EnvironmentInformationResponse> {
    constructor(protected config: IManagementClientConfig, protected queryService: ManagementQueryService) {
        super(config, queryService);
    }

    toPromise(): Promise<EnvironmentResponses.EnvironmentInformationResponse> {
        return this.queryService.environmentInformationAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.environmentInformation();
    }
}
