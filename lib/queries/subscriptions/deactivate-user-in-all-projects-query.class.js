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
exports.DeactivateUserInAllProjectsQuery = void 0;
var base_query_1 = require("../base-query");
var DeactivateUserInAllProjectsQuery = /** @class */ (function (_super) {
    __extends(DeactivateUserInAllProjectsQuery, _super);
    function DeactivateUserInAllProjectsQuery(config, queryService, identifier) {
        var _this = _super.call(this, config, queryService) || this;
        _this.config = config;
        _this.queryService = queryService;
        _this.identifier = identifier;
        return _this;
    }
    DeactivateUserInAllProjectsQuery.prototype.toPromise = function () {
        return this.queryService.deactivateUserInAllProjectsAsync(this.getUrl(), this.queryConfig);
    };
    DeactivateUserInAllProjectsQuery.prototype.getAction = function () {
        return this.apiEndpoints.deactivateUserInAllProjects(this.identifier);
    };
    return DeactivateUserInAllProjectsQuery;
}(base_query_1.BaseQuery));
exports.DeactivateUserInAllProjectsQuery = DeactivateUserInAllProjectsQuery;
