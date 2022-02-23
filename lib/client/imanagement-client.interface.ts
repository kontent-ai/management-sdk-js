import { IHttpCancelRequestToken } from '@kentico/kontent-core';
import { ContentItemContracts } from '../contracts';
import {
    AssetFolderModels,
    AssetModels,
    CollectionModels,
    ContentTypeElementsBuilder,
    ContentTypeModels,
    ContentTypeSnippetElements,
    ContentTypeSnippetModels,
    LanguageModels,
    LanguageVariantElements,
    LanguageVariantElementsBuilder,
    ProjectUserModels,
    TaxonomyModels,
    WebhookModels,
    WorkflowModels
} from '../models';
import {
    ViewSubscriptionUserQuery,
    ActionQuery,
    AddAssetFoldersQuery,
    AddAssetQuery,
    AddContentItemQuery,
    AddContentTypeQuery,
    AddContentTypeSnippetQuery,
    AddLanguageQuery,
    AddTaxonomyQuery,
    AddWebhookQuery,
    AssetIdentifierQueryClass,
    CancelScheduledPublishingOfLanguageVariantQuery,
    CancelScheduledUnpublishingOfLanguageVariantQuery,
    ChangeWorkflowStepOfLanguageOrVariantQuery,
    ContentItemIdentifierQuery,
    ContentTypeCodenameAndIdIdentifierQuery,
    ContentTypeIdentifierQuery,
    CreateNewVersionOfLanguageVariantQuery,
    DataQuery,
    DataQueryOptional,
    DeleteAssetQuery,
    DeleteContentItemQuery,
    DeleteContentTypeQuery,
    DeleteContentTypeSnippetQuery,
    DeleteLanguageVariantQuery,
    DeleteQuery,
    DeleteTaxonomyQuery,
    DeleteWebhookQuery,
    GetQuery,
    GetTaxonomyQuery,
    GetWebhookQuery,
    LanguageIdAndCodenameIdentifierQuery,
    LanguageIdentifierQuery,
    ListAssetFoldersQuery,
    ListAssetsQuery,
    ListContentItemsQuery,
    ListContentTypeSnippetsQuery,
    ListContentTypesQuery,
    ListLanguagesQuery,
    ListLanguageVariantsOfContentTypeQuery,
    ListLanguageVariantsOfContentTypeWithComponentsQuery,
    ListLanguageVariantsOfItemQuery,
    ListTaxonomiesQuery,
    ListWebhooksQuery,
    ListWorkflowStepsQuery,
    ModifyAssetFoldersQuery,
    ModifyContentTypeQuery,
    ModifyContentTypeSnippetQuery,
    ModifyLanguageQuery,
    ModifyTaxonomyQuery,
    PatchQuery,
    PostQuery,
    ProjectIdentifierQuery,
    ProjectInformationQuery,
    PublishLanguageVariantQuery,
    PutQuery,
    TaxonomyIdentifierQuery,
    UnpublishLanguageVariantQuery,
    UpdateContentItemQuery,
    UploadBinaryFileQuery,
    UpsertAssetQuery,
    UpsertContentItemQuery,
    UpsertLanguageVariantQuery,
    ValidateProjectContentQuery,
    ViewAssetsQuery,
    ViewContentItemQuery,
    ViewContentTypeQuery,
    ViewContentTypeSnippetQuery,
    ViewLanguageQuery,
    ViewLanguageVariantQuery,
    WebhookIdentifierQuery,
    WorkflowStepIdentifierQuery,
    EnableWebhookQuery,
    DisableWebhookQuery,
    ListCollectionsQuery,
    CollectionIdentifierQuery,
    ListLanguageVariantsByCollectionQuery,
    SetCollectionsQuery,
    UploadAssetFromUrlQuery,
    ListSubscriptionProjectsQuery,
    ViewSubscriptionProjectQuery,
    ListSubscriptionUsersQuery,
    UserIdentifierQuery,
    ActivateUserInAllProjectsQuery,
    DeactivateUserInAllProjectsQuery,
    ListRolesQuery,
    InviteProjectUserQuery,
    ChangeUserRolesQuery,
    RoleIdentifierQuery,
    ViewRoleQuery
} from '../queries';
import { IMappingService } from '../services';
import { GetEnvironmentCloningStateQuery } from '../queries/environments';
import { DeleteEnvironmentQuery } from '../queries/environments/delete-environment-query';
import { RenameEnvironmentQuery } from '../queries/environments/rename-environment-query';
import { EnvironmentModels } from '../models/environments/environments.model';
import { CloneEnvironmentQuery } from '../queries/environments/clone-environment-query';
import { MarkEnvironmentAsProductionQuery } from '../queries/environments/mark-environment-as-production-query';

