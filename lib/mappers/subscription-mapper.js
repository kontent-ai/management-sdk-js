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
exports.subscriptionMapper = exports.SubscriptionMapper = void 0;
var models_1 = require("../models");
var responses_1 = require("../responses");
var base_mapper_1 = require("./base-mapper");
var SubscriptionMapper = /** @class */ (function (_super) {
    __extends(SubscriptionMapper, _super);
    function SubscriptionMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubscriptionMapper.prototype.mapSubscriptionProjectsListResponse = function (response) {
        var _this = this;
        var subscriptionProjects = response.data.projects.map(function (m) {
            return _this.mapSubscriptionProject(m);
        });
        var pagination = _super.prototype.mapPagination.call(this, response.data.pagination);
        return new responses_1.SubscriptionResponses.SubscriptionProjectsListResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, {
            pagination: pagination,
            items: subscriptionProjects
        });
    };
    SubscriptionMapper.prototype.mapSubscriptionUsersListResponse = function (response) {
        var _this = this;
        var subscriptionProjects = response.data.users.map(function (m) {
            return _this.mapSubscriptionUser(m);
        });
        var pagination = _super.prototype.mapPagination.call(this, response.data.pagination);
        return new responses_1.SubscriptionResponses.SubscriptionUsersListResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, {
            pagination: pagination,
            items: subscriptionProjects
        });
    };
    SubscriptionMapper.prototype.mapViewSubscriptionProjectResponse = function (response) {
        return new responses_1.SubscriptionResponses.ViewSubscriptionProjectResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, this.mapSubscriptionProject(response.data));
    };
    SubscriptionMapper.prototype.mapViewSubscriptionUserResponse = function (response) {
        return new responses_1.SubscriptionResponses.ViewSubscriptionUserResponse(_super.prototype.mapResponseDebug.call(this, response), response.data, this.mapSubscriptionUser(response.data));
    };
    SubscriptionMapper.prototype.mapSubscriptionProject = function (raw) {
        return new models_1.SubscriptionModels.SubscriptionProject({
            environments: raw.environments,
            id: raw.id,
            isActive: raw.is_active,
            name: raw.name,
            _raw: raw
        });
    };
    SubscriptionMapper.prototype.mapSubscriptionUser = function (raw) {
        return new models_1.SubscriptionModels.SubscriptionUser({
            email: raw.email,
            hasPendingInvitation: raw.has_pending_invitation,
            id: raw.id,
            firstName: raw.first_name,
            lastName: raw.last_name,
            projects: raw.projects.map(function (rawProject) {
                var project = {
                    id: rawProject.id,
                    name: rawProject.name,
                    environments: rawProject.environments.map(function (rawEnvironment) {
                        var environment = {
                            id: rawEnvironment.id,
                            name: rawEnvironment.name,
                            isUserActive: rawEnvironment.is_user_active,
                            lastActivityAt: rawEnvironment.last_activity_at
                                ? new Date(rawEnvironment.last_activity_at)
                                : undefined,
                            collectionGroups: rawEnvironment.collection_groups.map(function (rawCollectionGroup) {
                                var collectionGroup = {
                                    collections: rawCollectionGroup.collections,
                                    roles: rawCollectionGroup.roles.map(function (rawRole) {
                                        var role = {
                                            codename: rawRole.codename,
                                            id: rawRole.id,
                                            languages: rawRole.languages.map(function (rawLanguage) {
                                                var language = {
                                                    codename: rawLanguage.codename,
                                                    id: rawLanguage.id,
                                                    isActive: rawLanguage.is_active,
                                                    name: rawLanguage.name
                                                };
                                                return language;
                                            }),
                                            name: rawRole.name
                                        };
                                        return role;
                                    })
                                };
                                return collectionGroup;
                            })
                        };
                        return environment;
                    })
                };
                return project;
            }),
            _raw: raw
        });
    };
    return SubscriptionMapper;
}(base_mapper_1.BaseMapper));
exports.SubscriptionMapper = SubscriptionMapper;
exports.subscriptionMapper = new SubscriptionMapper();
