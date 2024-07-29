import { WebSpotlightResponses } from '../../responses';
import { IManagementClientConfig } from '../../config';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class DeactivateWebSpotlightQuery extends BaseQuery<WebSpotlightResponses.WebSpotlightStatusResponse> {
    constructor(protected config: IManagementClientConfig, protected queryService: ManagementQueryService) {
        super(config, queryService);
    }

    toPromise(): Promise<WebSpotlightResponses.WebSpotlightStatusResponse> {
        return this.queryService.deactivateWebSpotlightAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.deactivateWebSpotlight();
    }
}
