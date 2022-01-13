import { Identifiers } from './identifiers';

export class ContentManagementApiEndpoints {
    private readonly projectId?: string;
    private readonly subscriptionId?: string;

    private readonly projectsPath: string = 'projects';
    private readonly subscriptionsPath: string = 'subscriptions';

    constructor(data: { projectId?: string; subscriptionId?: string }) {
        this.projectId = data.projectId;
        this.subscriptionId = data.subscriptionId;
    }

    changeWorkflowStepOfLanguageVariant(
        itemIdentifier: Identifiers.ContentItemIdentifier,
        languageIdentifier: Identifiers.LanguageIdentifier,
        workflowIdentifier: Identifiers.WorkflowIdentifier
    ): string {
        return `${this.getProjectPath()}/items/${itemIdentifier.getParamValue()}/variants/${languageIdentifier.getParamValue()}/workflow/${workflowIdentifier.getParamValue()}`;
    }

    publishLaguageVariant(
        itemIdentifier: Identifiers.ContentItemIdentifier,
        languageIdentifier: Identifiers.LanguageIdentifier
    ): string {
        return `${this.getProjectPath()}/items/${itemIdentifier.getParamValue()}/variants/${languageIdentifier.getParamValue()}/publish`;
    }

    createNewVersionOfALanguageVariant(
        itemIdentifier: Identifiers.ContentItemIdentifier,
        languageIdentifier: Identifiers.LanguageIdentifier
    ): string {
        return `${this.getProjectPath()}/items/${itemIdentifier.getParamValue()}/variants/${languageIdentifier.getParamValue()}/new-version`;
    }

    unpublishLanguageVariant(
        itemIdentifier: Identifiers.ContentItemIdentifier,
        languageIdentifier: Identifiers.LanguageIdentifier
    ): string {
        return `${this.getProjectPath()}/items/${itemIdentifier.getParamValue()}/variants/${languageIdentifier.getParamValue()}/unpublish-and-archive`;
    }

    cancelScheduledPublishingOfLanguageVariant(
        itemIdentifier: Identifiers.ContentItemIdentifier,
        languageIdentifier: Identifiers.LanguageIdentifier
    ): string {
        return `${this.getProjectPath()}/items/${itemIdentifier.getParamValue()}/variants/${languageIdentifier.getParamValue()}/cancel-scheduled-publish`;
    }

    cancelScheduledUnpublishingOfLanguageVariant(
        itemIdentifier: Identifiers.ContentItemIdentifier,
        languageIdentifier: Identifiers.LanguageIdentifier
    ): string {
        return `${this.getProjectPath()}/items/${itemIdentifier.getParamValue()}/variants/${languageIdentifier.getParamValue()}/cancel-scheduled-unpublish`;
    }

    listWorkflowSteps(): string {
        return `${this.getProjectPath()}/workflow`;
    }

    listContentTypeSnippets(): string {
        return `${this.getProjectPath()}/snippets`;
    }

    viewContentTypeSnippet(identifier: Identifiers.ContentTypeIdentifier): string {
        return `${this.getProjectPath()}/snippets/${identifier.getParamValue()}`;
    }

    addContentTypeSnippet(): string {
        return `${this.getProjectPath()}/snippets`;
    }

    deleteContentTypeSnippet(identifier: Identifiers.ContentTypeIdentifier): string {
        return `${this.getProjectPath()}/snippets/${identifier.getParamValue()}`;
    }

    modifyContentTypeSnippet(identifier: Identifiers.ContentTypeIdentifier): string {
        return `${this.getProjectPath()}/snippets/${identifier.getParamValue()}`;
    }

    validateProjectContent(): string {
        return `${this.getProjectPath()}/validate`;
    }

    projectInformation(): string {
        return `${this.getProjectPath()}`;
    }

    listContentTypes(): string {
        return `${this.getProjectPath()}/types`;
    }

    addContentType(): string {
        return `${this.getProjectPath()}/types`;
    }

    deleteContentType(identifier: Identifiers.ContentTypeIdentifier): string {
        return `${this.getProjectPath()}/types/${identifier.getParamValue()}`;
    }

    viewContentType(identifier: Identifiers.ContentTypeIdentifier): string {
        return `${this.getProjectPath()}/types/${identifier.getParamValue()}`;
    }

    modifyContentType(identifier: Identifiers.ContentTypeIdentifier): string {
        return `${this.getProjectPath()}/types/${identifier.getParamValue()}`;
    }

    addTaxonomy(): string {
        return `${this.getProjectPath()}/taxonomies`;
    }

    modifyTaxonomy(identifier: Identifiers.TaxonomyIdentifier): string {
        return `${this.getProjectPath()}/taxonomies/${identifier.getParamValue()}`;
    }

    deleteTaxonomy(identifier: Identifiers.TaxonomyIdentifier): string {
        return `${this.getProjectPath()}/taxonomies/${identifier.getParamValue()}`;
    }

    listTaxonomies(): string {
        return `${this.getProjectPath()}/taxonomies`;
    }

    getTaxonomy(identifier: Identifiers.TaxonomyIdentifier): string {
        return `${this.getProjectPath()}/taxonomies/${identifier.getParamValue()}`;
    }

    addAsset(): string {
        return `${this.getProjectPath()}/assets`;
    }

    deleteAsset(identifier: Identifiers.AssetIdentifier): string {
        return `${this.getProjectPath()}/assets/${identifier.getParamValue()}`;
    }

    upsertAsset(assetIdentifier: Identifiers.AssetIdentifier): string {
        return `${this.getProjectPath()}/assets/${assetIdentifier.getParamValue()}`;
    }

