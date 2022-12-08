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
exports.projectMapper = exports.ProjectMapper = void 0;
var project_models_1 = require("../models/projects/project.models");
var responses_1 = require("../responses");
var base_mapper_1 = require("./base-mapper");
var ProjectMapper = /** @class */ (function (_super) {
    __extends(ProjectMapper, _super);
    function ProjectMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProjectMapper.prototype.mapProjectValidationIssuesListResponse = function (response) {
        var _this = this;
        return new responses_1.ProjectResponses.ProjectValidationIssuesListResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, {
            items: response.data.issues.map(function (m) { return _this.mapProjectValidationIssue(m); }),
            pagination: _super.prototype.mapPagination.call(this, response.data.pagination)
        });
    };
    ProjectMapper.prototype.mapStartProjectValidationResponse = function (response) {
        return new responses_1.ProjectResponses.StartProjectValidationResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, {
            id: response.data.id,
            status: response.data.status,
            validation_result: response.data.validation_result
        });
    };
    ProjectMapper.prototype.mapCheckProjectValidationResponse = function (response) {
        return new responses_1.ProjectResponses.CheckProjectValidationResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, {
            id: response.data.id,
            status: response.data.status,
            validation_result: response.data.validation_result
        });
    };
    ProjectMapper.prototype.mapValidateProjectContentResponse = function (response) {
        var _this = this;
        return new responses_1.ProjectResponses.ValidateProjectContentResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, {
            project: this.mapProjectModel(response.data.project),
            typeIssues: response.data.type_issues.map(function (m) { return _this.mapTypeIssue(m); }),
            variantIssues: response.data.variant_issues.map(function (m) { return _this.mapVariantIssue(m); })
        });
    };
    ProjectMapper.prototype.mapProjectInformationResponse = function (response) {
        return new responses_1.ProjectResponses.ProjectInformationResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, {
            project: new project_models_1.ProjectModels.ProjectInformationModel(response.data.id, response.data.name, response.data.environment)
        });
    };
    ProjectMapper.prototype.mapProjectModel = function (raw) {
        return new project_models_1.ProjectModels.ProjectReportModel(raw.id, raw.name);
    };
    ProjectMapper.prototype.mapTypeModel = function (raw) {
        return new project_models_1.ProjectModels.ProjectTypeModel(raw.id, raw.name, raw.codename);
    };
    ProjectMapper.prototype.mapItemModel = function (raw) {
        return new project_models_1.ProjectModels.ProjectVariantContentItemModel(raw.id, raw.name, raw.codename);
    };
    ProjectMapper.prototype.mapLanguageModel = function (raw) {
        return new project_models_1.ProjectModels.ProjectVariantLanguageModel(raw.id, raw.name, raw.codename);
    };
    ProjectMapper.prototype.mapIssueModel = function (raw) {
        return new project_models_1.ProjectModels.ProjectIssueModel(this.mapVariantElementModel(raw.element), raw.messages);
    };
    ProjectMapper.prototype.mapTypeIssue = function (raw) {
        var _this = this;
        return new project_models_1.ProjectModels.ProjectTypeIssueModel(this.mapTypeModel(raw.type), raw.issues.map(function (m) { return _this.mapIssueModel(m); }));
    };
    ProjectMapper.prototype.mapVariantIssue = function (raw) {
        var _this = this;
        return new project_models_1.ProjectModels.ProjectVariantIssueModel(this.mapItemModel(raw.item), this.mapLanguageModel(raw.language), raw.issues.map(function (m) { return _this.mapIssueModel(m); }));
    };
    ProjectMapper.prototype.mapVariantElementModel = function (raw) {
        return new project_models_1.ProjectModels.ProjectVariantElementModel(raw.id, raw.name, raw.codename);
    };
    ProjectMapper.prototype.mapProjectValidationIssue = function (raw) {
        var _this = this;
        if (raw.issue_type === 'variant_issue') {
            return new project_models_1.ProjectModels.ProjectValidationVariantIssueModel(this.mapItemModel(raw.item), this.mapLanguageModel(raw.language), raw.issues.map(function (m) { return _this.mapIssueModel(m); }));
        }
        if (raw.issue_type === 'type_issue') {
            return new project_models_1.ProjectModels.ProjectValidationTypeIssueModel(this.mapTypeModel(raw.type), raw.issues.map(function (m) { return _this.mapIssueModel(m); }));
        }
        throw Error("Unsupported issue type '".concat(raw.issue_type, "'"));
    };
    return ProjectMapper;
}(base_mapper_1.BaseMapper));
exports.ProjectMapper = ProjectMapper;
exports.projectMapper = new ProjectMapper();
