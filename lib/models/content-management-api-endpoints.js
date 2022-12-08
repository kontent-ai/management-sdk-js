"use strict";
exports.__esModule = true;
exports.ContentManagementApiEndpoints = void 0;
var ContentManagementApiEndpoints = /** @class */ (function () {
    function ContentManagementApiEndpoints(data) {
        this.projectsPath = 'projects';
        this.subscriptionsPath = 'subscriptions';
        this.projectId = data.projectId;
        this.subscriptionId = data.subscriptionId;
    }
    ContentManagementApiEndpoints.prototype.changeWorkflowStepOfLanguageVariant = function (itemIdentifier, languageIdentifier, workflowIdentifier) {
        return "".concat(this.getProjectPath(), "/items/").concat(itemIdentifier.getParamValue(), "/variants/").concat(languageIdentifier.getParamValue(), "/workflow/").concat(workflowIdentifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.publishLaguageVariant = function (itemIdentifier, languageIdentifier) {
        return "".concat(this.getProjectPath(), "/items/").concat(itemIdentifier.getParamValue(), "/variants/").concat(languageIdentifier.getParamValue(), "/publish");
    };
    ContentManagementApiEndpoints.prototype.createNewVersionOfALanguageVariant = function (itemIdentifier, languageIdentifier) {
        return "".concat(this.getProjectPath(), "/items/").concat(itemIdentifier.getParamValue(), "/variants/").concat(languageIdentifier.getParamValue(), "/new-version");
    };
    ContentManagementApiEndpoints.prototype.unpublishLanguageVariant = function (itemIdentifier, languageIdentifier) {
        return "".concat(this.getProjectPath(), "/items/").concat(itemIdentifier.getParamValue(), "/variants/").concat(languageIdentifier.getParamValue(), "/unpublish-and-archive");
    };
    ContentManagementApiEndpoints.prototype.cancelScheduledPublishingOfLanguageVariant = function (itemIdentifier, languageIdentifier) {
        return "".concat(this.getProjectPath(), "/items/").concat(itemIdentifier.getParamValue(), "/variants/").concat(languageIdentifier.getParamValue(), "/cancel-scheduled-publish");
    };
    ContentManagementApiEndpoints.prototype.cancelScheduledUnpublishingOfLanguageVariant = function (itemIdentifier, languageIdentifier) {
        return "".concat(this.getProjectPath(), "/items/").concat(itemIdentifier.getParamValue(), "/variants/").concat(languageIdentifier.getParamValue(), "/cancel-scheduled-unpublish");
    };
    ContentManagementApiEndpoints.prototype.listWorkflowSteps = function () {
        return "".concat(this.getProjectPath(), "/workflow");
    };
    ContentManagementApiEndpoints.prototype.listWorkflows = function () {
        return "".concat(this.getProjectPath(), "/workflows");
    };
    ContentManagementApiEndpoints.prototype.addWorkflow = function () {
        return "".concat(this.getProjectPath(), "/workflows");
    };
    ContentManagementApiEndpoints.prototype.updateWorkflow = function (workflowIdentifier) {
        return "".concat(this.getProjectPath(), "/workflows/").concat(workflowIdentifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.deleteWorkflow = function (identifier) {
        return "".concat(this.getProjectPath(), "/workflows/").concat(identifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.changeWorkflowOfLanguageVariant = function (itemIdentifier, languageIdentifier) {
        return "".concat(this.getProjectPath(), "/items/").concat(itemIdentifier.getParamValue(), "/variants/").concat(languageIdentifier.getParamValue(), "/change-workflow");
    };
    ContentManagementApiEndpoints.prototype.listContentTypeSnippets = function () {
        return "".concat(this.getProjectPath(), "/snippets");
    };
    ContentManagementApiEndpoints.prototype.viewContentTypeSnippet = function (identifier) {
        return "".concat(this.getProjectPath(), "/snippets/").concat(identifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.addContentTypeSnippet = function () {
        return "".concat(this.getProjectPath(), "/snippets");
    };
    ContentManagementApiEndpoints.prototype.deleteContentTypeSnippet = function (identifier) {
        return "".concat(this.getProjectPath(), "/snippets/").concat(identifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.modifyContentTypeSnippet = function (identifier) {
        return "".concat(this.getProjectPath(), "/snippets/").concat(identifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.startProjectValidation = function () {
        return "".concat(this.getProjectPath(), "/validate-async");
    };
    ContentManagementApiEndpoints.prototype.checkProjectValidation = function (identifier) {
        return "".concat(this.getProjectPath(), "/validate-async/tasks/").concat(identifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.listProjectIssues = function (identifier) {
        return "".concat(this.getProjectPath(), "/validate-async/tasks/").concat(identifier.getParamValue(), "/issues");
    };
    ContentManagementApiEndpoints.prototype.validateProjectContent = function () {
        return "".concat(this.getProjectPath(), "/validate");
    };
    ContentManagementApiEndpoints.prototype.projectInformation = function () {
        return "".concat(this.getProjectPath());
    };
    ContentManagementApiEndpoints.prototype.listContentTypes = function () {
        return "".concat(this.getProjectPath(), "/types");
    };
    ContentManagementApiEndpoints.prototype.addContentType = function () {
        return "".concat(this.getProjectPath(), "/types");
    };
    ContentManagementApiEndpoints.prototype.deleteContentType = function (identifier) {
        return "".concat(this.getProjectPath(), "/types/").concat(identifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.viewContentType = function (identifier) {
        return "".concat(this.getProjectPath(), "/types/").concat(identifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.modifyContentType = function (identifier) {
        return "".concat(this.getProjectPath(), "/types/").concat(identifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.addTaxonomy = function () {
        return "".concat(this.getProjectPath(), "/taxonomies");
    };
    ContentManagementApiEndpoints.prototype.modifyTaxonomy = function (identifier) {
        return "".concat(this.getProjectPath(), "/taxonomies/").concat(identifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.deleteTaxonomy = function (identifier) {
        return "".concat(this.getProjectPath(), "/taxonomies/").concat(identifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.listTaxonomies = function () {
        return "".concat(this.getProjectPath(), "/taxonomies");
    };
    ContentManagementApiEndpoints.prototype.getTaxonomy = function (identifier) {
        return "".concat(this.getProjectPath(), "/taxonomies/").concat(identifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.addAsset = function () {
        return "".concat(this.getProjectPath(), "/assets");
    };
    ContentManagementApiEndpoints.prototype.deleteAsset = function (identifier) {
        return "".concat(this.getProjectPath(), "/assets/").concat(identifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.upsertAsset = function (assetIdentifier) {
        return "".concat(this.getProjectPath(), "/assets/").concat(assetIdentifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.uploadBinaryFile = function (filename) {
        return "".concat(this.getProjectPath(), "/files/").concat(filename);
    };
    ContentManagementApiEndpoints.prototype.listAssets = function () {
        return "".concat(this.getProjectPath(), "/assets");
    };
    ContentManagementApiEndpoints.prototype.viewAsset = function (identifier) {
        return "".concat(this.getProjectPath(), "/assets/").concat(identifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.items = function () {
        return "".concat(this.getProjectPath(), "/items");
    };
    ContentManagementApiEndpoints.prototype.viewContentItem = function (identifier) {
        return "".concat(this.getProjectPath(), "/items/").concat(identifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.addContentItem = function () {
        return "".concat(this.getProjectPath(), "/items");
    };
    ContentManagementApiEndpoints.prototype.updateContentItem = function (identifier) {
        return "".concat(this.getProjectPath(), "/items/").concat(identifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.upsertContentItem = function (identifier) {
        return "".concat(this.getProjectPath(), "/items/").concat(identifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.deleteContentItem = function (identifier) {
        return "".concat(this.getProjectPath(), "/items/").concat(identifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.listLanguageVariantsOfItem = function (identifier) {
        return "".concat(this.getProjectPath(), "/items/").concat(identifier.getParamValue(), "/variants");
    };
    ContentManagementApiEndpoints.prototype.listLanguageVariantsOfContentType = function (identifier) {
        return "".concat(this.getProjectPath(), "/types/").concat(identifier.getParamValue(), "/variants");
    };
    ContentManagementApiEndpoints.prototype.listLanguageVariantsByCollection = function (identifier) {
        return "".concat(this.getProjectPath(), "/collections/").concat(identifier.getParamValue(), "/variants");
    };
    ContentManagementApiEndpoints.prototype.listLanguageVariantsOfContentTypeWithComponents = function (identifier) {
        return "".concat(this.getProjectPath(), "/types/").concat(identifier.getParamValue(), "/components");
    };
    ContentManagementApiEndpoints.prototype.deleteLanguageVariant = function (itemIdentifier, langaugeIdentifier) {
        return "".concat(this.getProjectPath(), "/items/").concat(itemIdentifier.getParamValue(), "/variants/").concat(langaugeIdentifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.viewOrUpsertLanguageVariant = function (itemIdentifier, langaugeIdentifier) {
        return "".concat(this.getProjectPath(), "/items/").concat(itemIdentifier.getParamValue(), "/variants/").concat(langaugeIdentifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.viewLanguage = function (identifier) {
        return "".concat(this.getProjectPath(), "/languages/").concat(identifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.addLanguage = function () {
        return "".concat(this.getProjectPath(), "/languages");
    };
    ContentManagementApiEndpoints.prototype.modifyLanguage = function (identifier) {
        return "".concat(this.getProjectPath(), "/languages/").concat(identifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.listLanguages = function () {
        return "".concat(this.getProjectPath(), "/languages");
    };
    ContentManagementApiEndpoints.prototype.deleteWebhook = function (identifier) {
        return "".concat(this.getProjectPath(), "/webhooks/").concat(identifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.getWebhook = function (identifier) {
        return "".concat(this.getProjectPath(), "/webhooks/").concat(identifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.addWebhook = function () {
        return "".concat(this.getProjectPath(), "/webhooks");
    };
    ContentManagementApiEndpoints.prototype.enableWebhook = function (identifier) {
        return "".concat(this.getProjectPath(), "/webhooks/").concat(identifier.getParamValue(), "/enable");
    };
    ContentManagementApiEndpoints.prototype.disableWebhook = function (identifier) {
        return "".concat(this.getProjectPath(), "/webhooks/").concat(identifier.getParamValue(), "/disable");
    };
    ContentManagementApiEndpoints.prototype.listWebhooks = function () {
        return "".concat(this.getProjectPath(), "/webhooks");
    };
    ContentManagementApiEndpoints.prototype.listAssetFolders = function () {
        return "".concat(this.getProjectPath(), "/folders");
    };
    ContentManagementApiEndpoints.prototype.addAssetFolders = function () {
        return "".concat(this.getProjectPath(), "/folders");
    };
    ContentManagementApiEndpoints.prototype.modifyAssetFolders = function () {
        return "".concat(this.getProjectPath(), "/folders");
    };
    ContentManagementApiEndpoints.prototype.listCollections = function () {
        return "".concat(this.getProjectPath(), "/collections");
    };
    ContentManagementApiEndpoints.prototype.setCollections = function () {
        return "".concat(this.getProjectPath(), "/collections");
    };
    ContentManagementApiEndpoints.prototype.listAssetRenditions = function (identifier) {
        return "".concat(this.getProjectPath(), "/assets/").concat(identifier.getParamValue(), "/renditions");
    };
    ContentManagementApiEndpoints.prototype.addAssetRendition = function (identifier) {
        return "".concat(this.getProjectPath(), "/assets/").concat(identifier.getParamValue(), "/renditions");
    };
    ContentManagementApiEndpoints.prototype.modifyAssetRendition = function (assetIdentifier, renditionIdentifier) {
        return "".concat(this.getProjectPath(), "/assets/").concat(assetIdentifier.getParamValue(), "/renditions/").concat(renditionIdentifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.viewAssetRendition = function (assetIdentifier, renditionIdentifier) {
        return "".concat(this.getProjectPath(), "/assets/").concat(assetIdentifier.getParamValue(), "/renditions/").concat(renditionIdentifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.listSubscriptionProjects = function () {
        return "".concat(this.getSubscriptionPath(), "/projects");
    };
    ContentManagementApiEndpoints.prototype.listSubscriptionUsers = function () {
        return "".concat(this.getSubscriptionPath(), "/users");
    };
    ContentManagementApiEndpoints.prototype.viewSubscriptionProject = function (identifier) {
        return "".concat(this.getSubscriptionPath(), "/projects/").concat(identifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.viewSubscriptionUser = function (identifier) {
        return "".concat(this.getSubscriptionPath(), "/users/").concat(identifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.activateUserInAllProjects = function (identifier) {
        return "".concat(this.getSubscriptionPath(), "/users/").concat(identifier.getParamValue(), "/activate");
    };
    ContentManagementApiEndpoints.prototype.deactivateUserInAllProjects = function (identifier) {
        return "".concat(this.getSubscriptionPath(), "/users/").concat(identifier.getParamValue(), "/deactivate");
    };
    ContentManagementApiEndpoints.prototype.listRoles = function () {
        return "".concat(this.getProjectPath(), "/roles");
    };
    ContentManagementApiEndpoints.prototype.viewRole = function (identifier) {
        return "".concat(this.getProjectPath(), "/roles/").concat(identifier.getParamValue());
    };
    ContentManagementApiEndpoints.prototype.inviteProjectUser = function () {
        return "".concat(this.getProjectPath(), "/users");
    };
    ContentManagementApiEndpoints.prototype.changeProjectUserRoles = function (identifier) {
        return "".concat(this.getProjectPath(), "/users/").concat(identifier.getParamValue(), "/roles");
    };
    ContentManagementApiEndpoints.prototype.getEnvironmentCloningStatus = function () {
        return "".concat(this.getEnvironmentsPath(), "/environment-cloning-state");
    };
    ContentManagementApiEndpoints.prototype.deleteEnvironment = function () {
        return this.getEnvironmentsPath();
    };
    ContentManagementApiEndpoints.prototype.modifyEnvironment = function () {
        return this.getEnvironmentsPath();
    };
    ContentManagementApiEndpoints.prototype.cloneEnvironment = function () {
        return "".concat(this.getEnvironmentsPath(), "/clone-environment");
    };
    ContentManagementApiEndpoints.prototype.markEnvironmentAsProduction = function () {
        return "".concat(this.getEnvironmentsPath(), "/mark-environment-as-production");
    };
    ContentManagementApiEndpoints.prototype.getProjectPath = function () {
        if (!this.projectId) {
            throw Error("ProjectId was not provided in client configuration");
        }
        return "".concat(this.projectsPath, "/").concat(this.projectId);
    };
    ContentManagementApiEndpoints.prototype.getSubscriptionPath = function () {
        if (!this.subscriptionId) {
            throw Error("SubscriptionId was not provided in client configuration");
        }
        return "".concat(this.subscriptionsPath, "/").concat(this.subscriptionId);
    };
    ContentManagementApiEndpoints.prototype.getEnvironmentsPath = function () {
        if (!this.projectId) {
            throw Error("ProjectId was not provided in client configuration");
        }
        return "".concat(this.projectsPath, "/").concat(this.projectId);
    };
    return ContentManagementApiEndpoints;
}());
exports.ContentManagementApiEndpoints = ContentManagementApiEndpoints;
