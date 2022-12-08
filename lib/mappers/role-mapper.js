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
exports.roleMapper = exports.RoleMapper = void 0;
var models_1 = require("../models");
var responses_1 = require("../responses");
var base_mapper_1 = require("./base-mapper");
var RoleMapper = /** @class */ (function (_super) {
    __extends(RoleMapper, _super);
    function RoleMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoleMapper.prototype.mapRoleListResponse = function (response) {
        var _this = this;
        var items = response.data.roles.map(function (m) { return _this.mapRole(m); });
        return new responses_1.RoleResponses.RoleListResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, {
            roles: items
        });
    };
    RoleMapper.prototype.mapViewRoleResponse = function (response) {
        return new responses_1.RoleResponses.ViewRoleResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, this.mapRole(response.data));
    };
    RoleMapper.prototype.mapRole = function (rawItem) {
        return new models_1.RoleModels.Role({
            id: rawItem.id,
            name: rawItem.name,
            codename: rawItem.codename,
            _raw: rawItem
        });
    };
    return RoleMapper;
}(base_mapper_1.BaseMapper));
exports.RoleMapper = RoleMapper;
exports.roleMapper = new RoleMapper();
