import { Identifiers } from './identifiers';

export class ContentManagementApiEndpoints {
    private readonly environmentId?: string;
    private readonly subscriptionId?: string;

    private readonly projectsPath: string = 'projects';
    private readonly subscriptionsPath: string = 'subscriptions';

    constructor(data: { environmentId?: string; subscriptionId?: string }) {
        this.environmentId = data.environmentId;
        this.subscriptionId = data.subscriptionId;
    }

    changeWorkflowStepOfLanguageVariant(
        itemIdentifier: Identifiers.ContentItemIdentifier,
        languageIdentifier: Identifiers.LanguageIdentifier,
        workflowIdentifier: Identifiers.WorkflowIdentifier
    ): string {
        return `${this.getEnvironmentsPath()}/items/${itemIdentifier.getParamValue()}/variants/${languageIdentifier.getParamValue()}/workflow/${workflowIdentifier.getParamValue()}`;
    }

    publishLaguageVariant(
        itemIdentifier: Identifiers.ContentItemIdentifier,
        languageIdentifier: Identifiers.LanguageIdentifier
    ): string {
        return `${this.getEnvironmentsPath()}/items/${itemIdentifier.getParamValue()}/variants/${languageIdentifier.getParamValue()}/publish`;
    }

    createNewVersionOfALanguageVariant(
        itemIdentifier: Identifiers.ContentItemIdentifier,
        languageIdentifier: Identifiers.LanguageIdentifier
    ): string {
        return `${this.getEnvironmentsPath()}/items/${itemIdentifier.getParamValue()}/variants/${languageIdentifier.getParamValue()}/new-version`;
    }

    unpublishLanguageVariant(
        itemIdentifier: Identifiers.ContentItemIdentifier,
        languageIdentifier: Identifiers.LanguageIdentifier
    ): string {
        return `${this.getEnvironmentsPath()}/items/${itemIdentifier.getParamValue()}/variants/${languageIdentifier.getParamValue()}/unpublish-and-archive`;
    }

    cancelScheduledPublishingOfLanguageVariant(
        itemIdentifier: Identifiers.ContentItemIdentifier,
        languageIdentifier: Identifiers.LanguageIdentifier
    ): string {
        return `${this.getEnvironmentsPath()}/items/${itemIdentifier.getParamValue()}/variants/${languageIdentifier.getParamValue()}/cancel-scheduled-publish`;
    }

    cancelScheduledUnpublishingOfLanguageVariant(
        itemIdentifier: Identifiers.ContentItemIdentifier,
        languageIdentifier: Identifiers.LanguageIdentifier
    ): string {
        return `${this.getEnvironmentsPath()}/items/${itemIdentifier.getParamValue()}/variants/${languageIdentifier.getParamValue()}/cancel-scheduled-unpublish`;
    }

    listWorkflowSteps(): string {
        return `${this.getEnvironmentsPath()}/workflow`;
    }

    listWorkflows(): string {
        return `${this.getEnvironmentsPath()}/workflows`;
    }

    addWorkflow(): string {
        return `${this.getEnvironmentsPath()}/workflows`;
    }

    updateWorkflow(workflowIdentifier: Identifiers.WorkflowIdentifier): string {
        return `${this.getEnvironmentsPath()}/workflows/${workflowIdentifier.getParamValue()}`;
    }

    deleteWorkflow(identifier: Identifiers.WorkflowIdentifier): string {
        return `${this.getEnvironmentsPath()}/workflows/${identifier.getParamValue()}`;
    }

    changeWorkflowOfLanguageVariant(
        itemIdentifier: Identifiers.ContentItemIdentifier,
        languageIdentifier: Identifiers.LanguageIdentifier
    ): string {
        return `${this.getEnvironmentsPath()}/items/${itemIdentifier.getParamValue()}/variants/${languageIdentifier.getParamValue()}/change-workflow`;
    }

    listContentTypeSnippets(): string {
        return `${this.getEnvironmentsPath()}/snippets`;
    }

    viewContentTypeSnippet(identifier: Identifiers.ContentTypeIdentifier): string {
        return `${this.getEnvironmentsPath()}/snippets/${identifier.getParamValue()}`;
    }

    addContentTypeSnippet(): string {
        return `${this.getEnvironmentsPath()}/snippets`;
    }

    deleteContentTypeSnippet(identifier: Identifiers.ContentTypeIdentifier): string {
        return `${this.getEnvironmentsPath()}/snippets/${identifier.getParamValue()}`;
    }

