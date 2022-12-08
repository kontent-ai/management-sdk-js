"use strict";
exports.__esModule = true;
exports.WorkflowModels = void 0;
var WorkflowModels;
(function (WorkflowModels) {
    var WorkflowStep = /** @class */ (function () {
        function WorkflowStep(data) {
            Object.assign(this, data);
        }
        return WorkflowStep;
    }());
    WorkflowModels.WorkflowStep = WorkflowStep;
    var Workflow = /** @class */ (function () {
        function Workflow(data) {
            Object.assign(this, data);
        }
        return Workflow;
    }());
    WorkflowModels.Workflow = Workflow;
})(WorkflowModels = exports.WorkflowModels || (exports.WorkflowModels = {}));
