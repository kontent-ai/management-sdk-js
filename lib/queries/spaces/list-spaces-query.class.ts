

import { IManagementClientConfig } from '../../config';
import { SpaceResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ListSpacesQuery extends BaseQuery<SpaceResponses.SpacesListResponse> {
    constructor(protected config: IManagementClientConfig, protected queryService: ManagementQueryService) {
        super(config, queryService);
    }

    toPromise(): Promise<SpaceResponses.SpacesListResponse> {
        return this.queryService.listSpacesAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.listSpaces();
    }

}