    modifyContentTypeSnippet(identifier: Identifiers.ContentTypeIdentifier): string {
        return `${this.getEnvironmentsPath()}/snippets/${identifier.getParamValue()}`;
    }

    startProjectValidation(): string {
        return `${this.getEnvironmentsPath()}/validate-async`;
    }

    checkEnvironmentValidation(identifier: Identifiers.TaskIdentifier): string {
        return `${this.getEnvironmentsPath()}/validate-async/tasks/${identifier.getParamValue()}`;
    }

    listEnvironmentIssues(identifier: Identifiers.TaskIdentifier): string {
        return `${this.getEnvironmentsPath()}/validate-async/tasks/${identifier.getParamValue()}/issues`;
    }

    environmentInformation(): string {
        return `${this.getEnvironmentsPath()}`;
    }

    listContentTypes(): string {
        return `${this.getEnvironmentsPath()}/types`;
    }

    addContentType(): string {
        return `${this.getEnvironmentsPath()}/types`;
    }

    deleteContentType(identifier: Identifiers.ContentTypeIdentifier): string {
        return `${this.getEnvironmentsPath()}/types/${identifier.getParamValue()}`;
    }

    viewContentType(identifier: Identifiers.ContentTypeIdentifier): string {
        return `${this.getEnvironmentsPath()}/types/${identifier.getParamValue()}`;
    }

    modifyContentType(identifier: Identifiers.ContentTypeIdentifier): string {
        return `${this.getEnvironmentsPath()}/types/${identifier.getParamValue()}`;
    }

    addTaxonomy(): string {
        return `${this.getEnvironmentsPath()}/taxonomies`;
    }

    modifyTaxonomy(identifier: Identifiers.TaxonomyIdentifier): string {
        return `${this.getEnvironmentsPath()}/taxonomies/${identifier.getParamValue()}`;
    }

    deleteTaxonomy(identifier: Identifiers.TaxonomyIdentifier): string {
        return `${this.getEnvironmentsPath()}/taxonomies/${identifier.getParamValue()}`;
    }

    listTaxonomies(): string {
        return `${this.getEnvironmentsPath()}/taxonomies`;
    }

    getTaxonomy(identifier: Identifiers.TaxonomyIdentifier): string {
        return `${this.getEnvironmentsPath()}/taxonomies/${identifier.getParamValue()}`;
    }

    addAsset(): string {
        return `${this.getEnvironmentsPath()}/assets`;
    }

    deleteAsset(identifier: Identifiers.AssetIdentifier): string {
        return `${this.getEnvironmentsPath()}/assets/${identifier.getParamValue()}`;
    }

    upsertAsset(assetIdentifier: Identifiers.AssetIdentifier): string {
        return `${this.getEnvironmentsPath()}/assets/${assetIdentifier.getParamValue()}`;
    }

    uploadBinaryFile(filename: string): string {
        return `${this.getEnvironmentsPath()}/files/${filename}`;
    }

    listAssets(): string {
        return `${this.getEnvironmentsPath()}/assets`;
    }

    viewAsset(identifier: Identifiers.AssetIdentifier): string {
        return `${this.getEnvironmentsPath()}/assets/${identifier.getParamValue()}`;
    }

    items(): string {
        return `${this.getEnvironmentsPath()}/items`;
    }

    viewContentItem(identifier: Identifiers.ContentItemIdentifier): string {
        return `${this.getEnvironmentsPath()}/items/${identifier.getParamValue()}`;
    }

    addContentItem(): string {
        return `${this.getEnvironmentsPath()}/items`;
    }

    updateContentItem(identifier: Identifiers.ContentItemIdentifier): string {
        return `${this.getEnvironmentsPath()}/items/${identifier.getParamValue()}`;
    }

    upsertContentItem(identifier: Identifiers.ContentItemIdentifier): string {
        return `${this.getEnvironmentsPath()}/items/${identifier.getParamValue()}`;
    }

    deleteContentItem(identifier: Identifiers.ContentItemIdentifier): string {
        return `${this.getEnvironmentsPath()}/items/${identifier.getParamValue()}`;
    }

    listLanguageVariantsOfItem(identifier: Identifiers.ContentItemIdentifier): string {
        return `${this.getEnvironmentsPath()}/items/${identifier.getParamValue()}/variants`;
    }

