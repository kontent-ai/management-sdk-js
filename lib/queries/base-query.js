"use strict";
exports.__esModule = true;
exports.BaseQuery = void 0;
var core_sdk_1 = require("@kontent-ai/core-sdk");
var models_1 = require("../models");
var BaseQuery = /** @class */ (function () {
    function BaseQuery(config, queryService) {
        this.config = config;
        this.queryService = queryService;
        this.queryConfig = {
            headers: [],
            cancelTokenRequest: undefined
        };
        this.parameters = [];
        this.apiEndpoints = new models_1.ContentManagementApiEndpoints({
            projectId: this.config.projectId,
            subscriptionId: this.config.subscriptionId
        });
        this._addSlashToUrl = true;
    }
    /**
     * Gets url for this query
     */
    BaseQuery.prototype.getUrl = function () {
        // use custom URL if user specified it
        if (this._customUrl) {
            return this._customUrl;
        }
        return this.getUrlForAction(this.getAction());
    };
    /**
     * Adds header to request
     * @param header Header to add
     */
    BaseQuery.prototype.withHeader = function (header) {
        this.queryConfig.headers.push(header);
        return this;
    };
    /**
     * Adds headers to request
     * @param headers Headers to add
     */
    BaseQuery.prototype.withHeaders = function (headers) {
        var _a;
        (_a = this.queryConfig.headers).push.apply(_a, headers);
        return this;
    };
    /**
     * Adds cancel token to request
     */
    BaseQuery.prototype.withCancelToken = function (tokenRequest) {
        this.queryConfig.cancelTokenRequest = tokenRequest;
        return this;
    };
    /**
     * Gets array of currently set headers
     */
    BaseQuery.prototype.getHeaders = function () {
        return this.queryConfig.headers;
    };
    /**
     * Sets custom query parmeter that will be added to URL
     * @param name Parameter name
     * @param value Parameter value
     */
    BaseQuery.prototype.withCustomParameter = function (name, value) {
        this.parameters.push(new core_sdk_1.Parameters.CustomParameter(name, value));
        return this;
    };
    /**
     * Overrides default url resolver and resolves this query with a custom one
     * @param url Custom url to resolve query
     */
    BaseQuery.prototype.withUrl = function (url) {
        this._customUrl = url;
        return this;
    };
    /**
     * Gets parameters assigned to this query
     */
    BaseQuery.prototype.getParameters = function () {
        return this.parameters;
    };
    BaseQuery.prototype.getUrlForAction = function (action) {
        return encodeURI(this.queryService.getFullUrl(action, this.getParameters(), this._addSlashToUrl));
    };
    return BaseQuery;
}());
exports.BaseQuery = BaseQuery;
