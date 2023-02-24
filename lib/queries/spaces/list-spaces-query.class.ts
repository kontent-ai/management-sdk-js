

import { IManagementClientConfig } from '../../config';
import { SpaceResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';

export class ListSpacesQuery extends BaseListingQuery<
    SpaceResponses.SpacesResponse,
    SpaceResponses.SpacesListAllResponse
> {
    constructor(protected config: IManagementClientConfig, protected queryService: ManagementQueryService) {
        super(config, queryService);
    }

    toPromise(): Promise<SpaceResponses.SpacesResponse> {
        return this.queryService.listSpacesAsync(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.listSpaces();
    }

    protected allResponseFactory(
        items: any[],
        responses: SpaceResponses.SpacesResponse[]
    ): SpaceResponses.SpacesListAllResponse {
        return new SpaceResponses.SpacesListAllResponse({
            items: items,
            responses: responses
        });
    }
}
