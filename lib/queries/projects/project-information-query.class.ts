import { IManagementClientConfig } from '../../config';
import { ProjectResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ProjectInformationQuery extends BaseQuery<ProjectResponses.ProjectInformationResponse> {
    constructor(protected config: IManagementClientConfig, protected queryService: ManagementQueryService) {
        super(config, queryService);
    }

    toPromise(): Promise<ProjectResponses.ProjectInformationResponse> {
        return this.queryService.projectInformationAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.projectInformation();
    }
}
