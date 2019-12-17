import { Observable } from 'rxjs';

import { IManagementClientConfig } from '../config/imanagement-client-config.interface';
import { BaseResponses } from '../responses';
import { ContentManagementQueryService } from '../services';
import { BaseQuery } from './base-query';

export abstract class BaseListingQuery<
    TResponse extends BaseResponses.IContentManagementListResponse,
    TAllResponse extends BaseResponses.IContentManagementListAllResponse
> extends BaseQuery<TResponse> {
    protected readonly xContinuationHeaderName: string = 'x-continuation';

    constructor(protected config: IManagementClientConfig, protected queryService: ContentManagementQueryService) {
        super(config, queryService);
    }

    /**
     * Sets the 'x-continuation' header value. This can be used for fetching next pages.
     * @param token Value from continuation_token property
     */
    xContinuationToken(token: string): this {
        this.queryConfig.headers.push({
            header: this.xContinuationHeaderName,
            value: token
        });
        return this;
    }

    /**
     * Query to get all items. Uses paging data and may execute multiple HTTP requests depending on number of items
     */
    toAllObservable(): Observable<TAllResponse> {
        return this.queryService.getListAllResponse<TResponse, TAllResponse>({
            allResponseFactory: (items, responses) => this.allResponseFactory(items, responses),
            getResponse: (token) => {
                if (token) {
                    this.xContinuationToken(token).toObservable();
                }

                return this.toObservable();
            },
        });
    }

    /**
     * Query to get all items. Uses paging data and may execute multiple HTTP requests depending on number of items
     */
    toAllPromise(): Promise<BaseResponses.ContentManagementListAllResponse<TResponse, TAllResponse>> {
        return this.toAllObservable().toPromise();
    }

    protected abstract allResponseFactory(items: any[], responses: TResponse[]): TAllResponse;

}
