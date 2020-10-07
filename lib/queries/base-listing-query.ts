import { Observable } from 'rxjs';

import { IManagementClientConfig } from '../config/imanagement-client-config.interface';
import { IContentManagementListQueryConfig } from '../models';
import { BaseResponses } from '../responses';
import { ContentManagementQueryService } from '../services';
import { BaseQuery } from './base-query';

export abstract class BaseListingQuery<
    TResponse extends BaseResponses.IContentManagementListResponse,
    TAllResponse extends BaseResponses.IContentManagementListAllResponse
> extends BaseQuery<TResponse> {
    protected readonly xContinuationHeaderName: string = 'x-continuation';
    protected listQueryConfig?: IContentManagementListQueryConfig<TResponse>;

    constructor(protected config: IManagementClientConfig, protected queryService: ContentManagementQueryService) {
        super(config, queryService);
    }

    /**
     * Configuration for list queries
     * @param config List configuration
     */
    withListQueryConfig(config?: IContentManagementListQueryConfig<TResponse>): this {
        this.listQueryConfig = config;
        return this;
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
            listQueryConfig: this.listQueryConfig,
            allResponseFactory: (items, responses) => this.allResponseFactory(items, responses),
            getResponse: token => {
                if (token) {
                    this.xContinuationToken(token).toObservable();
                }

                return this.toObservable();
            }
        });
    }

    /**
     * Query to get all items. Uses paging data and may execute multiple HTTP requests depending on number of items
     */
    toAllPromise(): Promise<TAllResponse> {
        return this.toAllObservable().toPromise();
    }

    protected abstract allResponseFactory(items: any[], responses: TResponse[]): TAllResponse;
}