    uploadBinaryFile(filename: string): string {
        return `${this.getProjectPath()}/files/${filename}`;
    }

    listAssets(): string {
        return `${this.getProjectPath()}/assets`;
    }

    viewAsset(identifier: Identifiers.AssetIdentifier): string {
        return `${this.getProjectPath()}/assets/${identifier.getParamValue()}`;
    }

    items(): string {
        return `${this.getProjectPath()}/items`;
    }

    viewContentItem(identifier: Identifiers.ContentItemIdentifier): string {
        return `${this.getProjectPath()}/items/${identifier.getParamValue()}`;
    }

    addContentItem(): string {
        return `${this.getProjectPath()}/items`;
    }

    updateContentItem(identifier: Identifiers.ContentItemIdentifier): string {
        return `${this.getProjectPath()}/items/${identifier.getParamValue()}`;
    }

    upsertContentItem(identifier: Identifiers.ContentItemIdentifier): string {
        return `${this.getProjectPath()}/items/${identifier.getParamValue()}`;
    }

    deleteContentItem(identifier: Identifiers.ContentItemIdentifier): string {
        return `${this.getProjectPath()}/items/${identifier.getParamValue()}`;
    }

    listLanguageVariantsOfItem(identifier: Identifiers.ContentItemIdentifier): string {
        return `${this.getProjectPath()}/items/${identifier.getParamValue()}/variants`;
    }

    listLanguageVariantsOfContentType(identifier: Identifiers.ContentTypeIdentifier): string {
        return `${this.getProjectPath()}/types/${identifier.getParamValue()}/variants`;
    }

    listLanguageVariantsByCollection(identifier: Identifiers.CollectionIdentifier): string {
        return `${this.getProjectPath()}/collections/${identifier.getParamValue()}/variants`;
    }

    listLanguageVariantsOfContentTypeWithComponents(identifier: Identifiers.ContentTypeIdentifier): string {
        return `${this.getProjectPath()}/types/${identifier.getParamValue()}/components`;
    }

    deleteLanguageVariant(
        itemIdentifier: Identifiers.ContentItemIdentifier,
        langaugeIdentifier: Identifiers.LanguageIdentifier
    ): string {
        return `${this.getProjectPath()}/items/${itemIdentifier.getParamValue()}/variants/${langaugeIdentifier.getParamValue()}`;
    }

    viewOrUpsertLanguageVariant(
        itemIdentifier: Identifiers.ContentItemIdentifier,
        langaugeIdentifier: Identifiers.LanguageIdentifier
    ): string {
        return `${this.getProjectPath()}/items/${itemIdentifier.getParamValue()}/variants/${langaugeIdentifier.getParamValue()}`;
    }

    viewLanguage(identifier: Identifiers.LanguageIdentifier): string {
        return `${this.getProjectPath()}/languages/${identifier.getParamValue()}`;
    }

    addLanguage(): string {
        return `${this.getProjectPath()}/languages`;
    }

    modifyLanguage(identifier: Identifiers.LanguageIdentifier): string {
        return `${this.getProjectPath()}/languages/${identifier.getParamValue()}`;
    }

    listLanguages(): string {
        return `${this.getProjectPath()}/languages`;
    }

    deleteWebhook(identifier: Identifiers.WebhookIdentifier): string {
        return `${this.getProjectPath()}/webhooks/${identifier.getParamValue()}`;
    }

    getWebhook(identifier: Identifiers.WebhookIdentifier): string {
        return `${this.getProjectPath()}/webhooks/${identifier.getParamValue()}`;
    }

    addWebhook(): string {
        return `${this.getProjectPath()}/webhooks`;
    }

    enableWebhook(identifier: Identifiers.WebhookIdentifier): string {
        return `${this.getProjectPath()}/webhooks/${identifier.getParamValue()}/enable`;
    }

    disableWebhook(identifier: Identifiers.WebhookIdentifier): string {
        return `${this.getProjectPath()}/webhooks/${identifier.getParamValue()}/disable`;
    }

    listWebhooks(): string {
        return `${this.getProjectPath()}/webhooks`;
    }

    listAssetFolders(): string {
        return `${this.getProjectPath()}/folders`;
    }

    addAssetFolders(): string {
        return `${this.getProjectPath()}/folders`;
    }

    modifyAssetFolders(): string {
        return `${this.getProjectPath()}/folders`;
    }

    listCollections(): string {
        return `${this.getProjectPath()}/collections`;
    }

    setCollections(): string {
        return `${this.getProjectPath()}/collections`;
    }

    listSubscriptionProjects(): string {
        return `${this.getSubscriptionPath()}/projects`;
    }

    listSubscriptionUsers(): string {
        return `${this.getSubscriptionPath()}/users`;
    }

    viewSubscriptionProject(identifier: Identifiers.ProjectIdentifier): string {
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
        return `${this.getProjectPath()}/roles`;
    }

    inviteProjectUser(): string {
        return `${this.getProjectPath()}/users`;
    }

    changeProjectUserRoles(identifier: Identifiers.UserIdentifier): string {
        return `${this.getProjectPath()}/users/${identifier.getParamValue()}/roles`;
    }

    private getProjectPath(): string {
        if (!this.projectId) {
            throw Error(`ProjectId was not provided in client configuration`);
        }
        return `${this.projectsPath}/${this.projectId}`;
    }

    private getSubscriptionPath(): string {
        if (!this.subscriptionId) {
            throw Error(`SubscriptionId was not provided in client configuration`);
        }
        return `${this.subscriptionsPath}/${this.subscriptionId}`;
    }
}
