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
exports.WebhookResponses = void 0;
var base_responses_1 = require("../base-responses");
var WebhookResponses;
(function (WebhookResponses) {
    var GetWebhookResponse = /** @class */ (function (_super) {
        __extends(GetWebhookResponse, _super);
        function GetWebhookResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return GetWebhookResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    WebhookResponses.GetWebhookResponse = GetWebhookResponse;
    var AddWebhookResponse = /** @class */ (function (_super) {
        __extends(AddWebhookResponse, _super);
        function AddWebhookResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return AddWebhookResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    WebhookResponses.AddWebhookResponse = AddWebhookResponse;
    var EnableWebhookResponse = /** @class */ (function (_super) {
        __extends(EnableWebhookResponse, _super);
        function EnableWebhookResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return EnableWebhookResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    WebhookResponses.EnableWebhookResponse = EnableWebhookResponse;
    var DisableWebhookResponse = /** @class */ (function (_super) {
        __extends(DisableWebhookResponse, _super);
        function DisableWebhookResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return DisableWebhookResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    WebhookResponses.DisableWebhookResponse = DisableWebhookResponse;
    var WebhookListResponse = /** @class */ (function (_super) {
        __extends(WebhookListResponse, _super);
        function WebhookListResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return WebhookListResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    WebhookResponses.WebhookListResponse = WebhookListResponse;
})(WebhookResponses = exports.WebhookResponses || (exports.WebhookResponses = {}));