    listLanguageVariantsOfContentType(identifier: Identifiers.ContentTypeIdentifier): string {
        return `${this.getEnvironmentsPath()}/types/${identifier.getParamValue()}/variants`;
    }

    listLanguageVariantsByCollection(identifier: Identifiers.CollectionIdentifier): string {
        return `${this.getEnvironmentsPath()}/collections/${identifier.getParamValue()}/variants`;
    }

    listLanguageVariantsOfContentTypeWithComponents(identifier: Identifiers.ContentTypeIdentifier): string {
        return `${this.getEnvironmentsPath()}/types/${identifier.getParamValue()}/components`;
    }

    deleteLanguageVariant(
        itemIdentifier: Identifiers.ContentItemIdentifier,
        langaugeIdentifier: Identifiers.LanguageIdentifier
    ): string {
        return `${this.getEnvironmentsPath()}/items/${itemIdentifier.getParamValue()}/variants/${langaugeIdentifier.getParamValue()}`;
    }

    viewOrUpsertLanguageVariant(
        itemIdentifier: Identifiers.ContentItemIdentifier,
        langaugeIdentifier: Identifiers.LanguageIdentifier
    ): string {
        return `${this.getEnvironmentsPath()}/items/${itemIdentifier.getParamValue()}/variants/${langaugeIdentifier.getParamValue()}`;
    }

    viewLanguage(identifier: Identifiers.LanguageIdentifier): string {
        return `${this.getEnvironmentsPath()}/languages/${identifier.getParamValue()}`;
    }

    addLanguage(): string {
        return `${this.getEnvironmentsPath()}/languages`;
    }

    modifyLanguage(identifier: Identifiers.LanguageIdentifier): string {
        return `${this.getEnvironmentsPath()}/languages/${identifier.getParamValue()}`;
    }

    listLanguages(): string {
        return `${this.getEnvironmentsPath()}/languages`;
    }

    deleteLegacyWebhook(identifier: Identifiers.WebhookIdentifier): string {
        return `${this.getEnvironmentsPath()}/webhooks/${identifier.getParamValue()}`;
    }

    getLegacyWebhook(identifier: Identifiers.WebhookIdentifier): string {
        return `${this.getEnvironmentsPath()}/webhooks/${identifier.getParamValue()}`;
    }

    addLegacyWebhook(): string {
        return `${this.getEnvironmentsPath()}/webhooks`;
    }

    enableLegacyWebhook(identifier: Identifiers.WebhookIdentifier): string {
        return `${this.getEnvironmentsPath()}/webhooks/${identifier.getParamValue()}/enable`;
    }

    disableLegacyWebhook(identifier: Identifiers.WebhookIdentifier): string {
        return `${this.getEnvironmentsPath()}/webhooks/${identifier.getParamValue()}/disable`;
    }

    listLegacyWebhooks(): string {
        return `${this.getEnvironmentsPath()}/webhooks`;
    }

    deleteWebhook(identifier: Identifiers.WebhookIdentifier): string {
        return `${this.getEnvironmentsPath()}/webhooks-vnext/${identifier.getParamValue()}`;
    }

    getWebhook(identifier: Identifiers.WebhookIdentifier): string {
        return `${this.getEnvironmentsPath()}/webhooks-vnext/${identifier.getParamValue()}`;
    }

    addWebhook(): string {
        return `${this.getEnvironmentsPath()}/webhooks-vnext`;
    }

    enableWebhook(identifier: Identifiers.WebhookIdentifier): string {
        return `${this.getEnvironmentsPath()}/webhooks-vnext/${identifier.getParamValue()}/enable`;
    }

    disableWebhook(identifier: Identifiers.WebhookIdentifier): string {
        return `${this.getEnvironmentsPath()}/webhooks-vnext/${identifier.getParamValue()}/disable`;
    }

    listWebhooks(): string {
        return `${this.getEnvironmentsPath()}/webhooks-vnext`;
    }


    listAssetFolders(): string {
        return `${this.getEnvironmentsPath()}/folders`;
    }

    addAssetFolders(): string {
        return `${this.getEnvironmentsPath()}/folders`;
    }

    modifyAssetFolders(): string {
        return `${this.getEnvironmentsPath()}/folders`;
    }

    listCollections(): string {
        return `${this.getEnvironmentsPath()}/collections`;
    }

    setCollections(): string {
        return `${this.getEnvironmentsPath()}/collections`;
    }

    listAssetRenditions(identifier: Identifiers.AssetIdentifier): string {
        return `${this.getEnvironmentsPath()}/assets/${identifier.getParamValue()}/renditions`;
    }

