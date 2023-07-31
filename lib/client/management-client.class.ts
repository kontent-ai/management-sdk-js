import { HttpService, IHttpCancelRequestToken, IHttpService } from '@kontent-ai/core-sdk';
import {
    AssetElementsBuilder,
    AssetRenditionModels,
    CollectionModels,
    LanguageVariantElementsBuilder,
    ProjectUserModels,
    SpaceModels
} from '../models';

import { IManagementClientConfig } from '../config';
import { ContentItemContracts, LanguageVariantContracts } from '../contracts';
import {
    AssetFolderModels,
    AssetModels,
    ContentTypeElementsBuilder,
    ContentTypeModels,
    ContentTypeSnippetElements,
    ContentTypeSnippetModels,
    LanguageModels,
    TaxonomyModels,
    WebhookModels,
    WorkflowModels
} from '../models';
import {
    AddAssetFoldersQuery,
    AddAssetQuery,
    AddContentItemQuery,
    AddContentTypeQuery,
    AddContentTypeSnippetQuery,
    AddLanguageQuery,
    AddTaxonomyQuery,
    AddWebhookQuery,
    AssetIdentifierQuery,
    CancelScheduledPublishingOfLanguageVariantQuery,
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
    DeleteTaxonomyQuery,
    DeleteWebhookQuery,
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
    EnvironmentIdentifierQuery,
    EnvironmentInformationQuery,
    PublishLanguageVariantQuery,
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
    WebhookIdentifierQuery,
    WorkflowStepIdentifierQuery,
    ModifyTaxonomyQuery,
    PostQuery,
    ActionQuery,
    PatchQuery,
    PutQuery,
    DeleteQuery,
    GetQuery,
    CancelScheduledUnpublishingOfLanguageVariantQuery,
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
    ViewSubscriptionUserQuery,
    ActivateUserInAllProjectsQuery,
    DeactivateUserInAllProjectsQuery,
    ListRolesQuery,
    InviteProjectUserQuery,
    ChangeUserRolesQuery,
    RoleIdentifierQuery,
    ViewRoleQuery,
    ListAssetRenditionsQuery,
    ModifyAssetRenditionQuery,
    AddAssetRenditionQuery,
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
    AddSpaceQuery,
    DeleteSpaceQuery,
    ListSpacesQuery,
    ModifySpaceQuery,
    ViewSpaceQuery,
    SpaceIdentifierQuery,
    GetPreviewConfigurationQuery
} from '../queries';
import { sdkInfo } from '../sdk-info.generated';
import { ManagementQueryService, IMappingService, MappingService } from '../services';
import { IManagementClient } from './imanagement-client.interface';
import { CancelToken } from 'axios';
import { GetEnvironmentCloningStateQuery } from '../queries/environments';
import { DeleteEnvironmentQuery } from '../queries/environments/delete-environment-query';
import { EnvironmentModels } from '../models/environments/environment.models';
import { CloneEnvironmentQuery } from '../queries/environments/clone-environment-query';
import { MarkEnvironmentAsProductionQuery } from '../queries/environments/mark-environment-as-production-query';
import { ModifyEnvironmentQuery } from '../queries/environments/modify-environment-query';

export class ManagementClient implements IManagementClient<CancelToken> {
    private readonly queryService: ManagementQueryService;
    private httpService: IHttpService<CancelToken>;

    public readonly mappingService: IMappingService = new MappingService();

    constructor(protected readonly config: IManagementClientConfig) {
        const httpService = config.httpService ? config.httpService : new HttpService();
        this.queryService = new ManagementQueryService(config, httpService, {
            host: sdkInfo.host,
            name: sdkInfo.name,
            version: sdkInfo.version
        });

        this.httpService = httpService;
    }

    createCancelToken(): IHttpCancelRequestToken<CancelToken> {
        return this.httpService.createCancelToken();
    }

    post(): ActionQuery<DataQuery<PostQuery, any>> {
        return new ActionQuery<DataQuery<PostQuery, any>>(
            this.config,
            this.queryService,
            (config, queryService, action) =>
                new DataQuery<PostQuery, any>(
                    config,
                    queryService,
                    (nConfig, nQueryService, data) => new PostQuery(nConfig, nQueryService, action, data)
                )
        );
    }

    patch(): ActionQuery<DataQuery<PatchQuery, any>> {
        return new ActionQuery<DataQuery<PatchQuery, any>>(
            this.config,
            this.queryService,
            (config, queryService, action) =>
                new DataQuery<PatchQuery, any>(
                    config,
                    queryService,
                    (nConfig, nQueryService, data) => new PatchQuery(nConfig, nQueryService, action, data)
                )
        );
    }

    put(): ActionQuery<DataQuery<PutQuery, any>> {
        return new ActionQuery<DataQuery<PutQuery, any>>(
            this.config,
            this.queryService,
            (config, queryService, action) =>
                new DataQuery<PutQuery, any>(
                    config,
                    queryService,
                    (nConfig, nQueryService, data) => new PutQuery(nConfig, nQueryService, action, data)
                )
        );
    }

    delete(): ActionQuery<DeleteQuery> {
        return new ActionQuery<DeleteQuery>(
            this.config,
            this.queryService,
            (config, queryService, action) => new DeleteQuery(config, queryService, action)
        );
    }

    get(): ActionQuery<GetQuery> {
        return new ActionQuery<GetQuery>(
            this.config,
            this.queryService,
            (config, queryService, action) => new GetQuery(config, queryService, action)
        );
    }

