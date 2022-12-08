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
exports.WorkflowResponses = void 0;
var base_responses_1 = require("../base-responses");
var WorkflowResponses;
(function (WorkflowResponses) {
    var ListWorkflowStepsResponse = /** @class */ (function (_super) {
        __extends(ListWorkflowStepsResponse, _super);
        function ListWorkflowStepsResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ListWorkflowStepsResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    WorkflowResponses.ListWorkflowStepsResponse = ListWorkflowStepsResponse;
    var ListWorkflowsResponse = /** @class */ (function (_super) {
        __extends(ListWorkflowsResponse, _super);
        function ListWorkflowsResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ListWorkflowsResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    WorkflowResponses.ListWorkflowsResponse = ListWorkflowsResponse;
    var AddWorkflowResponse = /** @class */ (function (_super) {
        __extends(AddWorkflowResponse, _super);
        function AddWorkflowResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return AddWorkflowResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    WorkflowResponses.AddWorkflowResponse = AddWorkflowResponse;
    var UpdateWorkflowResponse = /** @class */ (function (_super) {
        __extends(UpdateWorkflowResponse, _super);
        function UpdateWorkflowResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return UpdateWorkflowResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    WorkflowResponses.UpdateWorkflowResponse = UpdateWorkflowResponse;
})(WorkflowResponses = exports.WorkflowResponses || (exports.WorkflowResponses = {}));
