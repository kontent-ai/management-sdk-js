import { IHttpCancelRequestToken } from '@kontent-ai/core-sdk';
import { ContentItemContracts, LanguageVariantContracts } from '../contracts';
import {
    AssetElementsBuilder,
    AssetFolderModels,
    AssetModels,
    AssetRenditionModels,
    CollectionModels,
    ContentTypeElementsBuilder,
    ContentTypeModels,
    ContentTypeSnippetElements,
    ContentTypeSnippetModels,
    LanguageModels,
    LanguageVariantElementsBuilder,
    PreviewModels,
    ProjectUserModels,
    SpaceModels,
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
    AddSpaceQuery,
    AddTaxonomyQuery,
    AddLegacyWebhookQuery,
    AddWebhookQuery,
    AssetIdentifierQuery,
    CancelScheduledPublishingOfLanguageVariantQuery,
    CancelScheduledUnpublishingOfLanguageVariantQuery,
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
    DeleteSpaceQuery,
    DeleteQuery,
    DeleteTaxonomyQuery,
    DeleteWebhookQuery,
    DeleteLegacyWebhookQuery,
    GetQuery,
    GetTaxonomyQuery,
    GetWebhookQuery,
    GetLegacyWebhookQuery,
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
    ListLanguageVariantsBySpaceQuery,
    ListSpacesQuery,
    ListTaxonomiesQuery,
    ListLegacyWebhooksQuery,
    ListWebhooksQuery,
    ModifyAssetFoldersQuery,
    ModifyContentTypeQuery,
    ModifyContentTypeSnippetQuery,
    ModifyLanguageQuery,
    ModifySpaceQuery,
    ModifyTaxonomyQuery,
    PatchQuery,
    PostQuery,
    EnvironmentIdentifierQuery,
    EnvironmentInformationQuery,
    PublishLanguageVariantQuery,
    PutQuery,
    SpaceIdentifierQuery,
    TaxonomyIdentifierQuery,
    UnpublishLanguageVariantQuery,
    UpdateContentItemQuery,
    UploadBinaryFileQuery,
    UpsertAssetQuery,
    UpsertContentItemQuery,
    UpsertLanguageVariantQuery,
    ViewAssetsQuery,
    ViewContentItemQuery,
    ViewContentTypeQuery,
    ViewContentTypeSnippetQuery,
    ViewLanguageQuery,
    ViewLanguageVariantQuery,
    ViewSpaceQuery,
    WebhookIdentifierQuery,
    EnableLegacyWebhookQuery,
    EnableWebhookQuery,
    DisableLegacyWebhookQuery,
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
    ViewRoleQuery,
    ListAssetRenditionsQuery,
    AddAssetRenditionQuery,
    ModifyAssetRenditionQuery,
    RenditionIdentifierQuery,
    ViewAssetRenditionQuery,
    ChangeWorkflowOfLanguageOrVariantQuery,
    ListWorkflowsQuery,
    WorkflowIdentifierQuery,
    DeleteWorkflowQuery,
    AddWorkflowQuery,
    UpdateWorkflowQuery,
    StartEnvironmentValidationQuery,
    TaskIdentifierQuery,
    CheckEnvironmentValidationQuery,
    ListEnvironmentValidationIssuesQuery,
    GetPreviewConfigurationQuery,
    ModifyPreviewConfigurationQuery
} from '../queries';
import { IMappingService } from '../services';
import { GetEnvironmentCloningStateQuery } from '../queries/environments';
import { DeleteEnvironmentQuery } from '../queries/environments/delete-environment-query';
import { EnvironmentModels } from '../models/environments/environment.models';
import { CloneEnvironmentQuery } from '../queries/environments/clone-environment-query';
import { MarkEnvironmentAsProductionQuery } from '../queries/environments/mark-environment-as-production-query';
import { ModifyEnvironmentQuery } from '../queries/environments/modify-environment-query';

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
     * The Management API ignores the workflow transition limitations present in the UI. This means you can change the workflow step of the language variant from any step to any other step excluding Published or Scheduled.
     */
    changeWorkflowOfLanguageVariant(): ContentItemIdentifierQuery<
        LanguageIdAndCodenameIdentifierQuery<
            DataQuery<ChangeWorkflowOfLanguageOrVariantQuery, WorkflowModels.IChangeWorkflowOfLanguageVariantData>
        >
    >;

    /**
     * Lists all workflows in environment
     */
    listWorkflows(): ListWorkflowsQuery;

    /**
     * Deletes an unused workflow from your environment.
     */
    deleteWorkflow(): WorkflowIdentifierQuery<DeleteWorkflowQuery>;

    /**
     * Updates workflow
     */
    updateWorkflow(): WorkflowIdentifierQuery<DataQuery<UpdateWorkflowQuery, WorkflowModels.IUpdateWorkflowData>>;

    /**
     * Create a new workflow.
     */
    addWorkflow(): DataQuery<AddWorkflowQuery, WorkflowModels.IAddWorkflowData>;

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
     * Change the workflow step of the specified language variant to "Published" or schedule publishing at the specified time.
     */
    publishLanguageVariant(): ContentItemIdentifierQuery<
        LanguageIdAndCodenameIdentifierQuery<
            DataQueryOptional<PublishLanguageVariantQuery, WorkflowModels.IPublishLanguageVariantData>
        >
    >;

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
                (builder: LanguageVariantElementsBuilder) => LanguageVariantContracts.IUpsertLanguageVariantPostContract
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
     * Starts validating the specified environment to check for issues such as:
     * - Nonexistent objects referenced in content items.
     * - Content element values don't meet the limitations configured in content types.
     * - Content types referencing nonexistent taxonomy groups.
     * Depending on the size of your environment, the validation might take several minutes.
     * After you start the environment validation, you get a validation task.
     * With the validation task, you can check validation progress and list validation results once the validation is finished.
     */
    startEnvironmentValidation(): StartEnvironmentValidationQuery;

    /**
     * Retrieves information about a environment validation task by the task's internal ID.
     */
    checkEnvironmentValidation(): TaskIdentifierQuery<CheckEnvironmentValidationQuery>;

    /**
     * Retrieves a paginated list of environment validation issues.
     */
    listEnvironmentValidationIssues(): TaskIdentifierQuery<ListEnvironmentValidationIssuesQuery>;

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
    deleteAsset(): AssetIdentifierQuery<DeleteAssetQuery>;

    /**
     * Query to upsert an asset from uploaded binary file
     */
    upsertAsset(): AssetIdentifierQuery<
        DataQuery<UpsertAssetQuery, (builder: AssetElementsBuilder) => AssetModels.IUpsertAssetRequestData>
    >;

    /**
     * Query to add an asset from uploaded binary file
     */
    addAsset(): DataQuery<AddAssetQuery, (builder: AssetElementsBuilder) => AssetModels.IAddAssetRequestData>;

    /**
     * Query to upload file
     */
    uploadBinaryFile(): DataQuery<UploadBinaryFileQuery, AssetModels.IUploadBinaryFileRequestData>;

    /**
     * Query to view asset
     */
    viewAsset(): AssetIdentifierQuery<ViewAssetsQuery>;

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
     * List languages in environment
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
     * Delete a legacy webhook
     */
    deleteLegacyWebhook(): WebhookIdentifierQuery<DeleteLegacyWebhookQuery>;

    /**
     * Adds new legacy webhook
     */
    addLegacyWebhook(): DataQuery<AddLegacyWebhookQuery, WebhookModels.IAddLegacyWebhookData>;

    /**
     * Gets single legacy webhook
     */
    getLegacyWebhook(): WebhookIdentifierQuery<GetLegacyWebhookQuery>;

    /**
     * Enableslegacy webhook
     */
    enableLegacyWebhook(): WebhookIdentifierQuery<EnableLegacyWebhookQuery>;

    /**
     * Disables legacy webhook
     */
    disableLegacyWebhook(): WebhookIdentifierQuery<DisableLegacyWebhookQuery>;

    /**
     * Gets all legacy webhooks
     */
    listLegacyWebhooks(): ListLegacyWebhooksQuery;

    /**
     * Query to get environment information
     */
    environmentInformation(): EnvironmentInformationQuery;

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
    modifyAssetFolders(): DataQuery<ModifyAssetFoldersQuery, AssetFolderModels.IModifyAssetFolderData[]>;

    /**
     * Query to list collections
     */
    listCollections(): ListCollectionsQuery;

    /**
     * Query to list language variants of given collection
     */
    listLanguageVariantsByCollection(): CollectionIdentifierQuery<ListLanguageVariantsByCollectionQuery>;

    /**
     * Query to list language variants of given space
     */
    listLanguageVariantsBySpace(): SpaceIdentifierQuery<ListLanguageVariantsBySpaceQuery>;

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
    viewSubscriptionProject(): EnvironmentIdentifierQuery<ViewSubscriptionProjectQuery>;

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
     * Invites specified user to Kontent.ai project
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
     * Modify environment
     */
    modifyEnvironment(): DataQuery<ModifyEnvironmentQuery, EnvironmentModels.IModifyEnvironmentData[]>;

    /**
     * Clone environment
     */
    cloneEnvironment(): DataQuery<CloneEnvironmentQuery, EnvironmentModels.ICloneEnvironmentData>;

    /**
     * Mark environment as production
     */
    markEnvironmentAsProduction(): DataQuery<
        MarkEnvironmentAsProductionQuery,
        EnvironmentModels.IMarkEnvironmentAsProductionData
    >;

    /**
     * List asset renditions of given asset
     */
    listAssetRenditions(): AssetIdentifierQuery<ListAssetRenditionsQuery>;

    /**
     * Adds rendition to given asset
     */
    addAssetRendition(): AssetIdentifierQuery<
        DataQuery<AddAssetRenditionQuery, AssetRenditionModels.IAddAssetRenditionData>
    >;

    /**
     * Modifies asset rendition
     */
    modifyAssetRendition(): AssetIdentifierQuery<
        RenditionIdentifierQuery<DataQuery<ModifyAssetRenditionQuery, AssetRenditionModels.IModifyAssetRenditionData>>
    >;

    /**
     * Views asset rendition
     */
    viewAssetRendition(): AssetIdentifierQuery<RenditionIdentifierQuery<ViewAssetRenditionQuery>>;

    /**
     * Adds space
     */
    addSpace(): DataQuery<AddSpaceQuery, SpaceModels.IAddSpaceData>;

    /**
     * Deletes a space
     */
    deleteSpace(): SpaceIdentifierQuery<DeleteSpaceQuery>;

    /**
     * Lists all spaces
     */
    listSpaces(): ListSpacesQuery;

    /**
     * Modifies a space
     */
    modifySpace(): SpaceIdentifierQuery<DataQuery<ModifySpaceQuery, SpaceModels.IModifySpaceData[]>>;

    /**
     * Views a space
     */
    viewSpace(): SpaceIdentifierQuery<ViewSpaceQuery>;

    /**
     * Gets preview configuration
     */
    getPreviewConfiguration(): GetPreviewConfigurationQuery;

    /**
     * Adjusts the preview URLs configured for your environment
     */
    modifyPreviewConfiguration(): DataQuery<
        ModifyPreviewConfigurationQuery,
        PreviewModels.IModifyPreviewConfigurationData
    >;
}
