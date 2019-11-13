import {
    BaseKontentError,
    headerHelper,
    IBaseResponse,
    IBaseResponseError,
    IHeader,
    IHttpService,
    IQueryParameter,
    ISDKInfo,
    mapBaseKontentError,
    urlHelper,
} from '@kentico/kontent-core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IManagementClientConfig } from '../config/imanagement-client-config.interface';
import { SharedContracts } from '../contracts';
import { IContentManagementInternalQueryConfig, IContentManagementQueryConfig, SharedModels } from '../models';

export abstract class BaseContentManagementQueryService {
    /**
     * Default base url for content management API
     */
    private readonly defaultBaseCMUrl: string = 'https://manage.kontent.ai/v2/projects';

    constructor(
        protected config: IManagementClientConfig,
        protected httpService: IHttpService,
        protected sdkInfo: ISDKInfo
    ) {}

    /**
     * Gets url based on the action, query configuration and options (parameters)
     * @param action Action (= url part) that will be hit
     * @param options Query options
     */
    getFullUrl(action: string, options?: IQueryParameter[]): string {
        return urlHelper.addOptionsToUrl(this.getBaseUrl() + '/' + action, options);
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
    protected patchResponse<TRawData>(
        url: string,
        body: any,
        internalConfig: IContentManagementInternalQueryConfig,
        config: IContentManagementQueryConfig
    ): Observable<IBaseResponse<TRawData>> {

        return this.httpService
            .patch<BaseKontentError | any, TRawData>(
                {
                    url: url,
                    mapError: error => mapBaseKontentError(error),
                    body: body
                },
                {
                    headers: this.getHeaders(config),
                    useRetryForResponseCodes: this.config.retryStrategy
                        ? this.config.retryStrategy.useRetryForResponseCodes
                        : undefined,
                    addJitterToRetryAttempts: this.config.retryStrategy
                        ? this.config.retryStrategy.addJitter
                        : undefined,
                    deltaBackoffMs: this.config.retryStrategy ? this.config.retryStrategy.deltaBackoffMs : undefined,
                    maxCumulativeWaitTimeMs: this.config.retryStrategy
                        ? this.config.retryStrategy.maxCumulativeWaitTimeMs
                        : undefined,
                    logErrorToConsole: this.config.isDeveloperMode,
                    responseType:
                        internalConfig && internalConfig.responseType ? internalConfig.responseType : undefined
                }
            )
            .pipe(
                catchError((error: IBaseResponseError<BaseKontentError>) => {
                    return throwError(this.mapContentManagementError(error.mappedError));
                })
            );
    }

    /**
     * Http GET response
     * @param url Url of request
     * @param config Query configuration
     */
    protected getResponse<TRawData>(
        url: string,
        internalConfig: IContentManagementInternalQueryConfig,
        config: IContentManagementQueryConfig
    ): Observable<IBaseResponse<TRawData>> {

        return this.httpService
            .get<BaseKontentError | any, TRawData>(
                {
                    url: url,
                    mapError: error => mapBaseKontentError(error)
                },
                {
                    headers: this.getHeaders(config),
                    useRetryForResponseCodes: this.config.retryStrategy
                        ? this.config.retryStrategy.useRetryForResponseCodes
                        : undefined,
                    addJitterToRetryAttempts: this.config.retryStrategy
                        ? this.config.retryStrategy.addJitter
                        : undefined,
                    deltaBackoffMs: this.config.retryStrategy ? this.config.retryStrategy.deltaBackoffMs : undefined,
                    maxCumulativeWaitTimeMs: this.config.retryStrategy
                        ? this.config.retryStrategy.maxCumulativeWaitTimeMs
                        : undefined,
                    logErrorToConsole: this.config.isDeveloperMode,
                    responseType:
                        internalConfig && internalConfig.responseType ? internalConfig.responseType : undefined
                }
            )
            .pipe(
                catchError((error: IBaseResponseError<BaseKontentError>) => {
                    return throwError(this.mapContentManagementError(error.mappedError));
                })
            );
    }

    /**
     * Http POST response
     * @param url Url of request
     * @param body Body of the request (names and values)
     * @param config Query configuration
     */
    protected postResponse<TRawData>(
        url: string,
        body: any,
        internalConfig: IContentManagementInternalQueryConfig,
        config: IContentManagementQueryConfig,
    ): Observable<IBaseResponse<TRawData>> {
        return this.httpService
            .post<BaseKontentError | any, TRawData>(
                {
                    url: url,
                    body: body,
                    mapError: error => mapBaseKontentError(error)
                },
                {
                    headers: this.getHeaders(config),
                    useRetryForResponseCodes: this.config.retryStrategy
                        ? this.config.retryStrategy.useRetryForResponseCodes
                        : undefined,
                    addJitterToRetryAttempts: this.config.retryStrategy
                        ? this.config.retryStrategy.addJitter
                        : undefined,
                    deltaBackoffMs: this.config.retryStrategy ? this.config.retryStrategy.deltaBackoffMs : undefined,
                    maxCumulativeWaitTimeMs: this.config.retryStrategy
                        ? this.config.retryStrategy.maxCumulativeWaitTimeMs
                        : undefined,
                    logErrorToConsole: this.config.isDeveloperMode,
                    responseType:
                        internalConfig && internalConfig.responseType ? internalConfig.responseType : undefined
                }
            )
            .pipe(
                catchError((error: IBaseResponseError<BaseKontentError>) => {
                    return throwError(this.mapContentManagementError(error.mappedError));
                })
            );
    }

    /**
     * Http PUT response
     * @param url Url of request
     * @param body Body of the request (names and values)
     * @param config Query configuration
     */
    protected putResponse<TRawData>(
        url: string,
        body: any,
        internalConfig: IContentManagementInternalQueryConfig,
        config: IContentManagementQueryConfig
    ): Observable<IBaseResponse<TRawData>> {
        return this.httpService
            .put<BaseKontentError | any, TRawData>(
                {
                    url: url,
                    body: body,
                    mapError: error => mapBaseKontentError(error)
                },
                {
                    headers: this.getHeaders(config),
                    useRetryForResponseCodes: this.config.retryStrategy
                        ? this.config.retryStrategy.useRetryForResponseCodes
                        : undefined,
                    addJitterToRetryAttempts: this.config.retryStrategy
                        ? this.config.retryStrategy.addJitter
                        : undefined,
                    deltaBackoffMs: this.config.retryStrategy ? this.config.retryStrategy.deltaBackoffMs : undefined,
                    maxCumulativeWaitTimeMs: this.config.retryStrategy
                        ? this.config.retryStrategy.maxCumulativeWaitTimeMs
                        : undefined,
                    logErrorToConsole: this.config.isDeveloperMode,
                    responseType:
                        internalConfig && internalConfig.responseType ? internalConfig.responseType : undefined
                }
            )
            .pipe(
                catchError((error: IBaseResponseError<BaseKontentError>) => {
                    return throwError(this.mapContentManagementError(error.mappedError));
                })
            );
    }

    /**
     * Http Delete response
     * @param url Url of request
     * @param body Body of the request (names and values)
     * @param config Query configuration
     */
    protected deleteResponse<TRawData>(
        url: string,
        internalConfig: IContentManagementInternalQueryConfig,
        config: IContentManagementQueryConfig,
    ): Observable<IBaseResponse<TRawData>> {

        return this.httpService
            .delete<BaseKontentError | any, TRawData>(
                {
                    url: url,
                    mapError: error => mapBaseKontentError(error)
                },
                {
                    headers: this.getHeaders(config),
                    useRetryForResponseCodes: this.config.retryStrategy
                        ? this.config.retryStrategy.useRetryForResponseCodes
                        : undefined,
                    addJitterToRetryAttempts: this.config.retryStrategy
                        ? this.config.retryStrategy.addJitter
                        : undefined,
                    deltaBackoffMs: this.config.retryStrategy ? this.config.retryStrategy.deltaBackoffMs : undefined,
                    maxCumulativeWaitTimeMs: this.config.retryStrategy
                        ? this.config.retryStrategy.maxCumulativeWaitTimeMs
                        : undefined,
                    logErrorToConsole: this.config.isDeveloperMode,
                    responseType:
                        internalConfig && internalConfig.responseType ? internalConfig.responseType : undefined
                }
            )
            .pipe(
                catchError((error: IBaseResponseError<BaseKontentError>) => {
                    return throwError(this.mapContentManagementError(error.mappedError));
                })
            );
    }

    private mapContentManagementError(
        error: BaseKontentError | any
    ): SharedModels.ContentManagementBaseKontentError | any {
        if (error instanceof BaseKontentError) {
            let validationErrors: SharedModels.ValidationError[] = [];
            if (
                error.originalError &&
                error.originalError.response &&
                error.originalError.response.data &&
                error.originalError.response.data.validation_errors
            ) {
                const rawValidationErrors: SharedContracts.IValidationErrorContract[] =
                    error.originalError.response.data.validation_errors;
                validationErrors = rawValidationErrors.map(
                    m =>
                        new SharedModels.ValidationError({
                            message: m.message
                        })
                );
            }

            return new SharedModels.ContentManagementBaseKontentError({
                errorCode: error.errorCode,
                message: error.message,
                originalError: error.originalError,
                requestId: error.requestId,
                specificCode: error.specificCode,
                validationErrors: validationErrors
            });
        }
        return error;
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
