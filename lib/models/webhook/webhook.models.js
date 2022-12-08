"use strict";
exports.__esModule = true;
exports.WebhookModels = void 0;
var WebhookModels;
(function (WebhookModels) {
    var WebhookTransitionsTo = /** @class */ (function () {
        function WebhookTransitionsTo(data) {
            this.id = data.id;
        }
        return WebhookTransitionsTo;
    }());
    WebhookModels.WebhookTransitionsTo = WebhookTransitionsTo;
    var WebhookWorkflowStepChanges = /** @class */ (function () {
        function WebhookWorkflowStepChanges(data) {
            this.type = data.type;
            this.transitionsTo = data.transitionsTo;
        }
        return WebhookWorkflowStepChanges;
    }());
    WebhookModels.WebhookWorkflowStepChanges = WebhookWorkflowStepChanges;
    var WebhookDeliveryApiContentChanges = /** @class */ (function () {
        function WebhookDeliveryApiContentChanges(data) {
            this.type = data.type;
            this.operations = data.operations;
        }
        return WebhookDeliveryApiContentChanges;
    }());
    WebhookModels.WebhookDeliveryApiContentChanges = WebhookDeliveryApiContentChanges;
    var Webhook = /** @class */ (function () {
        function Webhook(data) {
            this.id = data.id;
            this.name = data.name;
            this.secret = data.secret;
            this.url = data.url;
            this.triggers = data.triggers;
            this.lastModified = data.lastModified;
        }
        return Webhook;
    }());
    WebhookModels.Webhook = Webhook;
})(WebhookModels = exports.WebhookModels || (exports.WebhookModels = {}));