export interface IManagementClient<TCancelToken> {
    mappingService: IMappingService;

    /**
     * Creates cancel token
     */
    createCancelToken(): IHttpCancelRequestToken<TCancelToken>;

    /**
     * Custom post query
     */
    post(): ActionQuery<DataQuery<PostQuery, any>>;

    /**
     * Custom post query
     */
    patch(): ActionQuery<DataQuery<PatchQuery, any>>;

    /**
     * Custom post query
     */
    delete(): ActionQuery<DeleteQuery>;

    /**
     * Custom get query
     */
    get(): ActionQuery<GetQuery>;

    /**
     * Custom put query
     */
    put(): ActionQuery<DataQuery<PutQuery, any>>;

    /**
     * Create a new version of a published language variant while keeping the original version published and available through Delivery API. Equivalent to the UI action of creating new versions of content.
     */
    createNewVersionOfLanguageVariant(): ContentItemIdentifierQuery<
        LanguageIdAndCodenameIdentifierQuery<CreateNewVersionOfLanguageVariantQuery>
    >;

    /**
     * Unpublish a language variant to make it no longer accessible through Delivery API. Equivalent to the UI action of unpublishing content.
     * You can only unpublish language variants that are published and don't already have a Draft (unpublished) version.
     */
    unpublishLanguageVariant(): ContentItemIdentifierQuery<
        LanguageIdAndCodenameIdentifierQuery<
            DataQueryOptional<UnpublishLanguageVariantQuery, WorkflowModels.IUnpublishLanguageVarianthData>
        >
    >;

    /**
     * Cancel scheduled unpublishing of the specified language variant.
     */
    cancelSheduledUnpublishingOfLanguageVariant(): ContentItemIdentifierQuery<
        LanguageIdAndCodenameIdentifierQuery<CancelScheduledUnpublishingOfLanguageVariantQuery>
    >;

    /**
     * Cancel scheduling of a language variant. Equivalent to the UI action of canceling scheduled content. If the language variant is not scheduled, nothing happens.
     */
    cancelSheduledPublishingOfLanguageVariant(): ContentItemIdentifierQuery<
        LanguageIdAndCodenameIdentifierQuery<CancelScheduledPublishingOfLanguageVariantQuery>
    >;

    /**
     * Change the workflow of the specified language variant to the specified workflow step. Equivalent to the UI operation of updating workflow.
     */
    changeWorkflowStepOfLanguageVariant(): ContentItemIdentifierQuery<
        LanguageIdAndCodenameIdentifierQuery<WorkflowStepIdentifierQuery<ChangeWorkflowStepOfLanguageOrVariantQuery>>
    >;

    /**
     * Change the workflow step of the specified language variant to "Published" or schedule publishing at the specified time.
     */
    publishLanguageVariant(): ContentItemIdentifierQuery<
        LanguageIdAndCodenameIdentifierQuery<
            DataQueryOptional<PublishLanguageVariantQuery, WorkflowModels.IPublishLanguageVariantData>
        >
    >;

    /**
     * Query to list all workflow steps in project
     */
    listWorkflowSteps(): ListWorkflowStepsQuery;

    /**
     * Query to view content type snippet
     */
    viewContentTypeSnippet(): ContentTypeIdentifierQuery<ViewContentTypeSnippetQuery>;

    /**
     * Query to list content types
     */
    listContentTypeSnippets(): ListContentTypeSnippetsQuery;

    /**
     * Query to delete content type snippet
     */
    deleteContentTypeSnippet(): ContentTypeIdentifierQuery<DeleteContentTypeSnippetQuery>;

    /**
     * Query to add new content type snippet
     */
    addContentTypeSnippet(): DataQuery<
        AddContentTypeSnippetQuery,
        (builder: ContentTypeSnippetElements) => ContentTypeSnippetModels.IAddContentTypeSnippetData
    >;

    /**
     * Query to modify content type
     */
    modifyContentType(): ContentTypeIdentifierQuery<
        DataQuery<ModifyContentTypeQuery, ContentTypeModels.IModifyContentTypeData[]>
    >;

    /**
     * Query to modify taxonomy
     */
    modifyTaxonomy(): TaxonomyIdentifierQuery<DataQuery<ModifyTaxonomyQuery, TaxonomyModels.IModifyTaxonomyData[]>>;

    /**
     * Query to modify content type snippet
     */
    modifyContentTypeSnippet(): ContentTypeIdentifierQuery<
        DataQuery<ModifyContentTypeSnippetQuery, ContentTypeSnippetModels.IModifyContentTypeSnippetData[]>
    >;

    /**
     * Query to view language variant
     */
    viewLanguageVariant(): ContentItemIdentifierQuery<LanguageIdAndCodenameIdentifierQuery<ViewLanguageVariantQuery>>;

