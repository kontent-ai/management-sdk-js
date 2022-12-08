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
exports.SubscriptionResponses = void 0;
var base_responses_1 = require("../base-responses");
var SubscriptionResponses;
(function (SubscriptionResponses) {
    var SubscriptionProjectsListResponse = /** @class */ (function (_super) {
        __extends(SubscriptionProjectsListResponse, _super);
        function SubscriptionProjectsListResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return SubscriptionProjectsListResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementListResponse));
    SubscriptionResponses.SubscriptionProjectsListResponse = SubscriptionProjectsListResponse;
    var SubscriptionProjectsListAllResponse = /** @class */ (function (_super) {
        __extends(SubscriptionProjectsListAllResponse, _super);
        function SubscriptionProjectsListAllResponse(data) {
            return _super.call(this, data) || this;
        }
        return SubscriptionProjectsListAllResponse;
    }(base_responses_1.BaseResponses.ContentManagementListAllResponse));
    SubscriptionResponses.SubscriptionProjectsListAllResponse = SubscriptionProjectsListAllResponse;
    var ViewSubscriptionProjectResponse = /** @class */ (function (_super) {
        __extends(ViewSubscriptionProjectResponse, _super);
        function ViewSubscriptionProjectResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ViewSubscriptionProjectResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    SubscriptionResponses.ViewSubscriptionProjectResponse = ViewSubscriptionProjectResponse;
    var SubscriptionUsersListResponse = /** @class */ (function (_super) {
        __extends(SubscriptionUsersListResponse, _super);
        function SubscriptionUsersListResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return SubscriptionUsersListResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementListResponse));
    SubscriptionResponses.SubscriptionUsersListResponse = SubscriptionUsersListResponse;
    var SubscriptionUsersListAllResponse = /** @class */ (function (_super) {
        __extends(SubscriptionUsersListAllResponse, _super);
        function SubscriptionUsersListAllResponse(data) {
            return _super.call(this, data) || this;
        }
        return SubscriptionUsersListAllResponse;
    }(base_responses_1.BaseResponses.ContentManagementListAllResponse));
    SubscriptionResponses.SubscriptionUsersListAllResponse = SubscriptionUsersListAllResponse;
    var ViewSubscriptionUserResponse = /** @class */ (function (_super) {
        __extends(ViewSubscriptionUserResponse, _super);
        function ViewSubscriptionUserResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ViewSubscriptionUserResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    SubscriptionResponses.ViewSubscriptionUserResponse = ViewSubscriptionUserResponse;
})(SubscriptionResponses = exports.SubscriptionResponses || (exports.SubscriptionResponses = {}));
