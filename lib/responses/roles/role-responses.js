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
exports.RoleResponses = void 0;
var base_responses_1 = require("../base-responses");
var RoleResponses;
(function (RoleResponses) {
    var RoleListResponse = /** @class */ (function (_super) {
        __extends(RoleListResponse, _super);
        function RoleListResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return RoleListResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    RoleResponses.RoleListResponse = RoleListResponse;
    var ViewRoleResponse = /** @class */ (function (_super) {
        __extends(ViewRoleResponse, _super);
        function ViewRoleResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ViewRoleResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    RoleResponses.ViewRoleResponse = ViewRoleResponse;
})(RoleResponses = exports.RoleResponses || (exports.RoleResponses = {}));
