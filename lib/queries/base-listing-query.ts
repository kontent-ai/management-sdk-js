import { IManagementClientConfig } from '../config/imanagement-client-config.interface';
import { BaseResponses } from '../responses';
import { ContentManagementQueryService } from '../services';
import { BaseQuery } from './base-query';

export abstract class BaseListingQuery<TResponse extends BaseResponses.IContentManagementResponse> extends BaseQuery<
    TResponse
> {
    protected readonly xContinuationHeaderName: string = 'x-continuation';

    constructor(protected config: IManagementClientConfig, protected queryService: ContentManagementQueryService) {
        super(config, queryService);
    }

    /**
     * Determines the page of results to retrieve. Sets the 'x-continuation' header value.
     * @param token Value from continuation_token property
     */
    xContinuationToken(token: string): this {
        this.queryConfig.headers.push({
            header: this.xContinuationHeaderName,
            value: token
        });
        return this;
    }
}
