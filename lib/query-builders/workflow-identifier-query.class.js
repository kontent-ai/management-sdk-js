"use strict";
exports.__esModule = true;
exports.WorkflowIdentifierQuery = void 0;
var models_1 = require("../models");
var WorkflowIdentifierQuery = /** @class */ (function () {
    function WorkflowIdentifierQuery(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
     * Id identifier
     * @param id If of the workflow
     */
    WorkflowIdentifierQuery.prototype.byWorkflowId = function (id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.WorkflowIdentifier(models_1.Identifiers.WorkflowIdentifierEnum.Id, id));
    };
    /**
     * Codename identifier
     * @param codename codename of the workflow
     */
    WorkflowIdentifierQuery.prototype.byWorkflowCodename = function (codename) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.WorkflowIdentifier(models_1.Identifiers.WorkflowIdentifierEnum.Codename, codename));
    };
    return WorkflowIdentifierQuery;
}());
exports.WorkflowIdentifierQuery = WorkflowIdentifierQuery;
