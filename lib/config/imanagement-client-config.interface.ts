import { IHttpService, IRetryStrategyOptions } from '@kentico/kontent-core';
import { IContentManagementListQueryConfig } from '../models';

export interface IManagementClientConfig {
    /**
     * Kentico Kontent project id
     */
    projectId?: string;

    /**
     * Management API key
     */
    managementApiKey?: string;

    /**
     * Kentico Kontent subscription id
     */
    subscriptionId?: string;

    /**
     * Kentico Kontent subscription API Key
     */
    subscriptionApiKey?: string;

    /**
     * Base Url. Can be overriden if e.g. a proxy is required
     */
    baseUrl?: string;

    /**
     * Can be used to inject custom Http service to perform requests
     */
    httpService?: IHttpService<any>;

    /**
     * retry strategy options
     */
    retryStrategy?: IRetryStrategyOptions;

    /**
     * Custom default list query config. Applied to all list query configs unless overriden by query.
     */
    listQueryConfig?: IContentManagementListQueryConfig<any>;
}
