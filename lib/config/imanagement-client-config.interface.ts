import { IHttpService, IRetryStrategyOptions } from '@kentico/kontent-core';

export interface IManagementClientConfig {
    /**
     * Kentico Kontent project id
     */
    projectId: string;

    /**
     * Content management API key
     */
    apiKey: string;

    /**
     * Base Url. Can be overriden if e.g. a proxy is required
     */
    baseUrl?: string;

     /**
     * Can be used to inject custom Http service to perform requests
     */
    httpService?: IHttpService;

    /**
     * retry strategy options
     */
    retryStrategy?: IRetryStrategyOptions;

    /**
    * When enabled, additional information are logged in console for certain issues.
    * Disable in production environments.
    */
    isDeveloperMode?: boolean;
}
