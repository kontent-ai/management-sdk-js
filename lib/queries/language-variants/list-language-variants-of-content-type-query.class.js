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
exports.ListLanguageVariantsOfContentTypeQuery = void 0;
var responses_1 = require("../../responses");
var base_listing_query_1 = require("../base-listing-query");
var ListLanguageVariantsOfContentTypeQuery = /** @class */ (function (_super) {
    __extends(ListLanguageVariantsOfContentTypeQuery, _super);
    function ListLanguageVariantsOfContentTypeQuery(config, queryService, identifier) {
        var _this = _super.call(this, config, queryService) || this;
        _this.config = config;
        _this.queryService = queryService;
        _this.identifier = identifier;
        return _this;
    }
    ListLanguageVariantsOfContentTypeQuery.prototype.toPromise = function () {
        return this.queryService.listLanguageVariantsOfContentTypeAsync(this.getUrl(), this.queryConfig);
    };
    ListLanguageVariantsOfContentTypeQuery.prototype.getAction = function () {
        return this.apiEndpoints.listLanguageVariantsOfContentType(this.identifier);
    };
    ListLanguageVariantsOfContentTypeQuery.prototype.allResponseFactory = function (items, responses) {
        return new responses_1.LanguageVariantResponses.ListAllLanguageVariantsOfContentTypeResponse({
            items: items,
            responses: responses
        });
    };
    return ListLanguageVariantsOfContentTypeQuery;
}(base_listing_query_1.BaseListingQuery));
exports.ListLanguageVariantsOfContentTypeQuery = ListLanguageVariantsOfContentTypeQuery;
