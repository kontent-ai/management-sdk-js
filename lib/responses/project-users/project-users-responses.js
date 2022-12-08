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
exports.ProjectUsersResponses = void 0;
var base_responses_1 = require("../base-responses");
var ProjectUsersResponses;
(function (ProjectUsersResponses) {
    var InviteUserResponse = /** @class */ (function (_super) {
        __extends(InviteUserResponse, _super);
        function InviteUserResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return InviteUserResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    ProjectUsersResponses.InviteUserResponse = InviteUserResponse;
    var ChangeUserRolesResponse = /** @class */ (function (_super) {
        __extends(ChangeUserRolesResponse, _super);
        function ChangeUserRolesResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ChangeUserRolesResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    ProjectUsersResponses.ChangeUserRolesResponse = ChangeUserRolesResponse;
})(ProjectUsersResponses = exports.ProjectUsersResponses || (exports.ProjectUsersResponses = {}));
