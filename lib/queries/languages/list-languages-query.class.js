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
exports.ListLanguagesQuery = void 0;
var responses_1 = require("../../responses");
var base_listing_query_1 = require("../base-listing-query");
var ListLanguagesQuery = /** @class */ (function (_super) {
    __extends(ListLanguagesQuery, _super);
    function ListLanguagesQuery(config, queryService) {
        var _this = _super.call(this, config, queryService) || this;
        _this.config = config;
        _this.queryService = queryService;
        return _this;
    }
    ListLanguagesQuery.prototype.toPromise = function () {
        return this.queryService.listLanguagesAsync(this.getUrl(), this.queryConfig);
    };
    ListLanguagesQuery.prototype.getAction = function () {
        return this.apiEndpoints.listLanguages();
    };
    ListLanguagesQuery.prototype.allResponseFactory = function (items, responses) {
        return new responses_1.LanguageResponses.ListAllLanguagesResponse({
            items: items,
            responses: responses
        });
    };
    return ListLanguagesQuery;
}(base_listing_query_1.BaseListingQuery));
exports.ListLanguagesQuery = ListLanguagesQuery;