    /**
     * Query to upsert language variant
     */
    upsertLanguageVariant(): ContentItemIdentifierQuery<
        LanguageIdAndCodenameIdentifierQuery<
            DataQuery<
                UpsertLanguageVariantQuery,
                (builder: LanguageVariantElementsBuilder) => LanguageVariantElements.ILanguageVariantElementBase[]
            >
        >
    >;

    /**
     * Query to delete language variant
     */
    deleteLanguageVariant(): ContentItemIdentifierQuery<
        LanguageIdAndCodenameIdentifierQuery<DeleteLanguageVariantQuery>
    >;

    /**
     * Query to validate project content
     */
    validateProjectContent(): ProjectIdentifierQuery<ValidateProjectContentQuery>;

    /**
     * Query to delete content type
     */
    deleteContentType(): ContentTypeIdentifierQuery<DeleteContentTypeQuery>;

    /**
     * Query to add new content type
     */
    addContentType(): DataQuery<
        AddContentTypeQuery,
        (builder: ContentTypeElementsBuilder) => ContentTypeModels.IAddContentTypeData
    >;

    /**
     * Query to view content type
     */
    viewContentType(): ContentTypeIdentifierQuery<ViewContentTypeQuery>;

    /**
     * Query to list content types
     */
    listContentTypes(): ListContentTypesQuery;

    /**
     * Query to delete a taxonomy
     */
    deleteTaxonomy(): TaxonomyIdentifierQuery<DeleteTaxonomyQuery>;

    /**
     * Query to add a taxonomy
     */
    addTaxonomy(): DataQuery<AddTaxonomyQuery, TaxonomyModels.IAddTaxonomyRequestModel>;

    /**
     * Query to list taxonomies
     */
    listTaxonomies(): ListTaxonomiesQuery;

    /**
     * Query to view taxonomy
     */
    getTaxonomy(): TaxonomyIdentifierQuery<GetTaxonomyQuery>;

    /**
     * Query to delete an asset
     */
    deleteAsset(): AssetIdentifierQueryClass<DeleteAssetQuery>;

    /**
     * Query to upsert an asset from uploaded binary file
     */
    upsertAsset(): AssetIdentifierQueryClass<DataQuery<UpsertAssetQuery, AssetModels.IUpsertAssetRequestData>>;

    /**
     * Query to add an asset from uploaded binary file
     */
    addAsset(): DataQuery<AddAssetQuery, AssetModels.IAddAssetRequestData>;

    /**
     * Query to upload file
     */
    uploadBinaryFile(): DataQuery<UploadBinaryFileQuery, AssetModels.IUploadBinaryFileRequestData>;

    /**
     * Query to view asset
     */
    viewAsset(): AssetIdentifierQueryClass<ViewAssetsQuery>;

    /**
     * Query for listing assets
     */
    listAssets(): ListAssetsQuery;

    /**
     * List of content items query
     */
    listContentItems(): ListContentItemsQuery;

    /**
     * View content item query
     */
    viewContentItem(): ContentItemIdentifierQuery<ViewContentItemQuery>;

    /**
     * Add content item query
     */
    addContentItem(): DataQuery<AddContentItemQuery, ContentItemContracts.IAddContentItemPostContract>;

    /**
     * Update content item query
     */
    updateContentItem(): ContentItemIdentifierQuery<
        DataQuery<UpdateContentItemQuery, ContentItemContracts.IUpdateContentItemPostContract>
    >;

    /**
     * Upsert content item query
     */
    upsertContentItem(): ContentItemIdentifierQuery<
        DataQuery<UpsertContentItemQuery, ContentItemContracts.IUpsertContentItemPostContract>
    >;

    /**
     * Delete content item query
     */
    deleteContentItem(): ContentItemIdentifierQuery<DeleteContentItemQuery>;

    /**
     * List language variants of a specific content item query
     */
    listLanguageVariantsOfItem(): ContentItemIdentifierQuery<ListLanguageVariantsOfItemQuery>;

    /**
     * List language variants of a specific content type query
     */
    listLanguageVariantsOfContentType(): ContentTypeCodenameAndIdIdentifierQuery<ListLanguageVariantsOfContentTypeQuery>;

    /**
     * List language variants of a specific content type with components
     */
    listLanguageVariantsOfContentTypeWithComponents(): ContentTypeCodenameAndIdIdentifierQuery<ListLanguageVariantsOfContentTypeWithComponentsQuery>;

    /**
     * List languages in project
     */
    listLanguages(): ListLanguagesQuery;

    /**
     * View language
     */
    viewLanguage(): LanguageIdentifierQuery<ViewLanguageQuery>;

    /**
     * Adds new language
     */
    addLanguage(): DataQuery<AddLanguageQuery, LanguageModels.IAddLanguageData>;

