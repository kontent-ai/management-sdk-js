"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.BaseListingQuery = void 0;
var base_query_1 = require("./base-query");
var BaseListingQuery = /** @class */ (function (_super) {
    __extends(BaseListingQuery, _super);
    function BaseListingQuery(config, queryService) {
        var _this = _super.call(this, config, queryService) || this;
        _this.config = config;
        _this.queryService = queryService;
        _this.xContinuationHeaderName = 'x-continuation';
        return _this;
    }
    /**
     * Configuration for list queries
     * @param config List configuration
     */
    BaseListingQuery.prototype.withListQueryConfig = function (config) {
        this.listQueryConfig = config;
        return this;
    };
    /**
     * Sets the 'x-continuation' header value. This can be used for fetching next pages.
     * @param token Value from continuation_token property
     */
    BaseListingQuery.prototype.xContinuationToken = function (token) {
        this.queryConfig.headers.push({
            header: this.xContinuationHeaderName,
            value: token
        });
        return this;
    };
    /**
     * Query to get all items. Uses paging data and may execute multiple HTTP requests depending on number of items
     */
    BaseListingQuery.prototype.toAllPromise = function () {
        var _this = this;
        return this.queryService.getListAllResponseAsync({
            listQueryConfig: this.listQueryConfig,
            allResponseFactory: function (items, responses) { return _this.allResponseFactory(items, responses); },
            getResponse: function (token) {
                if (token) {
                    _this.xContinuationToken(token).toPromise();
                }
                return _this.toPromise();
            }
        });
    };
    return BaseListingQuery;
}(base_query_1.BaseQuery));
exports.BaseListingQuery = BaseListingQuery;
