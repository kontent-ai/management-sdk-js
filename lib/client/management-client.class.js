"use strict";
exports.__esModule = true;
exports.ManagementClient = void 0;
var core_sdk_1 = require("@kontent-ai/core-sdk");
var queries_1 = require("../queries");
var sdk_info_generated_1 = require("../sdk-info.generated");
var services_1 = require("../services");
var environments_1 = require("../queries/environments");
var delete_environment_query_1 = require("../queries/environments/delete-environment-query");
var clone_environment_query_1 = require("../queries/environments/clone-environment-query");
var mark_environment_as_production_query_1 = require("../queries/environments/mark-environment-as-production-query");
var modify_environment_query_1 = require("../queries/environments/modify-environment-query");
var ManagementClient = /** @class */ (function () {
    function ManagementClient(config) {
        this.config = config;
        this.mappingService = new services_1.MappingService();
        var httpService = config.httpService ? config.httpService : new core_sdk_1.HttpService();
        this.queryService = new services_1.ManagementQueryService(config, httpService, {
            host: sdk_info_generated_1.sdkInfo.host,
            name: sdk_info_generated_1.sdkInfo.name,
            version: sdk_info_generated_1.sdkInfo.version
        });
        this.httpService = httpService;
    }
    ManagementClient.prototype.createCancelToken = function () {
        return this.httpService.createCancelToken();
    };
    ManagementClient.prototype.post = function () {
        return new queries_1.ActionQuery(this.config, this.queryService, function (config, queryService, action) {
            return new queries_1.DataQuery(config, queryService, function (nConfig, nQueryService, data) { return new queries_1.PostQuery(nConfig, nQueryService, action, data); });
        });
    };
    ManagementClient.prototype.patch = function () {
        return new queries_1.ActionQuery(this.config, this.queryService, function (config, queryService, action) {
            return new queries_1.DataQuery(config, queryService, function (nConfig, nQueryService, data) { return new queries_1.PatchQuery(nConfig, nQueryService, action, data); });
        });
    };
    ManagementClient.prototype.put = function () {
        return new queries_1.ActionQuery(this.config, this.queryService, function (config, queryService, action) {
            return new queries_1.DataQuery(config, queryService, function (nConfig, nQueryService, data) { return new queries_1.PutQuery(nConfig, nQueryService, action, data); });
        });
    };
    ManagementClient.prototype["delete"] = function () {
        return new queries_1.ActionQuery(this.config, this.queryService, function (config, queryService, action) { return new queries_1.DeleteQuery(config, queryService, action); });
    };
    ManagementClient.prototype.get = function () {
        return new queries_1.ActionQuery(this.config, this.queryService, function (config, queryService, action) { return new queries_1.GetQuery(config, queryService, action); });
    };
    ManagementClient.prototype.createNewVersionOfLanguageVariant = function () {
        return new queries_1.ContentItemIdentifierQuery(this.config, this.queryService, function (config, queryService, contentItemIdentifier) {
            return new queries_1.LanguageIdAndCodenameIdentifierQuery(config, queryService, function (nConfig, nQueryService, languageIdentifier) {
                return new queries_1.CreateNewVersionOfLanguageVariantQuery(nConfig, nQueryService, contentItemIdentifier, languageIdentifier);
            });
        });
    };
    ManagementClient.prototype.unpublishLanguageVariant = function () {
        return new queries_1.ContentItemIdentifierQuery(this.config, this.queryService, function (config, queryService, contentItemIdentifier) {
            return new queries_1.LanguageIdAndCodenameIdentifierQuery(config, queryService, function (nConfig, nQueryService, languageIdentifier) {
                return new queries_1.DataQueryOptional(nConfig, nQueryService, function (pConfig, pQueryService, data) {
                    return new queries_1.UnpublishLanguageVariantQuery(pConfig, pQueryService, contentItemIdentifier, languageIdentifier, data);
                });
            });
        });
    };
    ManagementClient.prototype.cancelSheduledPublishingOfLanguageVariant = function () {
        return new queries_1.ContentItemIdentifierQuery(this.config, this.queryService, function (config, queryService, contentItemIdentifier) {
            return new queries_1.LanguageIdAndCodenameIdentifierQuery(config, queryService, function (nConfig, nQueryService, languageIdentifier) {
                return new queries_1.CancelScheduledPublishingOfLanguageVariantQuery(nConfig, nQueryService, contentItemIdentifier, languageIdentifier);
            });
        });
    };
    ManagementClient.prototype.cancelSheduledUnpublishingOfLanguageVariant = function () {
        return new queries_1.ContentItemIdentifierQuery(this.config, this.queryService, function (config, queryService, contentItemIdentifier) {
            return new queries_1.LanguageIdAndCodenameIdentifierQuery(config, queryService, function (nConfig, nQueryService, languageIdentifier) {
                return new queries_1.CancelScheduledUnpublishingOfLanguageVariantQuery(nConfig, nQueryService, contentItemIdentifier, languageIdentifier);
            });
        });
    };
    ManagementClient.prototype.changeWorkflowStepOfLanguageVariant = function () {
        return new queries_1.ContentItemIdentifierQuery(this.config, this.queryService, function (config, queryService, contentItemIdentifier) {
            return new queries_1.LanguageIdAndCodenameIdentifierQuery(config, queryService, function (nConfig, nQueryService, languageIdentifier) {
                return new queries_1.WorkflowStepIdentifierQuery(nConfig, nQueryService, function (mConfig, mQueryservice, workflowIdentifier) {
                    return new queries_1.ChangeWorkflowStepOfLanguageOrVariantQuery(config, queryService, contentItemIdentifier, languageIdentifier, workflowIdentifier);
                });
            });
        });
    };
    ManagementClient.prototype.changeWorkflowOfLanguageVariant = function () {
        return new queries_1.ContentItemIdentifierQuery(this.config, this.queryService, function (config, queryService, contentItemIdentifier) {
            return new queries_1.LanguageIdAndCodenameIdentifierQuery(config, queryService, function (nConfig, nQueryService, languageIdentifier) {
                return new queries_1.DataQuery(nConfig, nQueryService, function (mConfig, mQueryservice, data) {
                    return new queries_1.ChangeWorkflowOfLanguageOrVariantQuery(config, queryService, contentItemIdentifier, languageIdentifier, data);
                });
            });
        });
    };
    ManagementClient.prototype.listWorkflows = function () {
        return new queries_1.ListWorkflowsQuery(this.config, this.queryService);
    };
    ManagementClient.prototype.deleteWorkflow = function () {
        return new queries_1.WorkflowIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) { return new queries_1.DeleteWorkflowQuery(config, queryService, identifier); });
    };
    ManagementClient.prototype.addWorkflow = function () {
        return new queries_1.DataQuery(this.config, this.queryService, function (config, queryService, data) { return new queries_1.AddWorkflowQuery(config, queryService, data); });
    };
    ManagementClient.prototype.updateWorkflow = function () {
        return new queries_1.WorkflowIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) {
            return new queries_1.DataQuery(config, queryService, function (nConfig, nQueryService, data) { return new queries_1.UpdateWorkflowQuery(nConfig, nQueryService, data, identifier); });
        });
    };
    ManagementClient.prototype.publishLanguageVariant = function () {
        return new queries_1.ContentItemIdentifierQuery(this.config, this.queryService, function (config, queryService, contentItemIdentifier) {
            return new queries_1.LanguageIdAndCodenameIdentifierQuery(config, queryService, function (nConfig, nQueryService, languageIdentifier) {
                return new queries_1.DataQueryOptional(nConfig, nQueryService, function (pConfig, pQueryService, data) {
                    return new queries_1.PublishLanguageVariantQuery(pConfig, pQueryService, contentItemIdentifier, languageIdentifier, data);
                });
            });
        });
    };
    ManagementClient.prototype.listWorkflowSteps = function () {
        return new queries_1.ListWorkflowStepsQuery(this.config, this.queryService);
    };
    ManagementClient.prototype.listContentTypeSnippets = function () {
        return new queries_1.ListContentTypeSnippetsQuery(this.config, this.queryService);
    };
    ManagementClient.prototype.viewContentTypeSnippet = function () {
        return new queries_1.ContentTypeIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) { return new queries_1.ViewContentTypeSnippetQuery(config, queryService, identifier); });
    };
    ManagementClient.prototype.deleteContentTypeSnippet = function () {
        return new queries_1.ContentTypeIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) { return new queries_1.DeleteContentTypeSnippetQuery(config, queryService, identifier); });
    };
    ManagementClient.prototype.addContentTypeSnippet = function () {
        return new queries_1.DataQuery(this.config, this.queryService, function (config, queryService, data) { return new queries_1.AddContentTypeSnippetQuery(config, queryService, data); });
    };
    ManagementClient.prototype.viewLanguageVariant = function () {
        return new queries_1.ContentItemIdentifierQuery(this.config, this.queryService, function (config, queryService, contentItemIdentifier) {
            return new queries_1.LanguageIdAndCodenameIdentifierQuery(config, queryService, function (nConfig, nQueryService, languageIdentifier) {
                return new queries_1.ViewLanguageVariantQuery(nConfig, nQueryService, contentItemIdentifier, languageIdentifier);
            });
        });
    };
    ManagementClient.prototype.upsertLanguageVariant = function () {
        return new queries_1.ContentItemIdentifierQuery(this.config, this.queryService, function (config, queryService, contentItemIdentifier) {
            return new queries_1.LanguageIdAndCodenameIdentifierQuery(config, queryService, function (nConfig, nQueryService, languageIdentifier) {
                return new queries_1.DataQuery(nConfig, nQueryService, function (mConfig, mQueryService, elements) {
                    return new queries_1.UpsertLanguageVariantQuery(mConfig, mQueryService, contentItemIdentifier, languageIdentifier, elements);
                });
            });
        });
    };
    ManagementClient.prototype.deleteLanguageVariant = function () {
        return new queries_1.ContentItemIdentifierQuery(this.config, this.queryService, function (config, queryService, contentItemIdentifier) {
            return new queries_1.LanguageIdAndCodenameIdentifierQuery(config, queryService, function (nConfig, nQueryService, languageIdentifier) {
                return new queries_1.DeleteLanguageVariantQuery(nConfig, nQueryService, contentItemIdentifier, languageIdentifier);
            });
        });
    };
    /**
     * @deprecated In favor of async validation endpoints
     */
    ManagementClient.prototype.validateProjectContent = function () {
        return new queries_1.ProjectIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) { return new queries_1.ValidateProjectContentQuery(config, queryService, identifier); });
    };
    ManagementClient.prototype.startProjectValidation = function () {
        return new queries_1.StartProjectValidationQuery(this.config, this.queryService);
    };
    ManagementClient.prototype.checkProjectValidation = function () {
        return new queries_1.TaskIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) { return new queries_1.CheckProjectValidationQuery(config, queryService, identifier); });
    };
    ManagementClient.prototype.listProjectValidationIssues = function () {
        return new queries_1.TaskIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) { return new queries_1.ListProjectValidationIssuesQuery(config, queryService, identifier); });
    };
    ManagementClient.prototype.deleteContentType = function () {
        return new queries_1.ContentTypeIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) { return new queries_1.DeleteContentTypeQuery(config, queryService, identifier); });
    };
    ManagementClient.prototype.addContentType = function () {
        return new queries_1.DataQuery(this.config, this.queryService, function (config, queryService, data) { return new queries_1.AddContentTypeQuery(config, queryService, data); });
    };
    ManagementClient.prototype.modifyContentTypeSnippet = function () {
        return new queries_1.ContentTypeIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) {
            return new queries_1.DataQuery(config, queryService, function (nConfig, nQueryService, data) {
                return new queries_1.ModifyContentTypeSnippetQuery(nConfig, nQueryService, identifier, data);
            });
        });
    };
    ManagementClient.prototype.modifyContentType = function () {
        return new queries_1.ContentTypeIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) {
            return new queries_1.DataQuery(config, queryService, function (nConfig, nQueryService, data) {
                return new queries_1.ModifyContentTypeQuery(nConfig, nQueryService, identifier, data);
            });
        });
    };
    ManagementClient.prototype.modifyTaxonomy = function () {
        return new queries_1.TaxonomyIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) {
            return new queries_1.DataQuery(config, queryService, function (nConfig, nQueryService, data) { return new queries_1.ModifyTaxonomyQuery(nConfig, nQueryService, identifier, data); });
        });
    };
    ManagementClient.prototype.viewContentType = function () {
        return new queries_1.ContentTypeIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) { return new queries_1.ViewContentTypeQuery(config, queryService, identifier); });
    };
    ManagementClient.prototype.listContentTypes = function () {
        return new queries_1.ListContentTypesQuery(this.config, this.queryService);
    };
    ManagementClient.prototype.listAssetRenditions = function () {
        return new queries_1.AssetIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) { return new queries_1.ListAssetRenditionsQuery(config, queryService, identifier); });
    };
    ManagementClient.prototype.addAssetRendition = function () {
        return new queries_1.AssetIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) {
            return new queries_1.DataQuery(config, queryService, function (nConfig, nQueryService, data) {
                return new queries_1.AddAssetRenditionQuery(nConfig, nQueryService, identifier, data);
            });
        });
    };
    ManagementClient.prototype.modifyAssetRendition = function () {
        return new queries_1.AssetIdentifierQuery(this.config, this.queryService, function (config, queryService, assetIdentifier) {
            return new queries_1.RenditionIdentifierQuery(config, queryService, function (mConfig, mQueryService, renditionIdentifier) {
                return new queries_1.DataQuery(config, queryService, function (nConfig, nQueryService, data) {
                    return new queries_1.ModifyAssetRenditionQuery(nConfig, nQueryService, assetIdentifier, renditionIdentifier, data);
                });
            });
        });
    };
    ManagementClient.prototype.viewAssetRendition = function () {
        return new queries_1.AssetIdentifierQuery(this.config, this.queryService, function (config, queryService, assetIdentifier) {
            return new queries_1.RenditionIdentifierQuery(config, queryService, function (xConfig, xQueryService, renditionIdentifier) {
                return new queries_1.ViewAssetRenditionQuery(config, queryService, assetIdentifier, renditionIdentifier);
            });
        });
    };
    ManagementClient.prototype.deleteTaxonomy = function () {
        return new queries_1.TaxonomyIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) { return new queries_1.DeleteTaxonomyQuery(config, queryService, identifier); });
    };
    ManagementClient.prototype.addTaxonomy = function () {
        return new queries_1.DataQuery(this.config, this.queryService, function (config, queryService, data) { return new queries_1.AddTaxonomyQuery(config, queryService, data); });
    };
    ManagementClient.prototype.listTaxonomies = function () {
        return new queries_1.ListTaxonomiesQuery(this.config, this.queryService);
    };
    ManagementClient.prototype.getTaxonomy = function () {
        return new queries_1.TaxonomyIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) { return new queries_1.GetTaxonomyQuery(config, queryService, identifier); });
    };
    ManagementClient.prototype.deleteAsset = function () {
        return new queries_1.AssetIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) { return new queries_1.DeleteAssetQuery(config, queryService, identifier); });
    };
    ManagementClient.prototype.upsertAsset = function () {
        var _this = this;
        return new queries_1.AssetIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) {
            return new queries_1.DataQuery(_this.config, _this.queryService, function (xConfig, xQueryService, data) { return new queries_1.UpsertAssetQuery(config, queryService, identifier, data); });
        });
    };
    ManagementClient.prototype.addAsset = function () {
        return new queries_1.DataQuery(this.config, this.queryService, function (config, queryService, data) { return new queries_1.AddAssetQuery(config, queryService, data); });
    };
    ManagementClient.prototype.uploadBinaryFile = function () {
        return new queries_1.DataQuery(this.config, this.queryService, function (config, queryService, data) { return new queries_1.UploadBinaryFileQuery(config, queryService, data); });
    };
    ManagementClient.prototype.uploadAssetFromUrl = function () {
        return new queries_1.DataQuery(this.config, this.queryService, function (config, queryService, data) { return new queries_1.UploadAssetFromUrlQuery(config, queryService, data); });
    };
    ManagementClient.prototype.viewAsset = function () {
        return new queries_1.AssetIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) { return new queries_1.ViewAssetsQuery(config, queryService, identifier); });
    };
    ManagementClient.prototype.listAssets = function () {
        return new queries_1.ListAssetsQuery(this.config, this.queryService);
    };
    ManagementClient.prototype.listContentItems = function () {
        return new queries_1.ListContentItemsQuery(this.config, this.queryService);
    };
    ManagementClient.prototype.viewContentItem = function () {
        return new queries_1.ContentItemIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) { return new queries_1.ViewContentItemQuery(config, queryService, identifier); });
    };
    ManagementClient.prototype.addContentItem = function () {
        return new queries_1.DataQuery(this.config, this.queryService, function (config, queryService, data) { return new queries_1.AddContentItemQuery(config, queryService, data); });
    };
    ManagementClient.prototype.updateContentItem = function () {
        return new queries_1.ContentItemIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) {
            return new queries_1.DataQuery(config, queryService, function (nConfig, nQueryService, data) {
                return new queries_1.UpdateContentItemQuery(nConfig, nQueryService, data, identifier);
            });
        });
    };
    ManagementClient.prototype.upsertContentItem = function () {
        return new queries_1.ContentItemIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) {
            return new queries_1.DataQuery(config, queryService, function (nConfig, nQueryService, data) {
                return new queries_1.UpsertContentItemQuery(nConfig, nQueryService, data, identifier);
            });
        });
    };
    ManagementClient.prototype.deleteContentItem = function () {
        return new queries_1.ContentItemIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) { return new queries_1.DeleteContentItemQuery(config, queryService, identifier); });
    };
    ManagementClient.prototype.listLanguageVariantsOfItem = function () {
        return new queries_1.ContentItemIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) { return new queries_1.ListLanguageVariantsOfItemQuery(config, queryService, identifier); });
    };
    ManagementClient.prototype.listLanguageVariantsOfContentType = function () {
        return new queries_1.ContentTypeCodenameAndIdIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) {
            return new queries_1.ListLanguageVariantsOfContentTypeQuery(config, queryService, identifier);
        });
    };
    ManagementClient.prototype.listLanguageVariantsByCollection = function () {
        return new queries_1.CollectionIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) {
            return new queries_1.ListLanguageVariantsByCollectionQuery(config, queryService, identifier);
        });
    };
    ManagementClient.prototype.listLanguageVariantsOfContentTypeWithComponents = function () {
        return new queries_1.ContentTypeCodenameAndIdIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) {
            return new queries_1.ListLanguageVariantsOfContentTypeWithComponentsQuery(config, queryService, identifier);
        });
    };
    ManagementClient.prototype.listLanguages = function () {
        return new queries_1.ListLanguagesQuery(this.config, this.queryService);
    };
    ManagementClient.prototype.viewLanguage = function () {
        return new queries_1.LanguageIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) { return new queries_1.ViewLanguageQuery(config, queryService, identifier); });
    };
    ManagementClient.prototype.addLanguage = function () {
        return new queries_1.DataQuery(this.config, this.queryService, function (config, queryService, data) { return new queries_1.AddLanguageQuery(config, queryService, data); });
    };
    ManagementClient.prototype.modifyLanguage = function () {
        return new queries_1.LanguageIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) {
            return new queries_1.DataQuery(config, queryService, function (nConfig, nQueryService, data) { return new queries_1.ModifyLanguageQuery(nConfig, nQueryService, identifier, data); });
        });
    };
    ManagementClient.prototype.deleteWebhook = function () {
        return new queries_1.WebhookIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) { return new queries_1.DeleteWebhookQuery(config, queryService, identifier); });
    };
    ManagementClient.prototype.addWebhook = function () {
        return new queries_1.DataQuery(this.config, this.queryService, function (config, queryService, data) { return new queries_1.AddWebhookQuery(config, queryService, data); });
    };
    ManagementClient.prototype.enableWebhook = function () {
        return new queries_1.WebhookIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) { return new queries_1.EnableWebhookQuery(config, queryService, identifier); });
    };
    ManagementClient.prototype.disableWebhook = function () {
        return new queries_1.WebhookIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) { return new queries_1.DisableWebhookQuery(config, queryService, identifier); });
    };
    ManagementClient.prototype.getWebhook = function () {
        return new queries_1.WebhookIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) { return new queries_1.GetWebhookQuery(config, queryService, identifier); });
    };
    ManagementClient.prototype.listWebhooks = function () {
        return new queries_1.ListWebhooksQuery(this.config, this.queryService);
    };
    ManagementClient.prototype.projectInformation = function () {
        return new queries_1.ProjectInformationQuery(this.config, this.queryService);
    };
    ManagementClient.prototype.listAssetFolders = function () {
        return new queries_1.ListAssetFoldersQuery(this.config, this.queryService);
    };
    ManagementClient.prototype.addAssetFolders = function () {
        return new queries_1.DataQuery(this.config, this.queryService, function (config, queryService, data) { return new queries_1.AddAssetFoldersQuery(config, queryService, data); });
    };
    ManagementClient.prototype.modifyAssetFolders = function () {
        return new queries_1.DataQuery(this.config, this.queryService, function (config, queryService, data) { return new queries_1.ModifyAssetFoldersQuery(config, queryService, data); });
    };
    ManagementClient.prototype.listCollections = function () {
        return new queries_1.ListCollectionsQuery(this.config, this.queryService);
    };
    ManagementClient.prototype.setCollections = function () {
        return new queries_1.DataQuery(this.config, this.queryService, function (config, queryService, data) { return new queries_1.SetCollectionsQuery(config, queryService, data); });
    };
    ManagementClient.prototype.createLanguageVariantEditUrl = function (data) {
        var url = "https://app.kontent.ai/goto/edit-item/project/".concat(this.config.projectId, "/variant-codename/").concat(data.languageCodename, "/item/").concat(data.variantId);
        if (data.elementCodename) {
            url += "/element/".concat(data.elementCodename);
        }
        if (data.nestedItemId) {
            url += "/item/".concat(data.nestedItemId);
            if (data.nestedItemElementCodename) {
                url += "/element/".concat(data.nestedItemElementCodename);
            }
        }
        return url;
    };
    ManagementClient.prototype.listSubscriptionProjects = function () {
        return new queries_1.ListSubscriptionProjectsQuery(this.config, this.queryService);
    };
    ManagementClient.prototype.listSubscriptionUsers = function () {
        return new queries_1.ListSubscriptionUsersQuery(this.config, this.queryService);
    };
    ManagementClient.prototype.viewSubscriptionProject = function () {
        return new queries_1.ProjectIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) { return new queries_1.ViewSubscriptionProjectQuery(config, queryService, identifier); });
    };
    ManagementClient.prototype.viewSubscriptionUser = function () {
        return new queries_1.UserIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) { return new queries_1.ViewSubscriptionUserQuery(config, queryService, identifier); });
    };
    ManagementClient.prototype.activateUserInAllProjects = function () {
        return new queries_1.UserIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) { return new queries_1.ActivateUserInAllProjectsQuery(config, queryService, identifier); });
    };
    ManagementClient.prototype.deactivateUserInAllProjects = function () {
        return new queries_1.UserIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) { return new queries_1.DeactivateUserInAllProjectsQuery(config, queryService, identifier); });
    };
    ManagementClient.prototype.listRoles = function () {
        return new queries_1.ListRolesQuery(this.config, this.queryService);
    };
    ManagementClient.prototype.viewRole = function () {
        return new queries_1.RoleIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) { return new queries_1.ViewRoleQuery(config, queryService, identifier); });
    };
    ManagementClient.prototype.inviteUser = function () {
        return new queries_1.DataQuery(this.config, this.queryService, function (config, queryService, data) { return new queries_1.InviteProjectUserQuery(config, queryService, data); });
    };
    ManagementClient.prototype.changeUserRoles = function () {
        return new queries_1.UserIdentifierQuery(this.config, this.queryService, function (config, queryService, identifier) {
            return new queries_1.DataQuery(config, queryService, function (nConfig, nQueryService, data) { return new queries_1.ChangeUserRolesQuery(nConfig, nQueryService, identifier, data); });
        });
    };
    ManagementClient.prototype.getEnvironmentCloningState = function () {
        return new environments_1.GetEnvironmentCloningStateQuery(this.config, this.queryService);
    };
    ManagementClient.prototype.deleteEnvironment = function () {
        return new delete_environment_query_1.DeleteEnvironmentQuery(this.config, this.queryService);
    };
    ManagementClient.prototype.modifyEnvironment = function () {
        return new queries_1.DataQuery(this.config, this.queryService, function (config, queryService, data) { return new modify_environment_query_1.ModifyEnvironmentQuery(config, queryService, data); });
    };
    ManagementClient.prototype.cloneEnvironment = function () {
        return new queries_1.DataQuery(this.config, this.queryService, function (config, queryService, data) { return new clone_environment_query_1.CloneEnvironmentQuery(config, queryService, data); });
    };
    ManagementClient.prototype.markEnvironmentAsProduction = function () {
        return new queries_1.DataQuery(this.config, this.queryService, function (config, queryService, data) { return new mark_environment_as_production_query_1.MarkEnvironmentAsProductionQuery(config, queryService, data); });
    };
    return ManagementClient;
}());
exports.ManagementClient = ManagementClient;