    /**
     * Modifies existing language
     */
    modifyLanguage(): LanguageIdentifierQuery<DataQuery<ModifyLanguageQuery, LanguageModels.IModifyLanguageData[]>>;

    /**
     * Delete a webhook
     */
    deleteWebhook(): WebhookIdentifierQuery<DeleteWebhookQuery>;

    /**
     * Adds new webhook
     */
    addWebhook(): DataQuery<AddWebhookQuery, WebhookModels.IAddWebhookData>;

    /**
     * Gets single webhook
     */
    getWebhook(): WebhookIdentifierQuery<GetWebhookQuery>;

    /**
     * Enables webhook
     */
    enableWebhook(): WebhookIdentifierQuery<EnableWebhookQuery>;

    /**
     * Disables webhook
     */
    disableWebhook(): WebhookIdentifierQuery<DisableWebhookQuery>;

    /**
     * Gets all webhooks
     */
    listWebhooks(): ListWebhooksQuery;

    /**
     * Query to get project information
     */
    projectInformation(): ProjectInformationQuery;

    /**
     * Query to list asset folders
     */
    listAssetFolders(): ListAssetFoldersQuery;

    /**
     * Query to add asset folders
     */
    addAssetFolders(): DataQuery<AddAssetFoldersQuery, AssetFolderModels.IAddAssetFoldersData>;

    /**
     * Query to modify asset folders
     */
    modifyAssetFolders(): DataQuery<ModifyAssetFoldersQuery, AssetFolderModels.IModifyAssetFoldersData[]>;

    /**
     * Query to list collections
     */
    listCollections(): ListCollectionsQuery;

    /**
     * Query to list language variants of given collection
     */
    listLanguageVariantsByCollection(): CollectionIdentifierQuery<ListLanguageVariantsByCollectionQuery>;

    /**
     * Query to set collections
     */
    setCollections(): DataQuery<SetCollectionsQuery, CollectionModels.ISetCollectionData[]>;

    /**
     * Helper methods that uploads file from url, creates binary file & asset in one go
     */
    uploadAssetFromUrl(): DataQuery<UploadAssetFromUrlQuery, AssetModels.IUploadAssetFromUrlRequestData>;

    /**
     * Creates edit urls according to https://docs.kontent.ai/tutorials/develop-apps/build-strong-foundation/set-up-editing-from-preview
     */
    createLanguageVariantEditUrl(data: {
        variantId: string;
        languageCodename: string;
        elementCodename?: string;
        nestedItemId?: string;
        nestedItemElementCodename?: string;
    }): string;

    /**
     * Query to list projects in given subscription
     */
    listSubscriptionProjects(): ListSubscriptionProjectsQuery;

    /**
     * View subscription project
     */
    viewSubscriptionProject(): ProjectIdentifierQuery<ViewSubscriptionProjectQuery>;

    /**
     * View subscription users
     */
    listSubscriptionUsers(): ListSubscriptionUsersQuery;

    /**
     * View subscription user
     */
    viewSubscriptionUser(): UserIdentifierQuery<ViewSubscriptionUserQuery>;

    /**
     * Activates user in all projects
     */
    activateUserInAllProjects(): UserIdentifierQuery<ActivateUserInAllProjectsQuery>;

    /**
     * Deactivates user in all projects
     */
    deactivateUserInAllProjects(): UserIdentifierQuery<DeactivateUserInAllProjectsQuery>;

    /**
     * List roles
     */
    listRoles(): ListRolesQuery;

    /**
     * Invites specified user to Kontent project
     */
    inviteUser(): DataQuery<InviteProjectUserQuery, ProjectUserModels.IInviteUserData>;

    /**
     * Changes roles of a specified user
     */
    changeUserRoles(): UserIdentifierQuery<DataQuery<ChangeUserRolesQuery, ProjectUserModels.IChangeUserRoleData>>;

    /**
     * View role
     */
    viewRole(): RoleIdentifierQuery<ViewRoleQuery>;

    /**
     * Get cloning state of the environment
     */
    getEnvironmentCloningState(): GetEnvironmentCloningStateQuery;

    /**
     * Delete environment
     */
    deleteEnvironment(): DeleteEnvironmentQuery;

    /**
     * Rename environment
     */
    renameEnvironment(): DataQuery<RenameEnvironmentQuery, EnvironmentModels.IRenameEnvironmentData[]>;

    /**
     * Clone environment
     */
    cloneEnvironment(): DataQuery<CloneEnvironmentQuery, EnvironmentModels.ICloneEnvironmentData>;

    /**
     * Mark environment as production
     */
    markEnvironmentAsProduction(): DataQuery<MarkEnvironmentAsProductionQuery, EnvironmentModels.IMarkEnvironmentAsProductionData>;
}
