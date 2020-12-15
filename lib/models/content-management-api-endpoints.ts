import { Identifiers } from './identifiers';


export class ContentManagementApiEndpoints {

    changeWorkflowStepOfLanguageVariant(itemIdentifier: Identifiers.ContentItemIdentifier, languageIdentifier: Identifiers.LanguageIdentifier, workflowIdentifier: Identifiers.WorkflowIdentifier): string {
        return `items/${itemIdentifier.getParamValue()}/variants/${languageIdentifier.getParamValue()}/workflow/${workflowIdentifier.getParamValue()}`;
    }

    publishLaguageVariant(itemIdentifier: Identifiers.ContentItemIdentifier, languageIdentifier: Identifiers.LanguageIdentifier): string {
        return `items/${itemIdentifier.getParamValue()}/variants/${languageIdentifier.getParamValue()}/publish`;
    }

    createNewVersionOfALanguageVariant(itemIdentifier: Identifiers.ContentItemIdentifier, languageIdentifier: Identifiers.LanguageIdentifier): string {
        return `items/${itemIdentifier.getParamValue()}/variants/${languageIdentifier.getParamValue()}/new-version`;
    }

    unpublishLanguageVariant(itemIdentifier: Identifiers.ContentItemIdentifier, languageIdentifier: Identifiers.LanguageIdentifier): string {
        return `items/${itemIdentifier.getParamValue()}/variants/${languageIdentifier.getParamValue()}/unpublish-and-archive`;
    }

    cancelScheduledPublishingOfLanguageVariant(itemIdentifier: Identifiers.ContentItemIdentifier, languageIdentifier: Identifiers.LanguageIdentifier): string {
        return `items/${itemIdentifier.getParamValue()}/variants/${languageIdentifier.getParamValue()}/cancel-scheduled-publish`;
    }

    cancelScheduledUnpublishingOfLanguageVariant(itemIdentifier: Identifiers.ContentItemIdentifier, languageIdentifier: Identifiers.LanguageIdentifier): string {
        return `items/${itemIdentifier.getParamValue()}/variants/${languageIdentifier.getParamValue()}/cancel-scheduled-unpublish`;
    }

    listWorkflowSteps(): string {
        return `workflow`;
    }

    listContentTypeSnippets(): string {
        return `snippets`;
    }

    viewContentTypeSnippet(identifier: Identifiers.ContentTypeIdentifier): string {
        return `snippets/${identifier.getParamValue()}`;
    }

    addContentTypeSnippet(): string {
        return `snippets`;
    }

    deleteContentTypeSnippet(identifier: Identifiers.ContentTypeIdentifier): string {
        return `snippets/${identifier.getParamValue()}`;
    }

    modifyContentTypeSnippet(identifier: Identifiers.ContentTypeIdentifier): string {
        return `snippets/${identifier.getParamValue()}`;
    }

    validateProjectContent(): string {
        return `validate`;
    }

    projectInformation(): string {
        return ``;
    }

    listContentTypes(): string {
        return `types`;
    }

    addContentType(): string {
        return `types`;
    }

    deleteContentType(identifier: Identifiers.ContentTypeIdentifier): string {
        return `types/${identifier.getParamValue()}`;
    }

    viewContentType(identifier: Identifiers.ContentTypeIdentifier): string {
        return `types/${identifier.getParamValue()}`;
    }

    modifyContentType(identifier: Identifiers.ContentTypeIdentifier): string {
        return `types/${identifier.getParamValue()}`;
    }

    addTaxonomy(): string {
        return `taxonomies`;
    }

    modifyTaxonomy(identifier: Identifiers.TaxonomyIdentifier): string {
        return `taxonomies/${identifier.getParamValue()}`;
    }

    deleteTaxonomy(identifier: Identifiers.TaxonomyIdentifier): string {
        return `taxonomies/${identifier.getParamValue()}`;
    }

    listTaxonomies(): string {
        return `taxonomies`;
    }

    getTaxonomy(identifier: Identifiers.TaxonomyIdentifier): string {
        return `taxonomies/${identifier.getParamValue()}`;
    }

    addAsset(): string {
        return `assets`;
    }

    deleteAsset(identifier: Identifiers.AssetIdentifier): string {
        return `assets/${identifier.getParamValue()}`;
    }

    upsertAsset(assetIdentifier: Identifiers.AssetIdentifier): string {
        return `assets/${assetIdentifier.getParamValue()}`;
    }

    uploadBinaryFile(filename: string): string {
        return `files/${filename}`;
    }

    listAssets(): string {
        return 'assets';
    }

    viewAsset(identifier: Identifiers.AssetIdentifier): string {
        return `assets/${identifier.getParamValue()}`;
    }

    items(): string {
        return 'items';
    }

    viewContentItem(identifier: Identifiers.ContentItemIdentifier): string {
        return `items/${identifier.getParamValue()}`;
    }

    addContentItem(): string {
        return `items`;
    }

    updateContentItem(identifier: Identifiers.ContentItemIdentifier): string {
        return `items/${identifier.getParamValue()}`;
    }

    upsertContentItem(identifier: Identifiers.ContentItemIdentifier): string {
        return `items/${identifier.getParamValue()}`;
    }

    deleteContentItem(identifier: Identifiers.ContentItemIdentifier): string {
        return `items/${identifier.getParamValue()}`;
    }

    listLanguageVariantsOfItem(identifier: Identifiers.ContentItemIdentifier): string {
        return `items/${identifier.getParamValue()}/variants`;
    }

    listLanguageVariantsOfContentType(identifier: Identifiers.ContentTypeIdentifier): string {
        return `types/${identifier.getParamValue()}/variants`;
    }

    listLanguageVariantsOfContentTypeWithComponents(identifier: Identifiers.ContentTypeIdentifier): string {
        return `types/${identifier.getParamValue()}/components`;
    }

    deleteLanguageVariant(itemIdentifier: Identifiers.ContentItemIdentifier, langaugeIdentifier: Identifiers.LanguageIdentifier): string {
        return `items/${itemIdentifier.getParamValue()}/variants/${langaugeIdentifier.getParamValue()}`;
    }

    viewOrUpsertLanguageVariant(itemIdentifier: Identifiers.ContentItemIdentifier, langaugeIdentifier: Identifiers.LanguageIdentifier): string {
        return `items/${itemIdentifier.getParamValue()}/variants/${langaugeIdentifier.getParamValue()}`;
    }

    viewLanguage(identifier: Identifiers.LanguageIdentifier): string {
        return `languages/${identifier.getParamValue()}`;
    }

    addLanguage(): string {
        return `languages`;
    }

    modifyLanguage(identifier: Identifiers.LanguageIdentifier): string {
        return `languages/${identifier.getParamValue()}`;
    }

    listLanguages(): string {
        return `languages`;
    }

    deleteWebhook(identifier: Identifiers.WebhookIdentifier): string {
        return `webhooks/${identifier.getParamValue()}`;
    }

    getWebhook(identifier: Identifiers.WebhookIdentifier): string {
        return `webhooks/${identifier.getParamValue()}`;
    }

    addWebhook(): string {
        return `webhooks`;
    }

    listWebhooks(): string {
        return `webhooks`;
    }

    listAssetFolders(): string {
        return 'folders';
    }

    addAssetFolders(): string {
        return 'folders';
    }

    modifyAssetFolders(): string {
        return 'folders';
    }

}

export const contentManagementApiEndpoints = new ContentManagementApiEndpoints();
