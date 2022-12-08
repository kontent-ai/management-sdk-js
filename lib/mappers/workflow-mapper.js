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
exports.workflowMapper = exports.WorkflowMapper = void 0;
var models_1 = require("../models");
var responses_1 = require("../responses");
var base_mapper_1 = require("./base-mapper");
var WorkflowMapper = /** @class */ (function (_super) {
    __extends(WorkflowMapper, _super);
    function WorkflowMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WorkflowMapper.prototype.mapListWorkflowStepsResponse = function (response) {
        var _this = this;
        var workflowSteps = response.data.map(function (m) { return _this.mapWorkflowStep(m); });
        return new responses_1.WorkflowResponses.ListWorkflowStepsResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, workflowSteps);
    };
    WorkflowMapper.prototype.mapListWorkflowsResponse = function (response) {
        var _this = this;
        var workflows = response.data.map(function (m) { return _this.mapWorkflow(m); });
        return new responses_1.WorkflowResponses.ListWorkflowsResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, workflows);
    };
    WorkflowMapper.prototype.mapAddWorkflowResponse = function (response) {
        return new responses_1.WorkflowResponses.AddWorkflowResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, this.mapWorkflow(response.data));
    };
    WorkflowMapper.prototype.mapUpdateWorkflowResponse = function (response) {
        return new responses_1.WorkflowResponses.UpdateWorkflowResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, this.mapWorkflow(response.data));
    };
    WorkflowMapper.prototype.mapWorkflowStep = function (rawStep) {
        return new models_1.WorkflowModels.WorkflowStep({
            id: rawStep.id,
            name: rawStep.name,
            codename: rawStep.codename,
            transitionsTo: rawStep.transitions_to,
            _raw: rawStep
        });
    };
    WorkflowMapper.prototype.mapWorkflow = function (raw) {
        return new models_1.WorkflowModels.Workflow({
            id: raw.id,
            name: raw.name,
            codename: raw.codename,
            archivedStep: raw.archived_step,
            publishedStep: raw.published_step,
            scopes: raw.scopes,
            steps: raw.steps,
            _raw: raw
        });
    };
    return WorkflowMapper;
}(base_mapper_1.BaseMapper));
exports.WorkflowMapper = WorkflowMapper;
exports.workflowMapper = new WorkflowMapper();
