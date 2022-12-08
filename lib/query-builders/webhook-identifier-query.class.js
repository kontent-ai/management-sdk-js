"use strict";
exports.__esModule = true;
exports.WebhookIdentifierQuery = void 0;
var models_1 = require("../models");
var WebhookIdentifierQuery = /** @class */ (function () {
    function WebhookIdentifierQuery(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
     * Id identifier
     * @param id Id of the webhook
     */
    WebhookIdentifierQuery.prototype.byId = function (id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.WebhookIdentifier(models_1.Identifiers.WebhookIdentifierEnum.Id, id));
    };
    return WebhookIdentifierQuery;
}());
exports.WebhookIdentifierQuery = WebhookIdentifierQuery;