    createNewVersionOfLanguageVariant(): ContentItemIdentifierQuery<
        LanguageIdAndCodenameIdentifierQuery<CreateNewVersionOfLanguageVariantQuery>
    > {
        return new ContentItemIdentifierQuery<
            LanguageIdAndCodenameIdentifierQuery<CreateNewVersionOfLanguageVariantQuery>
        >(
            this.config,
            this.queryService,
            (config, queryService, contentItemIdentifier) =>
                new LanguageIdAndCodenameIdentifierQuery<CreateNewVersionOfLanguageVariantQuery>(
                    config,
                    queryService,
                    (nConfig, nQueryService, languageIdentifier) =>
                        new CreateNewVersionOfLanguageVariantQuery(
                            nConfig,
                            nQueryService,
                            contentItemIdentifier,
                            languageIdentifier
                        )
                )
        );
    }

    unpublishLanguageVariant(): ContentItemIdentifierQuery<
        LanguageIdAndCodenameIdentifierQuery<
            DataQueryOptional<UnpublishLanguageVariantQuery, WorkflowModels.IUnpublishLanguageVarianthData>
        >
    > {
        return new ContentItemIdentifierQuery<
            LanguageIdAndCodenameIdentifierQuery<
                DataQueryOptional<UnpublishLanguageVariantQuery, WorkflowModels.IUnpublishLanguageVarianthData>
            >
        >(
            this.config,
            this.queryService,
            (config, queryService, contentItemIdentifier) =>
                new LanguageIdAndCodenameIdentifierQuery<
                    DataQueryOptional<UnpublishLanguageVariantQuery, WorkflowModels.IUnpublishLanguageVarianthData>
                >(
                    config,
                    queryService,
                    (nConfig, nQueryService, languageIdentifier) =>
                        new DataQueryOptional<
                            UnpublishLanguageVariantQuery,
                            WorkflowModels.IUnpublishLanguageVarianthData
                        >(
                            nConfig,
                            nQueryService,
                            (pConfig, pQueryService, data) =>
                                new UnpublishLanguageVariantQuery(
                                    pConfig,
                                    pQueryService,
                                    contentItemIdentifier,
                                    languageIdentifier,
                                    data
                                )
                        )
                )
        );
    }

    cancelSheduledPublishingOfLanguageVariant(): ContentItemIdentifierQuery<
        LanguageIdAndCodenameIdentifierQuery<CancelScheduledPublishingOfLanguageVariantQuery>
    > {
        return new ContentItemIdentifierQuery<
            LanguageIdAndCodenameIdentifierQuery<CancelScheduledPublishingOfLanguageVariantQuery>
        >(
            this.config,
            this.queryService,
            (config, queryService, contentItemIdentifier) =>
                new LanguageIdAndCodenameIdentifierQuery<CancelScheduledPublishingOfLanguageVariantQuery>(
                    config,
                    queryService,
                    (nConfig, nQueryService, languageIdentifier) =>
                        new CancelScheduledPublishingOfLanguageVariantQuery(
                            nConfig,
                            nQueryService,
                            contentItemIdentifier,
                            languageIdentifier
                        )
                )
        );
    }

    cancelSheduledUnpublishingOfLanguageVariant(): ContentItemIdentifierQuery<
        LanguageIdAndCodenameIdentifierQuery<CancelScheduledUnpublishingOfLanguageVariantQuery>
    > {
        return new ContentItemIdentifierQuery<
            LanguageIdAndCodenameIdentifierQuery<CancelScheduledUnpublishingOfLanguageVariantQuery>
        >(
            this.config,
            this.queryService,
            (config, queryService, contentItemIdentifier) =>
                new LanguageIdAndCodenameIdentifierQuery<CancelScheduledUnpublishingOfLanguageVariantQuery>(
                    config,
                    queryService,
                    (nConfig, nQueryService, languageIdentifier) =>
                        new CancelScheduledUnpublishingOfLanguageVariantQuery(
                            nConfig,
                            nQueryService,
                            contentItemIdentifier,
                            languageIdentifier
                        )
                )
        );
    }

    changeWorkflowStepOfLanguageVariant(): ContentItemIdentifierQuery<
        LanguageIdAndCodenameIdentifierQuery<WorkflowStepIdentifierQuery<ChangeWorkflowStepOfLanguageOrVariantQuery>>
    > {
        return new ContentItemIdentifierQuery<
            LanguageIdAndCodenameIdentifierQuery<
                WorkflowStepIdentifierQuery<ChangeWorkflowStepOfLanguageOrVariantQuery>
            >
        >(
            this.config,
            this.queryService,
            (config, queryService, contentItemIdentifier) =>
                new LanguageIdAndCodenameIdentifierQuery<
                    WorkflowStepIdentifierQuery<ChangeWorkflowStepOfLanguageOrVariantQuery>
                >(
                    config,
                    queryService,
                    (nConfig, nQueryService, languageIdentifier) =>
                        new WorkflowStepIdentifierQuery<ChangeWorkflowStepOfLanguageOrVariantQuery>(
                            nConfig,
                            nQueryService,
                            (mConfig, mQueryservice, workflowIdentifier) => {
                                return new ChangeWorkflowStepOfLanguageOrVariantQuery(
                                    config,
                                    queryService,
                                    contentItemIdentifier,
                                    languageIdentifier,
                                    workflowIdentifier
                                );
                            }
                        )
                )
        );
    }

