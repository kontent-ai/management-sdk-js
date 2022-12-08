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
exports.webhookMapper = exports.WebhookMapper = void 0;
var webhook_models_1 = require("../models/webhook/webhook.models");
var responses_1 = require("../responses");
var base_mapper_1 = require("./base-mapper");
var WebhookMapper = /** @class */ (function (_super) {
    __extends(WebhookMapper, _super);
    function WebhookMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebhookMapper.prototype.mapGetWebhookResponse = function (response) {
        return new responses_1.WebhookResponses.GetWebhookResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, this.mapWebhook(response.data));
    };
    WebhookMapper.prototype.mapAddWebhookResponse = function (response) {
        return new responses_1.WebhookResponses.AddWebhookResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, this.mapWebhook(response.data));
    };
    WebhookMapper.prototype.mapEnableWebhookResponse = function (response) {
        return new responses_1.WebhookResponses.EnableWebhookResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, this.mapWebhook(response.data));
    };
    WebhookMapper.prototype.mapDisableWebhookResponse = function (response) {
        return new responses_1.WebhookResponses.DisableWebhookResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, this.mapWebhook(response.data));
    };
    WebhookMapper.prototype.mapWebhooksListResponse = function (response) {
        var _this = this;
        return new responses_1.WebhookResponses.WebhookListResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, {
            webhooks: response.data.map(function (m) { return _this.mapWebhook(m); })
        });
    };
    WebhookMapper.prototype.mapWebhook = function (rawWebhook) {
        return new webhook_models_1.WebhookModels.Webhook({
            id: rawWebhook.id,
            name: rawWebhook.name,
            lastModified: rawWebhook.last_modified ? new Date(rawWebhook.last_modified) : undefined,
            secret: rawWebhook.secret,
            triggers: {
                deliveryApiContentChanges: rawWebhook.triggers.delivery_api_content_changes.map(function (m) {
                    return new webhook_models_1.WebhookModels.WebhookDeliveryApiContentChanges({
                        operations: m.operations,
                        type: m.type
                    });
                }),
                workflowStepChanges: rawWebhook.triggers.workflow_step_changes.map(function (m) {
                    return new webhook_models_1.WebhookModels.WebhookWorkflowStepChanges({
                        transitionsTo: m.transitions_to.map(function (s) {
                            return new webhook_models_1.WebhookModels.WebhookTransitionsTo({
                                id: s.id
                            });
                        }),
                        type: m.type
                    });
                })
            },
            url: rawWebhook.url,
            _raw: rawWebhook
        });
    };
    return WebhookMapper;
}(base_mapper_1.BaseMapper));
exports.WebhookMapper = WebhookMapper;
exports.webhookMapper = new WebhookMapper();
