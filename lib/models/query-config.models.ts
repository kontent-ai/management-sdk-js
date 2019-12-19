import { HttpResponseType, IHeader } from '@kentico/kontent-core';

export interface IContentManagementQueryConfig {
    headers: IHeader[];
}

export interface IContentManagementInternalQueryConfig {
    responseType?: HttpResponseType;
}

export interface IContentManagementListQueryConfig {
    /**
     * Delay between each HTTP requests. Helps being rate limited by number of calls towards CM API.
     */
    delayBetweenRequests: number;
}
