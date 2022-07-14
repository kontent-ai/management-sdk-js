import { IHttpService, IRetryStrategyOptions } from '@kontent-ai/core-sdk';
import { IContentManagementListQueryConfig } from '../models';

export interface IManagementClientConfig {

    /**
     * API key
     */
     apiKey: string;

    /**
     * Kontent.ai project id
     */
    projectId?: string;

    /**
     * Kontent.ai subscription id
     */
    subscriptionId?: string;

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
