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
exports.ModifyTaxonomyQuery = void 0;
var base_query_1 = require("../base-query");
var ModifyTaxonomyQuery = /** @class */ (function (_super) {
    __extends(ModifyTaxonomyQuery, _super);
    function ModifyTaxonomyQuery(config, queryService, identifier, data) {
        var _this = _super.call(this, config, queryService) || this;
        _this.config = config;
        _this.queryService = queryService;
        _this.identifier = identifier;
        _this.data = data;
        return _this;
    }
    ModifyTaxonomyQuery.prototype.toPromise = function () {
        return this.queryService.modifyTaxonomyAsync(this.getUrl(), this.queryConfig, this.data);
    };
    ModifyTaxonomyQuery.prototype.getAction = function () {
        return this.apiEndpoints.modifyTaxonomy(this.identifier);
    };
    return ModifyTaxonomyQuery;
}(base_query_1.BaseQuery));
exports.ModifyTaxonomyQuery = ModifyTaxonomyQuery;
