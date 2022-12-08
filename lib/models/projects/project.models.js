"use strict";
exports.__esModule = true;
exports.ProjectModels = void 0;
var ProjectModels;
(function (ProjectModels) {
    var ProjectReportModel = /** @class */ (function () {
        function ProjectReportModel(id, name) {
            this.id = id;
            this.name = name;
        }
        return ProjectReportModel;
    }());
    ProjectModels.ProjectReportModel = ProjectReportModel;
    var ProjectValidationVariantIssueModel = /** @class */ (function () {
        function ProjectValidationVariantIssueModel(item, language, issues) {
            this.item = item;
            this.language = language;
            this.issues = issues;
            this.issue_type = 'variant_issue';
        }
        return ProjectValidationVariantIssueModel;
    }());
    ProjectModels.ProjectValidationVariantIssueModel = ProjectValidationVariantIssueModel;
    var ProjectValidationTypeIssueModel = /** @class */ (function () {
        function ProjectValidationTypeIssueModel(type, issues) {
            this.type = type;
            this.issues = issues;
            this.issue_type = 'type_issue';
        }
        return ProjectValidationTypeIssueModel;
    }());
    ProjectModels.ProjectValidationTypeIssueModel = ProjectValidationTypeIssueModel;
    var ProjectInformationModel = /** @class */ (function () {
        function ProjectInformationModel(id, name, environment) {
            this.id = id;
            this.name = name;
            this.environment = environment;
        }
        return ProjectInformationModel;
    }());
    ProjectModels.ProjectInformationModel = ProjectInformationModel;
    var ProjectVariantContentItemModel = /** @class */ (function () {
        function ProjectVariantContentItemModel(id, name, codename) {
            this.id = id;
            this.name = name;
            this.codename = codename;
        }
        return ProjectVariantContentItemModel;
    }());
    ProjectModels.ProjectVariantContentItemModel = ProjectVariantContentItemModel;
    var ProjectVariantLanguageModel = /** @class */ (function () {
        function ProjectVariantLanguageModel(id, name, codename) {
            this.id = id;
            this.name = name;
            this.codename = codename;
        }
        return ProjectVariantLanguageModel;
    }());
    ProjectModels.ProjectVariantLanguageModel = ProjectVariantLanguageModel;
    var ProjectVariantElementModel = /** @class */ (function () {
        function ProjectVariantElementModel(id, name, codename) {
            this.id = id;
            this.name = name;
            this.codename = codename;
        }
        return ProjectVariantElementModel;
    }());
    ProjectModels.ProjectVariantElementModel = ProjectVariantElementModel;
    var ProjectTypeIssueModel = /** @class */ (function () {
        function ProjectTypeIssueModel(type, issues) {
            this.type = type;
            this.issues = issues;
        }
        return ProjectTypeIssueModel;
    }());
    ProjectModels.ProjectTypeIssueModel = ProjectTypeIssueModel;
    var ProjectTypeModel = /** @class */ (function () {
        function ProjectTypeModel(id, name, codename) {
            this.id = id;
            this.name = name;
            this.codename = codename;
        }
        return ProjectTypeModel;
    }());
    ProjectModels.ProjectTypeModel = ProjectTypeModel;
    var ProjectIssueModel = /** @class */ (function () {
        function ProjectIssueModel(element, messages) {
            this.element = element;
            this.messages = messages;
        }
        return ProjectIssueModel;
    }());
    ProjectModels.ProjectIssueModel = ProjectIssueModel;
    var ProjectVariantIssueModel = /** @class */ (function () {
        function ProjectVariantIssueModel(item, language, issues) {
            this.item = item;
            this.language = language;
            this.issues = issues;
        }
        return ProjectVariantIssueModel;
    }());
    ProjectModels.ProjectVariantIssueModel = ProjectVariantIssueModel;
})(ProjectModels = exports.ProjectModels || (exports.ProjectModels = {}));
