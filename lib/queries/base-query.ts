import { IHeader, IHttpCancelRequestToken, IQueryParameter, Parameters } from '@kontent-ai/core-sdk';

import { IManagementClientConfig } from '../config/imanagement-client-config.interface';
import { ContentManagementApiEndpoints, IContentManagementQueryConfig } from '../models';
import { BaseResponses } from '../responses';
import { ManagementQueryService } from '../services';

export abstract class BaseQuery<TResponse extends BaseResponses.IContentManagementResponse> {
    private _customUrl?: string;

    protected readonly queryConfig: IContentManagementQueryConfig;
    protected readonly parameters: IQueryParameter[] = [];
    protected readonly apiEndpoints: ContentManagementApiEndpoints = new ContentManagementApiEndpoints({
        environmentId: this.config.environmentId,
        subscriptionId: this.config.subscriptionId
    });
    protected _addSlashToUrl: boolean = true;

    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ManagementQueryService
    ) {
        this.queryConfig = {
            headers: config.headers ?? [],
            cancelTokenRequest: undefined
        };
    }

    /**
     * Gets url for this query
     */
    getUrl(): string {
        // use custom URL if user specified it
        if (this._customUrl) {
            return this._customUrl;
        }

        return this.getUrlForAction(this.getAction());
    }

    /**
     * Adds header to request
     * @param header Header to add
     */
    withHeader(header: IHeader): this {
        this.queryConfig.headers.push(header);
        return this;
    }

    /**
     * Adds headers to request
     * @param headers Headers to add
     */
    withHeaders(headers: IHeader[]): this {
        this.queryConfig.headers.push(...headers);
        return this;
    }

    /**
     * Adds cancel token to request
     */
    withCancelToken(tokenRequest: IHttpCancelRequestToken<any>): this {
        this.queryConfig.cancelTokenRequest = tokenRequest;
        return this;
    }

    /**
     * Gets array of currently set headers
     */
    getHeaders(): IHeader[] {
        return this.queryConfig.headers;
    }

    /**
     * Sets custom query parmeter that will be added to URL
     * @param name Parameter name
     * @param value Parameter value
     */
    withCustomParameter(name: string, value: string): this {
        this.parameters.push(new Parameters.CustomParameter(name, value));
        return this;
    }

    /**
     * Overrides default url resolver and resolves this query with a custom one
     * @param url Custom url to resolve query
     */
    withUrl(url: string): this {
        this._customUrl = url;
        return this;
    }

    /**
     * Gets parameters assigned to this query
     */
    getParameters(): IQueryParameter[] {
        return this.parameters;
    }

    /**
     * Gets promise to resolve this query
     */
    abstract toPromise(): Promise<TResponse>;

    /**
     * Gets action for this query
     */
    protected abstract getAction(): string;

    protected getUrlForAction(action: string): string {
        return encodeURI(this.queryService.getFullUrl(action, this.getParameters(), this._addSlashToUrl));
    }
}
