import {
    headerHelper,
    IResponse,
    IHeader,
    IHttpService,
    IQueryParameter,
    ISDKInfo,
    urlHelper
} from '@kentico/kontent-core';
import { AxiosError } from 'axios';

import { IManagementClientConfig } from '../config/imanagement-client-config.interface';
import { SharedContracts } from '../contracts';
import { IContentManagementInternalQueryConfig, IContentManagementQueryConfig, SharedModels } from '../models';

export abstract class BaseContentManagementQueryService<TCancelToken> {
    /**
     * Default base url for content management API
     */
    private readonly defaultBaseCMUrl: string = 'https://manage.kontent.ai/v2/projects';

    constructor(
        protected readonly config: IManagementClientConfig,
        protected readonly httpService: IHttpService<TCancelToken>,
        protected readonly sdkInfo: ISDKInfo
    ) {}

    /**
     * Gets url based on the action, query configuration and options (parameters)
     * @param action Action (= url part) that will be hit
     * @param options Query options
     * @param addSlash Indicates if slash is added to query
     */
    getFullUrl(action: string, options?: IQueryParameter[], addSlash: boolean = true): string {
        return urlHelper.addOptionsToUrl(this.getBaseUrl() + (addSlash ? '/' : '') + action, options);
    }

    /**
     * Gets proper set of headers for given request.
     * @param config Query config
     */
    getHeaders(config: IContentManagementQueryConfig): IHeader[] {
        const headers: IHeader[] = [
            // sdk tracking header
            headerHelper.getSdkIdHeader({
                host: this.sdkInfo.host,
                name: this.sdkInfo.name,
                version: this.sdkInfo.version
            }),
            // add authorization header
            this.getAuthorizationHeader(this.config.apiKey)
        ];

        // add query headers
        headers.push(...config.headers);

        return headers;
    }

    /**
     * Http PATCH response
     * @param url Url of request
     * @param config Query configuration
     */
    protected async patchResponseAsync<TRawData>(
        url: string,
        body: any,
        internalConfig: IContentManagementInternalQueryConfig,
        config: IContentManagementQueryConfig
    ): Promise<IResponse<TRawData>> {
        try {
            return await this.httpService.patchAsync<TRawData>(
                {
                    url: url,
                    body: body
                },
                {
                    cancelToken: config.cancelTokenRequest,
                    retryStrategy: this.config.retryStrategy,
                    headers: this.getHeaders(config),
                    responseType:
                        internalConfig && internalConfig.responseType ? internalConfig.responseType : undefined
                }
            );
        } catch (error) {
            throw this.mapContentManagementError(error);
        }
    }

    /**
     * Http GET response
     * @param url Url of request
     * @param config Query configuration
     */
    protected async getResponseAsync<TRawData>(
        url: string,
        internalConfig: IContentManagementInternalQueryConfig,
        config: IContentManagementQueryConfig
    ): Promise<IResponse<TRawData>> {
        try {
            return await this.httpService.getAsync<TRawData>(
                {
                    url: url
                },
                {
                    cancelToken: config.cancelTokenRequest,
                    retryStrategy: this.config.retryStrategy,
                    headers: this.getHeaders(config),
                    responseType:
                        internalConfig && internalConfig.responseType ? internalConfig.responseType : undefined
                }
            );
        } catch (err) {
            throw this.mapContentManagementError(err);
        }
    }

    /**
     * Http POST response
     * @param url Url of request
     * @param body Body of the request (names and values)
     * @param config Query configuration
     */
    protected async postResponseAsync<TRawData>(
        url: string,
        body: any,
        internalConfig: IContentManagementInternalQueryConfig,
        config: IContentManagementQueryConfig
    ): Promise<IResponse<TRawData>> {
        try {
            return this.httpService.postAsync<TRawData>(
                {
                    url: url,
                    body: body
                },
                {
                    cancelToken: config.cancelTokenRequest,
                    retryStrategy: this.config.retryStrategy,
                    headers: this.getHeaders(config),
                    responseType:
                        internalConfig && internalConfig.responseType ? internalConfig.responseType : undefined
                }
            );
        } catch (err) {
            throw this.mapContentManagementError(err);
        }
    }

    /**
     * Http PUT response
     * @param url Url of request
     * @param body Body of the request (names and values)
     * @param config Query configuration
     */
    protected async putResponseAsync<TRawData>(
        url: string,
        body: any,
        internalConfig: IContentManagementInternalQueryConfig,
        config: IContentManagementQueryConfig
    ): Promise<IResponse<TRawData>> {
        try {
            return await this.httpService.putAsync<TRawData>(
                {
                    url: url,
                    body: body
                },
                {
                    cancelToken: config.cancelTokenRequest,
                    retryStrategy: this.config.retryStrategy,
                    headers: this.getHeaders(config),
                    responseType:
                        internalConfig && internalConfig.responseType ? internalConfig.responseType : undefined
                }
            );
        } catch (err) {
            throw this.mapContentManagementError(err);
        }
    }

    /**
     * Http Delete response
     * @param url Url of request
     * @param body Body of the request (names and values)
     * @param config Query configuration
     */
    protected async deleteResponseAsync<TRawData>(
        url: string,
        internalConfig: IContentManagementInternalQueryConfig,
        config: IContentManagementQueryConfig
    ): Promise<IResponse<TRawData>> {
        try {
            return await this.httpService.deleteAsync<TRawData>(
                {
                    url: url
                },
                {
                    cancelToken: config.cancelTokenRequest,
                    retryStrategy: this.config.retryStrategy,
                    headers: this.getHeaders(config),
                    responseType:
                        internalConfig && internalConfig.responseType ? internalConfig.responseType : undefined
                }
            );
        } catch (err) {
            throw this.mapContentManagementError(err);
        }
    }

    private mapContentManagementError(error: any): SharedModels.ContentManagementBaseKontentError | any {
        let axiosError: AxiosError | undefined;

        if (error.error) {
            axiosError = error.error;
        } else {
            axiosError = error;
        }

        if (!axiosError || !axiosError.isAxiosError) {
            return error;
        }

        const cmError = axiosError.response?.data as SharedContracts.IContentManagementError;

        if (!cmError || !cmError.error_code) {
            return error;
        }

        const validationErrors: SharedModels.ValidationError[] = [];

        if (cmError.validation_errors) {
            validationErrors.push(
                ...cmError.validation_errors.map(
                    (validationErrorRaw) =>
                        new SharedModels.ValidationError({
                            message: validationErrorRaw.message
                        })
                )
            );
        }

        return new SharedModels.ContentManagementBaseKontentError({
            errorCode: cmError.error_code,
            message: cmError.message,
            originalError: error,
            requestId: cmError.request_id,
            validationErrors: validationErrors
        });
    }

    /**
     * Gets authorization header. This is used for 'preview' functionality
     */
    private getAuthorizationHeader(key?: string): IHeader {
        if (!key) {
            throw Error(`Cannot get authorization header because key is undefined`);
        }
        // authorization header required for preview mode
        return {
            header: 'authorization',
            value: `bearer ${key}`
        };
    }
    /**
     * Gets base URL of the request including the project Id
     */
    private getBaseUrl(): string {
        return this.GetEndpointUrl() + '/' + this.config.projectId;
    }

    /**
     * Gets API endpoint url
     */
    private GetEndpointUrl(): string {
        if (this.config.baseUrl) {
            return this.config.baseUrl;
        }
        return this.defaultBaseCMUrl;
    }
}