    changeWorkflowOfLanguageVariant(): ContentItemIdentifierQuery<
        LanguageIdAndCodenameIdentifierQuery<
            DataQuery<ChangeWorkflowOfLanguageOrVariantQuery, WorkflowModels.IChangeWorkflowOfLanguageVariantData>
        >
    > {
        return new ContentItemIdentifierQuery<
            LanguageIdAndCodenameIdentifierQuery<
                DataQuery<ChangeWorkflowOfLanguageOrVariantQuery, WorkflowModels.IChangeWorkflowOfLanguageVariantData>
            >
        >(
            this.config,
            this.queryService,
            (config, queryService, contentItemIdentifier) =>
                new LanguageIdAndCodenameIdentifierQuery<
                    DataQuery<
                        ChangeWorkflowOfLanguageOrVariantQuery,
                        WorkflowModels.IChangeWorkflowOfLanguageVariantData
                    >
                >(
                    config,
                    queryService,
                    (nConfig, nQueryService, languageIdentifier) =>
                        new DataQuery<
                            ChangeWorkflowOfLanguageOrVariantQuery,
                            WorkflowModels.IChangeWorkflowOfLanguageVariantData
                        >(nConfig, nQueryService, (mConfig, mQueryservice, data) => {
                            return new ChangeWorkflowOfLanguageOrVariantQuery(
                                config,
                                queryService,
                                contentItemIdentifier,
                                languageIdentifier,
                                data
                            );
                        })
                )
        );
    }

    listWorkflows(): ListWorkflowsQuery {
        return new ListWorkflowsQuery(this.config, this.queryService);
    }

