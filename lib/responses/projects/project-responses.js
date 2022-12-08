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
exports.ProjectResponses = void 0;
var base_responses_1 = require("../base-responses");
var ProjectResponses;
(function (ProjectResponses) {
    var ProjectValidationIssuesListResponse = /** @class */ (function (_super) {
        __extends(ProjectValidationIssuesListResponse, _super);
        function ProjectValidationIssuesListResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ProjectValidationIssuesListResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementListResponse));
    ProjectResponses.ProjectValidationIssuesListResponse = ProjectValidationIssuesListResponse;
    var ProjectValidationIssuesListAllResponse = /** @class */ (function (_super) {
        __extends(ProjectValidationIssuesListAllResponse, _super);
        function ProjectValidationIssuesListAllResponse(data) {
            return _super.call(this, data) || this;
        }
        return ProjectValidationIssuesListAllResponse;
    }(base_responses_1.BaseResponses.ContentManagementListAllResponse));
    ProjectResponses.ProjectValidationIssuesListAllResponse = ProjectValidationIssuesListAllResponse;
    var StartProjectValidationResponse = /** @class */ (function (_super) {
        __extends(StartProjectValidationResponse, _super);
        function StartProjectValidationResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return StartProjectValidationResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    ProjectResponses.StartProjectValidationResponse = StartProjectValidationResponse;
    var CheckProjectValidationResponse = /** @class */ (function (_super) {
        __extends(CheckProjectValidationResponse, _super);
        function CheckProjectValidationResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return CheckProjectValidationResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    ProjectResponses.CheckProjectValidationResponse = CheckProjectValidationResponse;
    var ValidateProjectContentResponse = /** @class */ (function (_super) {
        __extends(ValidateProjectContentResponse, _super);
        function ValidateProjectContentResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ValidateProjectContentResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    ProjectResponses.ValidateProjectContentResponse = ValidateProjectContentResponse;
    var ProjectInformationResponse = /** @class */ (function (_super) {
        __extends(ProjectInformationResponse, _super);
        function ProjectInformationResponse(debug, rawData, data) {
            return _super.call(this, debug, rawData, data) || this;
        }
        return ProjectInformationResponse;
    }(base_responses_1.BaseResponses.BaseContentManagementResponse));
    ProjectResponses.ProjectInformationResponse = ProjectInformationResponse;
})(ProjectResponses = exports.ProjectResponses || (exports.ProjectResponses = {}));
