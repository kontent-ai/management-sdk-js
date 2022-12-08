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
exports.projectUserMapper = exports.ProjectUserMapper = void 0;
var models_1 = require("../models");
var responses_1 = require("../responses");
var base_mapper_1 = require("./base-mapper");
var ProjectUserMapper = /** @class */ (function (_super) {
    __extends(ProjectUserMapper, _super);
    function ProjectUserMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProjectUserMapper.prototype.mapInviteUserResponse = function (response) {
        return new responses_1.ProjectUsersResponses.InviteUserResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, this.mapProjectUser(response.data));
    };
    ProjectUserMapper.prototype.mapChangeUserRolesResponse = function (response) {
        return new responses_1.ProjectUsersResponses.ChangeUserRolesResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, this.mapProjectUser(response.data));
    };
    ProjectUserMapper.prototype.mapCollectionGroup = function (rawItem) {
        return new models_1.ProjectUserModels.CollectionGroup({
            collections: rawItem.collections,
            roles: rawItem.roles,
            _raw: rawItem
        });
    };
    ProjectUserMapper.prototype.mapProjectUser = function (rawItem) {
        var _this = this;
        return new models_1.ProjectUserModels.ProjectUser({
            userId: rawItem.user_id,
            collectionGroups: rawItem.collection_groups.map(function (m) { return _this.mapCollectionGroup(m); }),
            _raw: rawItem
        });
    };
    return ProjectUserMapper;
}(base_mapper_1.BaseMapper));
exports.ProjectUserMapper = ProjectUserMapper;
exports.projectUserMapper = new ProjectUserMapper();