    deleteWorkflow(): WorkflowIdentifierQuery<DeleteWorkflowQuery> {
        return new WorkflowIdentifierQuery<DeleteWorkflowQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new DeleteWorkflowQuery(config, queryService, identifier)
        );
    }

    addWorkflow(): DataQuery<AddWorkflowQuery, WorkflowModels.IAddWorkflowData> {
        return new DataQuery<AddWorkflowQuery, WorkflowModels.IAddWorkflowData>(
            this.config,
            this.queryService,
            (config, queryService, data) => new AddWorkflowQuery(config, queryService, data)
        );
    }

    updateWorkflow(): WorkflowIdentifierQuery<DataQuery<UpdateWorkflowQuery, WorkflowModels.IUpdateWorkflowData>> {
        return new WorkflowIdentifierQuery<DataQuery<UpdateWorkflowQuery, WorkflowModels.IUpdateWorkflowData>>(
            this.config,
            this.queryService,
            (config, queryService, identifier) =>
                new DataQuery<UpdateWorkflowQuery, WorkflowModels.IUpdateWorkflowData>(
                    config,
                    queryService,
                    (nConfig, nQueryService, data) => new UpdateWorkflowQuery(nConfig, nQueryService, data, identifier)
                )
        );
    }

    publishLanguageVariant(): ContentItemIdentifierQuery<
        LanguageIdAndCodenameIdentifierQuery<
            DataQueryOptional<PublishLanguageVariantQuery, WorkflowModels.IPublishLanguageVariantData>
        >
    > {
        return new ContentItemIdentifierQuery<
            LanguageIdAndCodenameIdentifierQuery<
                DataQueryOptional<PublishLanguageVariantQuery, WorkflowModels.IPublishLanguageVariantData>
            >
        >(
            this.config,
            this.queryService,
            (config, queryService, contentItemIdentifier) =>
                new LanguageIdAndCodenameIdentifierQuery<
                    DataQueryOptional<PublishLanguageVariantQuery, WorkflowModels.IPublishLanguageVariantData>
                >(
                    config,
                    queryService,
                    (nConfig, nQueryService, languageIdentifier) =>
                        new DataQueryOptional<PublishLanguageVariantQuery, WorkflowModels.IPublishLanguageVariantData>(
                            nConfig,
                            nQueryService,
                            (pConfig, pQueryService, data) =>
                                new PublishLanguageVariantQuery(
                                    pConfig,
                                    pQueryService,
                                    contentItemIdentifier,
                                    languageIdentifier,
                                    data
                                )
                        )
                )
        );
    }

    listWorkflowSteps(): ListWorkflowStepsQuery {
        return new ListWorkflowStepsQuery(this.config, this.queryService);
    }

    listContentTypeSnippets(): ListContentTypeSnippetsQuery {
        return new ListContentTypeSnippetsQuery(this.config, this.queryService);
    }

    viewContentTypeSnippet(): ContentTypeIdentifierQuery<ViewContentTypeSnippetQuery> {
        return new ContentTypeIdentifierQuery<ViewContentTypeSnippetQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new ViewContentTypeSnippetQuery(config, queryService, identifier)
        );
    }

    deleteContentTypeSnippet(): ContentTypeIdentifierQuery<DeleteContentTypeSnippetQuery> {
        return new ContentTypeIdentifierQuery<DeleteContentTypeSnippetQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new DeleteContentTypeSnippetQuery(config, queryService, identifier)
        );
    }

    addContentTypeSnippet(): DataQuery<
        AddContentTypeSnippetQuery,
        (builder: ContentTypeSnippetElements) => ContentTypeSnippetModels.IAddContentTypeSnippetData
    > {
        return new DataQuery<
            AddContentTypeSnippetQuery,
            (builder: ContentTypeSnippetElements) => ContentTypeSnippetModels.IAddContentTypeSnippetData
        >(
            this.config,
            this.queryService,
            (config, queryService, data) => new AddContentTypeSnippetQuery(config, queryService, data)
        );
    }

    viewLanguageVariant(): ContentItemIdentifierQuery<LanguageIdAndCodenameIdentifierQuery<ViewLanguageVariantQuery>> {
        return new ContentItemIdentifierQuery<LanguageIdAndCodenameIdentifierQuery<ViewLanguageVariantQuery>>(
            this.config,
            this.queryService,
            (config, queryService, contentItemIdentifier) =>
                new LanguageIdAndCodenameIdentifierQuery<ViewLanguageVariantQuery>(
                    config,
                    queryService,
                    (nConfig, nQueryService, languageIdentifier) =>
                        new ViewLanguageVariantQuery(nConfig, nQueryService, contentItemIdentifier, languageIdentifier)
                )
        );
    }

    upsertLanguageVariant(): ContentItemIdentifierQuery<
        LanguageIdAndCodenameIdentifierQuery<
            DataQuery<
                UpsertLanguageVariantQuery,
                (builder: LanguageVariantElementsBuilder) => LanguageVariantContracts.IUpsertLanguageVariantPostContract
            >
        >
    > {
        return new ContentItemIdentifierQuery<
            LanguageIdAndCodenameIdentifierQuery<
                DataQuery<
                    UpsertLanguageVariantQuery,
                    (
                        builder: LanguageVariantElementsBuilder
                    ) => LanguageVariantContracts.IUpsertLanguageVariantPostContract
                >
            >
        >(
            this.config,
            this.queryService,
            (config, queryService, contentItemIdentifier) =>
                new LanguageIdAndCodenameIdentifierQuery<
                    DataQuery<
                        UpsertLanguageVariantQuery,
                        (
                            builder: LanguageVariantElementsBuilder
                        ) => LanguageVariantContracts.IUpsertLanguageVariantPostContract
                    >
                >(
                    config,
                    queryService,
                    (nConfig, nQueryService, languageIdentifier) =>
                        new DataQuery<
                            UpsertLanguageVariantQuery,
                            (
                                builder: LanguageVariantElementsBuilder
                            ) => LanguageVariantContracts.IUpsertLanguageVariantPostContract
                        >(
                            nConfig,
                            nQueryService,
                            (mConfig, mQueryService, elements) =>
                                new UpsertLanguageVariantQuery(
                                    mConfig,
                                    mQueryService,
                                    contentItemIdentifier,
                                    languageIdentifier,
                                    elements
                                )
                        )
                )
        );
    }

    deleteLanguageVariant(): ContentItemIdentifierQuery<
        LanguageIdAndCodenameIdentifierQuery<DeleteLanguageVariantQuery>
    > {
        return new ContentItemIdentifierQuery<LanguageIdAndCodenameIdentifierQuery<DeleteLanguageVariantQuery>>(
            this.config,
            this.queryService,
            (config, queryService, contentItemIdentifier) =>
                new LanguageIdAndCodenameIdentifierQuery<DeleteLanguageVariantQuery>(
                    config,
                    queryService,
                    (nConfig, nQueryService, languageIdentifier) =>
                        new DeleteLanguageVariantQuery(
                            nConfig,
                            nQueryService,
                            contentItemIdentifier,
                            languageIdentifier
                        )
                )
        );
    }

    startEnvironmentValidation(): StartEnvironmentValidationQuery {
        return new StartEnvironmentValidationQuery(this.config, this.queryService);
    }

    checkEnvironmentValidation(): TaskIdentifierQuery<CheckEnvironmentValidationQuery> {
        return new TaskIdentifierQuery<CheckEnvironmentValidationQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new CheckEnvironmentValidationQuery(config, queryService, identifier)
        );
    }

    listEnvironmentValidationIssues(): TaskIdentifierQuery<ListEnvironmentValidationIssuesQuery> {
        return new TaskIdentifierQuery<ListEnvironmentValidationIssuesQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) =>
                new ListEnvironmentValidationIssuesQuery(config, queryService, identifier)
        );
    }

    deleteContentType(): ContentTypeIdentifierQuery<DeleteContentTypeQuery> {
        return new ContentTypeIdentifierQuery<DeleteContentTypeQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new DeleteContentTypeQuery(config, queryService, identifier)
        );
    }

    addContentType(): DataQuery<
        AddContentTypeQuery,
        (builder: ContentTypeElementsBuilder) => ContentTypeModels.IAddContentTypeData
    > {
        return new DataQuery<
            AddContentTypeQuery,
            (builder: ContentTypeElementsBuilder) => ContentTypeModels.IAddContentTypeData
        >(
            this.config,
            this.queryService,
            (config, queryService, data) => new AddContentTypeQuery(config, queryService, data)
        );
    }

    modifyContentTypeSnippet(): ContentTypeIdentifierQuery<
        DataQuery<ModifyContentTypeSnippetQuery, ContentTypeSnippetModels.IModifyContentTypeSnippetData[]>
    > {
        return new ContentTypeIdentifierQuery<
            DataQuery<ModifyContentTypeSnippetQuery, ContentTypeSnippetModels.IModifyContentTypeSnippetData[]>
        >(
            this.config,
            this.queryService,
            (config, queryService, identifier) =>
                new DataQuery<ModifyContentTypeSnippetQuery, ContentTypeSnippetModels.IModifyContentTypeSnippetData[]>(
                    config,
                    queryService,
                    (nConfig, nQueryService, data) =>
                        new ModifyContentTypeSnippetQuery(nConfig, nQueryService, identifier, data)
                )
        );
    }

    modifyContentType(): ContentTypeIdentifierQuery<
        DataQuery<ModifyContentTypeQuery, ContentTypeModels.IModifyContentTypeData[]>
    > {
        return new ContentTypeIdentifierQuery<
            DataQuery<ModifyContentTypeQuery, ContentTypeModels.IModifyContentTypeData[]>
        >(
            this.config,
            this.queryService,
            (config, queryService, identifier) =>
                new DataQuery<ModifyContentTypeQuery, ContentTypeModels.IModifyContentTypeData[]>(
                    config,
                    queryService,
                    (nConfig, nQueryService, data) =>
                        new ModifyContentTypeQuery(nConfig, nQueryService, identifier, data)
                )
        );
    }

    modifyTaxonomy(): TaxonomyIdentifierQuery<DataQuery<ModifyTaxonomyQuery, TaxonomyModels.IModifyTaxonomyData[]>> {
        return new TaxonomyIdentifierQuery<DataQuery<ModifyTaxonomyQuery, TaxonomyModels.IModifyTaxonomyData[]>>(
            this.config,
            this.queryService,
            (config, queryService, identifier) =>
                new DataQuery<ModifyTaxonomyQuery, TaxonomyModels.IModifyTaxonomyData[]>(
                    config,
                    queryService,
                    (nConfig, nQueryService, data) => new ModifyTaxonomyQuery(nConfig, nQueryService, identifier, data)
                )
        );
    }

    viewContentType(): ContentTypeIdentifierQuery<ViewContentTypeQuery> {
        return new ContentTypeIdentifierQuery<ViewContentTypeQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new ViewContentTypeQuery(config, queryService, identifier)
        );
    }

    listContentTypes(): ListContentTypesQuery {
        return new ListContentTypesQuery(this.config, this.queryService);
    }

    listAssetRenditions(): AssetIdentifierQuery<ListAssetRenditionsQuery> {
        return new AssetIdentifierQuery<ListAssetRenditionsQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new ListAssetRenditionsQuery(config, queryService, identifier)
        );
    }

    addAssetRendition(): AssetIdentifierQuery<
        DataQuery<AddAssetRenditionQuery, AssetRenditionModels.IAddAssetRenditionData>
    > {
        return new AssetIdentifierQuery<DataQuery<AddAssetRenditionQuery, AssetRenditionModels.IAddAssetRenditionData>>(
            this.config,
            this.queryService,
            (config, queryService, identifier) =>
                new DataQuery<AddAssetRenditionQuery, AssetRenditionModels.IAddAssetRenditionData>(
                    config,
                    queryService,
                    (nConfig, nQueryService, data) =>
                        new AddAssetRenditionQuery(nConfig, nQueryService, identifier, data)
                )
        );
    }

    modifyAssetRendition(): AssetIdentifierQuery<
        RenditionIdentifierQuery<DataQuery<ModifyAssetRenditionQuery, AssetRenditionModels.IModifyAssetRenditionData>>
    > {
        return new AssetIdentifierQuery<
            RenditionIdentifierQuery<
                DataQuery<ModifyAssetRenditionQuery, AssetRenditionModels.IModifyAssetRenditionData>
            >
        >(
            this.config,
            this.queryService,
            (config, queryService, assetIdentifier) =>
                new RenditionIdentifierQuery<
                    DataQuery<ModifyAssetRenditionQuery, AssetRenditionModels.IModifyAssetRenditionData>
                >(config, queryService, (mConfig, mQueryService, renditionIdentifier) => {
                    return new DataQuery<ModifyAssetRenditionQuery, AssetRenditionModels.IModifyAssetRenditionData>(
                        config,
                        queryService,
                        (nConfig, nQueryService, data) =>
                            new ModifyAssetRenditionQuery(
                                nConfig,
                                nQueryService,
                                assetIdentifier,
                                renditionIdentifier,
                                data
                            )
                    );
                })
        );
    }

    viewAssetRendition(): AssetIdentifierQuery<RenditionIdentifierQuery<ViewAssetRenditionQuery>> {
        return new AssetIdentifierQuery<RenditionIdentifierQuery<ViewAssetRenditionQuery>>(
            this.config,
            this.queryService,
            (config, queryService, assetIdentifier) =>
                new RenditionIdentifierQuery<ViewAssetRenditionQuery>(
                    config,
                    queryService,
                    (xConfig, xQueryService, renditionIdentifier) => {
                        return new ViewAssetRenditionQuery(config, queryService, assetIdentifier, renditionIdentifier);
                    }
                )
        );
    }

    deleteTaxonomy(): TaxonomyIdentifierQuery<DeleteTaxonomyQuery> {
        return new TaxonomyIdentifierQuery<DeleteTaxonomyQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new DeleteTaxonomyQuery(config, queryService, identifier)
        );
    }

    addTaxonomy(): DataQuery<AddTaxonomyQuery, TaxonomyModels.IAddTaxonomyRequestModel> {
        return new DataQuery<AddTaxonomyQuery, TaxonomyModels.IAddTaxonomyRequestModel>(
            this.config,
            this.queryService,
            (config, queryService, data) => new AddTaxonomyQuery(config, queryService, data)
        );
    }

    listTaxonomies(): ListTaxonomiesQuery {
        return new ListTaxonomiesQuery(this.config, this.queryService);
    }

    getTaxonomy(): TaxonomyIdentifierQuery<GetTaxonomyQuery> {
        return new TaxonomyIdentifierQuery<GetTaxonomyQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new GetTaxonomyQuery(config, queryService, identifier)
        );
    }

    deleteAsset(): AssetIdentifierQuery<DeleteAssetQuery> {
        return new AssetIdentifierQuery<DeleteAssetQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new DeleteAssetQuery(config, queryService, identifier)
        );
    }

    upsertAsset(): AssetIdentifierQuery<
        DataQuery<UpsertAssetQuery, (builder: AssetElementsBuilder) => AssetModels.IUpsertAssetRequestData>
    > {
        return new AssetIdentifierQuery<
            DataQuery<UpsertAssetQuery, (builder: AssetElementsBuilder) => AssetModels.IUpsertAssetRequestData>
        >(
            this.config,
            this.queryService,
            (config, queryService, identifier) =>
                new DataQuery<UpsertAssetQuery, (builder: AssetElementsBuilder) => AssetModels.IUpsertAssetRequestData>(
                    this.config,
                    this.queryService,
                    (xConfig, xQueryService, data) => new UpsertAssetQuery(config, queryService, identifier, data)
                )
        );
    }

    addAsset(): DataQuery<AddAssetQuery, (builder: AssetElementsBuilder) => AssetModels.IAddAssetRequestData> {
        return new DataQuery<AddAssetQuery, (builder: AssetElementsBuilder) => AssetModels.IAddAssetRequestData>(
            this.config,
            this.queryService,
            (config, queryService, data) => new AddAssetQuery(config, queryService, data)
        );
    }

    uploadBinaryFile(): DataQuery<UploadBinaryFileQuery, AssetModels.IUploadBinaryFileRequestData> {
        return new DataQuery<UploadBinaryFileQuery, AssetModels.IUploadBinaryFileRequestData>(
            this.config,
            this.queryService,
            (config, queryService, data) => new UploadBinaryFileQuery(config, queryService, data)
        );
    }

    uploadAssetFromUrl(): DataQuery<UploadAssetFromUrlQuery, AssetModels.IUploadAssetFromUrlRequestData> {
        return new DataQuery<UploadAssetFromUrlQuery, AssetModels.IUploadAssetFromUrlRequestData>(
            this.config,
            this.queryService,
            (config, queryService, data) => new UploadAssetFromUrlQuery(config, queryService, data)
        );
    }

    viewAsset(): AssetIdentifierQuery<ViewAssetsQuery> {
        return new AssetIdentifierQuery<ViewAssetsQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new ViewAssetsQuery(config, queryService, identifier)
        );
    }

    listAssets(): ListAssetsQuery {
        return new ListAssetsQuery(this.config, this.queryService);
    }

    listContentItems(): ListContentItemsQuery {
        return new ListContentItemsQuery(this.config, this.queryService);
    }

    viewContentItem(): ContentItemIdentifierQuery<ViewContentItemQuery> {
        return new ContentItemIdentifierQuery<ViewContentItemQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new ViewContentItemQuery(config, queryService, identifier)
        );
    }

    addContentItem(): DataQuery<AddContentItemQuery, ContentItemContracts.IAddContentItemPostContract> {
        return new DataQuery<AddContentItemQuery, ContentItemContracts.IAddContentItemPostContract>(
            this.config,
            this.queryService,
            (config, queryService, data) => new AddContentItemQuery(config, queryService, data)
        );
    }

    updateContentItem(): ContentItemIdentifierQuery<
        DataQuery<UpdateContentItemQuery, ContentItemContracts.IUpdateContentItemPostContract>
    > {
        return new ContentItemIdentifierQuery<
            DataQuery<UpdateContentItemQuery, ContentItemContracts.IUpdateContentItemPostContract>
        >(
            this.config,
            this.queryService,
            (config, queryService, identifier) =>
                new DataQuery<UpdateContentItemQuery, ContentItemContracts.IUpdateContentItemPostContract>(
                    config,
                    queryService,
                    (nConfig, nQueryService, data) =>
                        new UpdateContentItemQuery(nConfig, nQueryService, data, identifier)
                )
        );
    }

    upsertContentItem(): ContentItemIdentifierQuery<
        DataQuery<UpsertContentItemQuery, ContentItemContracts.IUpsertContentItemPostContract>
    > {
        return new ContentItemIdentifierQuery<
            DataQuery<UpsertContentItemQuery, ContentItemContracts.IUpsertContentItemPostContract>
        >(
            this.config,
            this.queryService,
            (config, queryService, identifier) =>
                new DataQuery<UpsertContentItemQuery, ContentItemContracts.IUpsertContentItemPostContract>(
                    config,
                    queryService,
                    (nConfig, nQueryService, data) =>
                        new UpsertContentItemQuery(nConfig, nQueryService, data, identifier)
                )
        );
    }

    deleteContentItem(): ContentItemIdentifierQuery<DeleteContentItemQuery> {
        return new ContentItemIdentifierQuery<DeleteContentItemQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new DeleteContentItemQuery(config, queryService, identifier)
        );
    }

    listLanguageVariantsOfItem(): ContentItemIdentifierQuery<ListLanguageVariantsOfItemQuery> {
        return new ContentItemIdentifierQuery<ListLanguageVariantsOfItemQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new ListLanguageVariantsOfItemQuery(config, queryService, identifier)
        );
    }

    listLanguageVariantsOfContentType(): ContentTypeCodenameAndIdIdentifierQuery<ListLanguageVariantsOfContentTypeQuery> {
        return new ContentTypeCodenameAndIdIdentifierQuery<ListLanguageVariantsOfContentTypeQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) =>
                new ListLanguageVariantsOfContentTypeQuery(config, queryService, identifier)
        );
    }

    listLanguageVariantsByCollection(): CollectionIdentifierQuery<ListLanguageVariantsByCollectionQuery> {
        return new CollectionIdentifierQuery<ListLanguageVariantsByCollectionQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) =>
                new ListLanguageVariantsByCollectionQuery(config, queryService, identifier)
        );
    }

    listLanguageVariantsOfContentTypeWithComponents(): ContentTypeCodenameAndIdIdentifierQuery<ListLanguageVariantsOfContentTypeWithComponentsQuery> {
        return new ContentTypeCodenameAndIdIdentifierQuery<ListLanguageVariantsOfContentTypeWithComponentsQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) =>
                new ListLanguageVariantsOfContentTypeWithComponentsQuery(config, queryService, identifier)
        );
    }

    listLanguages(): ListLanguagesQuery {
        return new ListLanguagesQuery(this.config, this.queryService);
    }

    viewLanguage(): LanguageIdentifierQuery<ViewLanguageQuery> {
        return new LanguageIdentifierQuery<ViewLanguageQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new ViewLanguageQuery(config, queryService, identifier)
        );
    }

    addLanguage(): DataQuery<AddLanguageQuery, LanguageModels.IAddLanguageData> {
        return new DataQuery<AddLanguageQuery, LanguageModels.IAddLanguageData>(
            this.config,
            this.queryService,
            (config, queryService, data) => new AddLanguageQuery(config, queryService, data)
        );
    }

    modifyLanguage(): LanguageIdentifierQuery<DataQuery<ModifyLanguageQuery, LanguageModels.IModifyLanguageData[]>> {
        return new LanguageIdentifierQuery<DataQuery<ModifyLanguageQuery, LanguageModels.IModifyLanguageData[]>>(
            this.config,
            this.queryService,
            (config, queryService, identifier) =>
                new DataQuery<ModifyLanguageQuery, LanguageModels.IModifyLanguageData[]>(
                    config,
                    queryService,
                    (nConfig, nQueryService, data) => new ModifyLanguageQuery(nConfig, nQueryService, identifier, data)
                )
        );
    }

    deleteWebhook(): WebhookIdentifierQuery<DeleteWebhookQuery> {
        return new WebhookIdentifierQuery<DeleteWebhookQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new DeleteWebhookQuery(config, queryService, identifier)
        );
    }

    addWebhook(): DataQuery<AddWebhookQuery, WebhookModels.IAddWebhookData> {
        return new DataQuery<AddWebhookQuery, WebhookModels.IAddWebhookData>(
            this.config,
            this.queryService,
            (config, queryService, data) => new AddWebhookQuery(config, queryService, data)
        );
    }

    enableWebhook(): WebhookIdentifierQuery<EnableWebhookQuery> {
        return new WebhookIdentifierQuery<EnableWebhookQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new EnableWebhookQuery(config, queryService, identifier)
        );
    }

    disableWebhook(): WebhookIdentifierQuery<DisableWebhookQuery> {
        return new WebhookIdentifierQuery<DisableWebhookQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new DisableWebhookQuery(config, queryService, identifier)
        );
    }

    getWebhook(): WebhookIdentifierQuery<GetWebhookQuery> {
        return new WebhookIdentifierQuery<GetWebhookQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new GetWebhookQuery(config, queryService, identifier)
        );
    }

    listWebhooks(): ListWebhooksQuery {
        return new ListWebhooksQuery(this.config, this.queryService);
    }

    environmentInformation(): EnvironmentInformationQuery {
        return new EnvironmentInformationQuery(this.config, this.queryService);
    }

    listAssetFolders(): ListAssetFoldersQuery {
        return new ListAssetFoldersQuery(this.config, this.queryService);
    }

    addAssetFolders(): DataQuery<AddAssetFoldersQuery, AssetFolderModels.IAddAssetFoldersData> {
        return new DataQuery<AddAssetFoldersQuery, AssetFolderModels.IAddAssetFoldersData>(
            this.config,
            this.queryService,
            (config, queryService, data) => new AddAssetFoldersQuery(config, queryService, data)
        );
    }

    modifyAssetFolders(): DataQuery<ModifyAssetFoldersQuery, AssetFolderModels.IModifyAssetFoldersData[]> {
        return new DataQuery<ModifyAssetFoldersQuery, AssetFolderModels.IModifyAssetFoldersData[]>(
            this.config,
            this.queryService,
            (config, queryService, data) => new ModifyAssetFoldersQuery(config, queryService, data)
        );
    }

    listCollections(): ListCollectionsQuery {
        return new ListCollectionsQuery(this.config, this.queryService);
    }

    setCollections(): DataQuery<SetCollectionsQuery, CollectionModels.ISetCollectionData[]> {
        return new DataQuery<SetCollectionsQuery, CollectionModels.ISetCollectionData[]>(
            this.config,
            this.queryService,
            (config, queryService, data) => new SetCollectionsQuery(config, queryService, data)
        );
    }

    createLanguageVariantEditUrl(data: {
        variantId: string;
        languageCodename: string;
        elementCodename?: string;
        nestedItemId?: string;
        nestedItemElementCodename?: string;
    }): string {
        let url: string = `https://app.kontent.ai/goto/edit-item/project/${this.config.environmentId}/variant-codename/${data.languageCodename}/item/${data.variantId}`;

        if (data.elementCodename) {
            url += `/element/${data.elementCodename}`;
        }

        if (data.nestedItemId) {
            url += `/item/${data.nestedItemId}`;

            if (data.nestedItemElementCodename) {
                url += `/element/${data.nestedItemElementCodename}`;
            }
        }

        return url;
    }

    listSubscriptionProjects(): ListSubscriptionProjectsQuery {
        return new ListSubscriptionProjectsQuery(this.config, this.queryService);
    }

    listSubscriptionUsers(): ListSubscriptionUsersQuery {
        return new ListSubscriptionUsersQuery(this.config, this.queryService);
    }

    viewSubscriptionProject(): EnvironmentIdentifierQuery<ViewSubscriptionProjectQuery> {
        return new EnvironmentIdentifierQuery<ViewSubscriptionProjectQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new ViewSubscriptionProjectQuery(config, queryService, identifier)
        );
    }

    viewSubscriptionUser(): UserIdentifierQuery<ViewSubscriptionUserQuery> {
        return new UserIdentifierQuery<ViewSubscriptionUserQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new ViewSubscriptionUserQuery(config, queryService, identifier)
        );
    }

    activateUserInAllProjects(): UserIdentifierQuery<ActivateUserInAllProjectsQuery> {
        return new UserIdentifierQuery<ActivateUserInAllProjectsQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new ActivateUserInAllProjectsQuery(config, queryService, identifier)
        );
    }

    deactivateUserInAllProjects(): UserIdentifierQuery<DeactivateUserInAllProjectsQuery> {
        return new UserIdentifierQuery<DeactivateUserInAllProjectsQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new DeactivateUserInAllProjectsQuery(config, queryService, identifier)
        );
    }

    listRoles(): ListRolesQuery {
        return new ListRolesQuery(this.config, this.queryService);
    }

    viewRole(): RoleIdentifierQuery<ViewRoleQuery> {
        return new RoleIdentifierQuery<ViewRoleQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new ViewRoleQuery(config, queryService, identifier)
        );
    }

    getPreviewConfiguration(): GetPreviewConfigurationQuery {
        return new GetPreviewConfigurationQuery(this.config, this.queryService);
    }

    inviteUser(): DataQuery<InviteProjectUserQuery, ProjectUserModels.IInviteUserData> {
        return new DataQuery<InviteProjectUserQuery, ProjectUserModels.IInviteUserData>(
            this.config,
            this.queryService,
            (config, queryService, data) => new InviteProjectUserQuery(config, queryService, data)
        );
    }

    changeUserRoles(): UserIdentifierQuery<DataQuery<ChangeUserRolesQuery, ProjectUserModels.IChangeUserRoleData>> {
        return new UserIdentifierQuery<DataQuery<ChangeUserRolesQuery, ProjectUserModels.IChangeUserRoleData>>(
            this.config,
            this.queryService,
            (config, queryService, identifier) =>
                new DataQuery<ChangeUserRolesQuery, ProjectUserModels.IChangeUserRoleData>(
                    config,
                    queryService,
                    (nConfig, nQueryService, data) => new ChangeUserRolesQuery(nConfig, nQueryService, identifier, data)
                )
        );
    }

    getEnvironmentCloningState(): GetEnvironmentCloningStateQuery {
        return new GetEnvironmentCloningStateQuery(this.config, this.queryService);
    }

    deleteEnvironment(): DeleteEnvironmentQuery {
        return new DeleteEnvironmentQuery(this.config, this.queryService);
    }

    modifyEnvironment(): DataQuery<ModifyEnvironmentQuery, EnvironmentModels.IModifyEnvironmentData[]> {
        return new DataQuery<ModifyEnvironmentQuery, EnvironmentModels.IModifyEnvironmentData[]>(
            this.config,
            this.queryService,
            (config, queryService, data) => new ModifyEnvironmentQuery(config, queryService, data)
        );
    }

    cloneEnvironment(): DataQuery<CloneEnvironmentQuery, EnvironmentModels.ICloneEnvironmentData> {
        return new DataQuery<CloneEnvironmentQuery, EnvironmentModels.ICloneEnvironmentData>(
            this.config,
            this.queryService,
            (config, queryService, data) => new CloneEnvironmentQuery(config, queryService, data)
        );
    }

    markEnvironmentAsProduction(): DataQuery<
        MarkEnvironmentAsProductionQuery,
        EnvironmentModels.IMarkEnvironmentAsProductionData
    > {
        return new DataQuery<MarkEnvironmentAsProductionQuery, EnvironmentModels.IMarkEnvironmentAsProductionData>(
            this.config,
            this.queryService,
            (config, queryService, data) => new MarkEnvironmentAsProductionQuery(config, queryService, data)
        );
    }

    addSpace(): DataQuery<AddSpaceQuery, SpaceModels.IAddSpaceData> {
        return new DataQuery<AddSpaceQuery, SpaceModels.IAddSpaceData>(
            this.config,
            this.queryService,
            (config, queryService, data) => new AddSpaceQuery(config, queryService, data)
        );
    }

    deleteSpace(): SpaceIdentifierQuery<DeleteSpaceQuery> {
        return new SpaceIdentifierQuery<DeleteSpaceQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new DeleteSpaceQuery(config, queryService, identifier)
        );
    }

    listSpaces(): ListSpacesQuery {
        return new ListSpacesQuery(this.config, this.queryService);
    }

    modifySpace(): SpaceIdentifierQuery<DataQuery<ModifySpaceQuery, SpaceModels.IModifySpaceData[]>> {
        return new SpaceIdentifierQuery<DataQuery<ModifySpaceQuery, SpaceModels.IModifySpaceData[]>>(
            this.config,
            this.queryService,
            (config, queryService, identifier) =>
                new DataQuery<ModifySpaceQuery, SpaceModels.IModifySpaceData[]>(
                    config,
                    queryService,
                    (nConfig, nQueryService, data) => new ModifySpaceQuery(nConfig, nQueryService, identifier, data)
                )
        );
    }

    viewSpace(): SpaceIdentifierQuery<ViewSpaceQuery> {
        return new SpaceIdentifierQuery<ViewSpaceQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new ViewSpaceQuery(config, queryService, identifier)
        );
    }
}
