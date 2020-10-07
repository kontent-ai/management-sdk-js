import { HttpResponseType, IHeader } from '@kentico/kontent-core';
import { BaseResponses } from '../responses/base-responses';

export interface IContentManagementQueryConfig {
    headers: IHeader[];
}

export interface IContentManagementInternalQueryConfig {
    responseType?: HttpResponseType;
}

export interface IContentManagementListQueryConfig<TResponse extends BaseResponses.IContentManagementListResponse> {
    /**
     * Delay between each HTTP requests. Helps being rate limited by number of calls towards CM API.
     */
    delayBetweenRequests?: number;

    /**
     * Executed when a list response is loaded
     */
    responseFetched?: (response: TResponse, continuationToken?: string) => void;
}
