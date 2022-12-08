"use strict";
exports.__esModule = true;
exports.ProjectIdentifierQuery = void 0;
var identifiers_1 = require("../models/identifiers");
var ProjectIdentifierQuery = /** @class */ (function () {
    function ProjectIdentifierQuery(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
     * For given Project by id
     * @param projectId ProjectId
     */
    ProjectIdentifierQuery.prototype.projectId = function (projectId) {
        return this.buildResult(this.config, this.queryService, new identifiers_1.Identifiers.ProjectIdentifier(identifiers_1.Identifiers.ProjectIdentifierEnum.Id, projectId));
    };
    return ProjectIdentifierQuery;
}());
exports.ProjectIdentifierQuery = ProjectIdentifierQuery;
