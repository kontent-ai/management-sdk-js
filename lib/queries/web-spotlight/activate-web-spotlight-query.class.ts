import { WebSpotlightResponses } from '../../responses';
import { IManagementClientConfig } from '../../config';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
import { WebSpotlightModels } from '../../models';

export class ActivateWebSpotlightQuery extends BaseQuery<WebSpotlightResponses.WebSpotlightStatusResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService,
        public data: WebSpotlightModels.IActivateWebSpotlightData
    ) {
        super(config, queryService);
    }

    toPromise(): Promise<WebSpotlightResponses.WebSpotlightStatusResponse> {
        return this.queryService.activateWebSpotlightAsync(this.getUrl(), this.queryConfig, this.data);
    }

    protected getAction(): string {
        return this.apiEndpoints.activateWebSpotlight();
    }
}