    addAssetRendition(identifier: Identifiers.AssetIdentifier): string {
        return `${this.getEnvironmentsPath()}/assets/${identifier.getParamValue()}/renditions`;
    }

    modifyAssetRendition(
        assetIdentifier: Identifiers.AssetIdentifier,
        renditionIdentifier: Identifiers.RenditionIdentifier
    ): string {
        return `${this.getEnvironmentsPath()}/assets/${assetIdentifier.getParamValue()}/renditions/${renditionIdentifier.getParamValue()}`;
    }

    viewAssetRendition(
        assetIdentifier: Identifiers.AssetIdentifier,
        renditionIdentifier: Identifiers.RenditionIdentifier
    ): string {
        return `${this.getEnvironmentsPath()}/assets/${assetIdentifier.getParamValue()}/renditions/${renditionIdentifier.getParamValue()}`;
    }

    listSubscriptionProjects(): string {
        return `${this.getSubscriptionPath()}/projects`;
    }

    listSubscriptionUsers(): string {
        return `${this.getSubscriptionPath()}/users`;
    }

    viewSubscriptionProject(identifier: Identifiers.EnvironmentIdentifier): string {
        return `${this.getSubscriptionPath()}/projects/${identifier.getParamValue()}`;
    }

    viewSubscriptionUser(identifier: Identifiers.UserIdentifier): string {
        return `${this.getSubscriptionPath()}/users/${identifier.getParamValue()}`;
    }

    activateUserInAllProjects(identifier: Identifiers.UserIdentifier): string {
        return `${this.getSubscriptionPath()}/users/${identifier.getParamValue()}/activate`;
    }

    deactivateUserInAllProjects(identifier: Identifiers.UserIdentifier): string {
        return `${this.getSubscriptionPath()}/users/${identifier.getParamValue()}/deactivate`;
    }

    listRoles(): string {
        return `${this.getEnvironmentsPath()}/roles`;
    }

    viewRole(identifier: Identifiers.RoleIdentifier): string {
        return `${this.getEnvironmentsPath()}/roles/${identifier.getParamValue()}`;
    }

    getPreviewConfigruation(): string {
        return `${this.getEnvironmentsPath()}/preview-configuration`;
    }

    modifyPreviewConfigruation(): string {
        return `${this.getEnvironmentsPath()}/preview-configuration`;
    }

    inviteProjectUser(): string {
        return `${this.getEnvironmentsPath()}/users`;
    }

    changeProjectUserRoles(identifier: Identifiers.UserIdentifier): string {
        return `${this.getEnvironmentsPath()}/users/${identifier.getParamValue()}/roles`;
    }

    getEnvironmentCloningStatus(): string {
        return `${this.getEnvironmentsPath()}/environment-cloning-state`;
    }

    deleteEnvironment(): string {
        return this.getEnvironmentsPath();
    }

    modifyEnvironment(): string {
        return this.getEnvironmentsPath();
    }

    cloneEnvironment(): string {
        return `${this.getEnvironmentsPath()}/clone-environment`;
    }

    markEnvironmentAsProduction(): string {
        return `${this.getEnvironmentsPath()}/mark-environment-as-production`;
    }

    listSpaces(): string {
        return `${this.getEnvironmentsPath()}/spaces`;
    }

    viewSpace(identifier: Identifiers.SpaceIdentifier): string {
        return `${this.getEnvironmentsPath()}/spaces/${identifier.getParamValue()}`;
    }

    addSpace(): string {
        return `${this.getEnvironmentsPath()}/spaces`;
    }

    deleteSpace(identifier: Identifiers.SpaceIdentifier): string {
        return `${this.getEnvironmentsPath()}/spaces/${identifier.getParamValue()}`;
    }

    modifySpace(identifier: Identifiers.SpaceIdentifier): string {
        return `${this.getEnvironmentsPath()}/spaces/${identifier.getParamValue()}`;
    }

    private getSubscriptionPath(): string {
        if (!this.subscriptionId) {
            throw Error(`SubscriptionId was not provided in client configuration`);
        }
        return `${this.subscriptionsPath}/${this.subscriptionId}`;
    }

    private getEnvironmentsPath(): string {
        if (!this.environmentId) {
            throw Error(`EnvironmentId was not provided in client configuration`);
        }
        return `${this.projectsPath}/${this.environmentId}`;
    }
}
