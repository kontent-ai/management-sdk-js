"use strict";
exports.__esModule = true;
exports.WorkflowStepIdentifierQuery = void 0;
var models_1 = require("../models");
var WorkflowStepIdentifierQuery = /** @class */ (function () {
    function WorkflowStepIdentifierQuery(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
     * Id identifier
     * @param id If of the workflow step
     */
    WorkflowStepIdentifierQuery.prototype.byWorkflowStepId = function (id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.WorkflowIdentifier(models_1.Identifiers.WorkflowIdentifierEnum.Id, id));
    };
    /**
     * Codename identifier
     * @param codename codename of the workflow step
     */
    WorkflowStepIdentifierQuery.prototype.byWorkflowStepCodename = function (codename) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.WorkflowIdentifier(models_1.Identifiers.WorkflowIdentifierEnum.Codename, codename));
    };
    return WorkflowStepIdentifierQuery;
}());
exports.WorkflowStepIdentifierQuery = WorkflowStepIdentifierQuery;
