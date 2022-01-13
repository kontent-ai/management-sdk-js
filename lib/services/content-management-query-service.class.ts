import { IHttpService, ISDKInfo } from '@kentico/kontent-core';
import { LanguageVariantElements } from '../models/language-variants/language-variant-elements-builder';

import { IManagementClientConfig } from '../config/imanagement-client-config.interface';
import {
    AssetContracts,
    AssetFolderContracts,
    CollectionContracts,
    ContentItemContracts,
    ContentTypeContracts,
    ContentTypeSnippetContracts,
    LanguageContracts,
    LanguageVariantContracts,
    ProjectContracts,
    ProjectUserContracts,
    RoleContracts,
    SubscriptionContracts,
    TaxonomyContracts,
    WebhookContracts,
    WorkflowContracts
} from '../contracts';
import {
    assetFolderMapper,
    assetsMapper,
    contentItemsMapper,
    contentTypeMapper,
    contentTypeSnippetMapper,
    languageMapper,
    languageVariantMapper,
    projectMapper,
    taxonomyMappper,
    workflowMapper,
    genericMapper,
    collectionsMappers,
    subscriptionMapper,
    roleMapper,
    projectUserMapper
} from '../mappers';
import { webhookMapper } from '../mappers/webhook-mapper';
import {
    AssetModels,
    ContentTypeModels,
    ContentTypeSnippetModels,
    IContentManagementQueryConfig,
    LanguageModels,
    TaxonomyModels,
    WebhookModels,
    WorkflowModels,
    AssetFolderModels,
    IContentManagementListQueryConfig,
    CollectionModels,
    ProjectUserModels
} from '../models';
import {
    AssetFolderResponses,
    AssetResponses,
    BaseResponses,
    ContentItemResponses,
    ContentTypeResponses,
    ContentTypeSnippetResponses,
    LanguageResponses,
    LanguageVariantResponses,
    ProjectResponses,
    TaxonomyResponses,
    WebhookResponses,
    WorkflowResponses,
    GenericResponses,
    CollectionResponses,
    SubscriptionResponses,
    RoleResponses,
    ProjectUsersResponses
} from '../responses';
import { BaseContentManagementQueryService } from './base-content-management-service.class';

export class ContentManagementQueryService extends BaseContentManagementQueryService<any> {
    constructor(
        protected config: IManagementClientConfig,
        protected httpService: IHttpService<any>,
        protected sdkInfo: ISDKInfo
    ) {
        super(config, httpService, sdkInfo);
    }

    async genericPostResponse(
        url: string,
        data: any,
        config: IContentManagementQueryConfig
    ): Promise<GenericResponses.GenericResponse> {
        return genericMapper.mapGenericResponse(await super.postResponseAsync<void>(url, data, {}, config));
    }

    async genericPatchResponse(
        url: string,
        data: any,
        config: IContentManagementQueryConfig
    ): Promise<GenericResponses.GenericResponse> {
        return genericMapper.mapGenericResponse(await super.patchResponseAsync<void>(url, data, {}, config));
    }

    async genericDeleteResponse(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<GenericResponses.GenericResponse> {
        return genericMapper.mapGenericResponse(await super.deleteResponseAsync<void>(url, {}, config));
    }

    async genericGetResponse(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<GenericResponses.GenericResponse> {
        return genericMapper.mapGenericResponse(await super.getResponseAsync<void>(url, {}, config));
    }

    async genericPutResponse(
        url: string,
        data: any,
        config: IContentManagementQueryConfig
    ): Promise<GenericResponses.GenericResponse> {
        return genericMapper.mapGenericResponse(await super.putResponseAsync<void>(url, data, {}, config));
    }

    async getListAllResponse<
        TResponse extends BaseResponses.IContentManagementListResponse,
        TAllResponse extends BaseResponses.IContentManagementListAllResponse
    >(data: {
        getResponse: (xContinuationToken?: string) => Promise<TResponse>;
        allResponseFactory: (items: any[], responses: TResponse[]) => TAllResponse;
        listQueryConfig?: IContentManagementListQueryConfig<TResponse>;
    }): Promise<TAllResponse> {
        const responses = await this.getListAllResponseInternalAsync({
            resolvedResponses: [],
            getResponse: data.getResponse,
            xContinuationToken: undefined,
            listQueryConfig: data.listQueryConfig
        });

        return data.allResponseFactory(
            responses.reduce((prev: any[], current) => {
                prev.push(...current.data.items);
                return prev;
            }, []),
            responses
        );
    }

    async publishLanguageVariant(
        url: string,
        data: WorkflowModels.IPublishLanguageVariantData | undefined,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return workflowMapper.mapEmptyResponse(await this.putResponseAsync<void>(url, data, {}, config));
    }

    async createNewVersionOfLanguageVariant(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return workflowMapper.mapEmptyResponse(await this.putResponseAsync<void>(url, undefined, {}, config));
    }

    async unpublishLanguageVariant(
        url: string,
        data: WorkflowModels.IUnpublishLanguageVarianthData | undefined,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return workflowMapper.mapEmptyResponse(await this.putResponseAsync<void>(url, data, {}, config));
    }

    async cancelScheduledPublishingOfLanguageVariant(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return workflowMapper.mapEmptyResponse(await this.putResponseAsync<void>(url, undefined, {}, config));
    }

    async cancelScheduledUnpublishingOfLanguageVariant(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return workflowMapper.mapEmptyResponse(await this.putResponseAsync<void>(url, undefined, {}, config));
    }

    async changeWorkflowStepOfLanguageVariant(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return workflowMapper.mapEmptyResponse(await this.putResponseAsync<void>(url, undefined, {}, config));
    }

    async listWorkflowSteps(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<WorkflowResponses.ListWorkflowStepsResponse> {
        return workflowMapper.mapListWorkflowStepsResponse(
            await this.getResponseAsync<WorkflowContracts.IListWorkflowStepsResponseContract>(url, {}, config)
        );
    }

    async addContentType(
        url: string,
        data: ContentTypeModels.IAddContentTypeData,
        config: IContentManagementQueryConfig
    ): Promise<ContentTypeResponses.AddContentTypeResponse> {
        return contentTypeMapper.mapAddContentTypeResponse(
            await this.postResponseAsync<ContentTypeContracts.IAddContentTypeResponseContract>(url, data, {}, config)
        );
    }

    async viewContentTypeSnippet(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<ContentTypeSnippetResponses.ViewContentTypeSnippetResponse> {
        return contentTypeSnippetMapper.mapViewContentTypeSnippetResponse(
            await this.getResponseAsync<ContentTypeSnippetContracts.IViewContentTypeSnippetResponseContract>(
                url,
                {},
                config
            )
        );
    }

    async deleteContentTypeSnippet(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return contentTypeSnippetMapper.mapEmptyResponse(
            await this.deleteResponseAsync<ContentTypeSnippetContracts.IDeleteContentTypeSnippetResponseContract>(
                url,
                {},
                config
            )
        );
    }

    async addContentTypeSnippet(
        url: string,
        data: ContentTypeSnippetModels.IAddContentTypeSnippetData,
        config: IContentManagementQueryConfig
    ): Promise<ContentTypeSnippetResponses.AddContentTypeSnippetResponse> {
        return contentTypeSnippetMapper.mapAddContentTypeSnippetResponse(
            await this.postResponseAsync<ContentTypeSnippetContracts.IAddContentTypeSnippetResponseContract>(
                url,
                data,
                {},
                config
            )
        );
    }

    async listContentTypeSnippets(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<ContentTypeSnippetResponses.ContentTypeSnippetListResponse> {
        return contentTypeSnippetMapper.mapListingResponse(
            await this.getResponseAsync<ContentTypeSnippetContracts.IContentTypeSnippetListResponseContract>(
                url,
                {},
                config
            )
        );
    }

    async projectInformation(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<ProjectResponses.ProjectInformationResponse> {
        return projectMapper.mapProjectInformationResponse(
            await this.getResponseAsync<ProjectContracts.IProjectInformationResponseContract>(url, {}, config)
        );
    }

    async validateProjectContent(
        url: string,
        data: {
            projectId: string;
        },
        config: IContentManagementQueryConfig
    ): Promise<ProjectResponses.ValidateProjectContentResponse> {
        return projectMapper.mapValidateProjectContentResponse(
            await this.postResponseAsync<ProjectContracts.IProjectReportResponseContract>(url, data, {}, config)
        );
    }

    async deleteContentType(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return contentTypeMapper.mapEmptyResponse(
            await this.deleteResponseAsync<ContentTypeContracts.IDeleteContentTypeResponseContract>(url, {}, config)
        );
    }

    async modifyContentType(
        url: string,
        config: IContentManagementQueryConfig,
        data: ContentTypeModels.IModifyContentTypeData[]
    ): Promise<ContentTypeResponses.ModifyContentTypeResponse> {
        return contentTypeMapper.mapModifyContentTypeResponse(
            await this.patchResponseAsync<ContentTypeContracts.IModifyContentTypeResponseContract>(
                url,
                data,
                {},
                config
            )
        );
    }

    async modifyTaxonomy(
        url: string,
        config: IContentManagementQueryConfig,
        data: TaxonomyModels.IModifyTaxonomyData[]
    ): Promise<TaxonomyResponses.ModifyTaxonomyResponse> {
        return taxonomyMappper.mapModifyTaxonomyResponse(
            await this.patchResponseAsync<TaxonomyContracts.IModifyTaxonomyResponseContract>(url, data, {}, config)
        );
    }

    async modifyContentTypeSnippet(
        url: string,
        config: IContentManagementQueryConfig,
        data: ContentTypeSnippetModels.IModifyContentTypeSnippetData[]
    ): Promise<ContentTypeSnippetResponses.ModifyContentTypeSnippetResponse> {
        return contentTypeSnippetMapper.mapModifyContentTypeSnippetResponse(
            await this.patchResponseAsync<ContentTypeContracts.IModifyContentTypeResponseContract>(
                url,
                data,
                {},
                config
            )
        );
    }

    async viewContentType(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<ContentTypeResponses.ViewContentTypeResponse> {
        return contentTypeMapper.mapViewContentTypeResponse(
            await this.getResponseAsync<ContentTypeContracts.IViewContentTypeResponseContract>(url, {}, config)
        );
    }

    async listContentTypes(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<ContentTypeResponses.ContentTypeListResponse> {
        return contentTypeMapper.mapListingResponse(
            await this.getResponseAsync<ContentTypeContracts.IContentTypeListResponseContract>(url, {}, config)
        );
    }

    async addTaxonomy(
        url: string,
        data: TaxonomyModels.IAddTaxonomyRequestModel,
        config: IContentManagementQueryConfig
    ): Promise<TaxonomyResponses.AddTaxonomyResponse> {
        return taxonomyMappper.mapAddTaxonomyResponse(
            await this.postResponseAsync<TaxonomyContracts.IAddTaxonomyResponseContract>(url, data, {}, config)
        );
    }

    async deleteTaxonomy(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return taxonomyMappper.mapEmptyResponse(
            await this.deleteResponseAsync<TaxonomyContracts.IDeleteTaxonomyResponseContract>(url, {}, config)
        );
    }

    async getTaxonomy(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<TaxonomyResponses.GetTaxonomyResponse> {
        return taxonomyMappper.mapGetTaxonomyResponse(
            await this.getResponseAsync<TaxonomyContracts.IGetTaxonomyResponseContract>(url, {}, config)
        );
    }

    async listTaxonomies(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<TaxonomyResponses.TaxonomyListResponse> {
        return taxonomyMappper.mapListingTaxonomysResponse(
            await this.getResponseAsync<TaxonomyContracts.IListTaxonomyResponseContract>(url, {}, config)
        );
    }

    async deleteAsset(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return assetsMapper.mapEmptyResponse(
            await this.deleteResponseAsync<AssetContracts.IDeleteAssetResponseContract>(url, {}, config)
        );
    }

    async upsertAsset(
        url: string,
        data: AssetModels.IUpsertAssetRequestData,
        config: IContentManagementQueryConfig
    ): Promise<AssetResponses.UpdateAssetResponse> {
        return assetsMapper.mapUpsertAssetResponse(
            await this.putResponseAsync<AssetContracts.IUpsertAssetResponseContract>(url, data, {}, config)
        );
    }

    async addAsset(
        url: string,
        data: AssetModels.IAddAssetRequestData,
        config: IContentManagementQueryConfig
    ): Promise<AssetResponses.AddAssetResponse> {
        return assetsMapper.mapAddAssetResponse(
            await this.postResponseAsync<AssetContracts.IAddAssetResponseContract>(url, data, {}, config)
        );
    }

    async listSubscriptionProjects(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<SubscriptionResponses.SubscriptionProjectsListResponse> {
        return subscriptionMapper.mapSubscriptionProjectsListResponse(
            await this.getResponseAsync<SubscriptionContracts.IListSubscriptionProjectsResponseContract>(
                url,
                {},
                config
            )
        );
    }

    async litSubscriptionUsers(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<SubscriptionResponses.SubscriptionUsersListResponse> {
        return subscriptionMapper.mapSubscriptionUsersListResponse(
            await this.getResponseAsync<SubscriptionContracts.IListSubscriptionUsersResponseContract>(url, {}, config)
        );
    }

    async viewSubscriptionProject(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<SubscriptionResponses.ViewSubscriptionProjectResponse> {
        return subscriptionMapper.mapViewSubscriptionProjectResponse(
            await this.getResponseAsync<SubscriptionContracts.ISubscriptionProjectContract>(url, {}, config)
        );
    }

    async viewSubscriptionUser(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<SubscriptionResponses.ViewSubscriptionUserResponse> {
        return subscriptionMapper.mapViewSubscriptionUserResponse(
            await this.getResponseAsync<SubscriptionContracts.ISubscriptionUserContract>(url, {}, config)
        );
    }

    async activateUserInAllProjects(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return contentItemsMapper.mapEmptyResponse(
            await this.putResponseAsync<ContentItemContracts.IDeleteContentItemResponseContract>(url, {}, {}, config)
        );
    }

    async deactivateUserInAllProjects(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return contentItemsMapper.mapEmptyResponse(
            await this.putResponseAsync<ContentItemContracts.IDeleteContentItemResponseContract>(url, {}, {}, config)
        );
    }

    async uploadAssetFromUrl(
        uploadBinaryFileUrl: string,
        addAssetUrl: string,
        data: AssetModels.IUploadAssetFromUrlRequestData,
        config: IContentManagementQueryConfig
    ): Promise<AssetResponses.AddAssetResponse> {
        // get binary data from url
        const binaryData = await super.getBinaryDataFromUrlAsync(data.fileUrl);

        const mimeType = super.getMimeTypeFromFilename(data.binaryFile.filename);

        if (!mimeType) {
            throw Error(
                `Could not get MIME type for filename '${data.binaryFile.filename}'. Please include extension in your filename (e.g. myfile.png)`
            );
        }

        // upload binary file
        const uploadedBinaryFileResponse = await this.uploadBinaryFile(
            uploadBinaryFileUrl,
            {
                binaryData: binaryData,
                contentType: mimeType,
                filename: data.binaryFile.filename,
                contentLength: binaryData.byteLength
            },
            config
        );

        // creta asset & assign it to binary file
        const assetResponse = await this.addAsset(
            addAssetUrl,
            {
                file_reference: {
                    id: uploadedBinaryFileResponse.data.id,
                    type: uploadedBinaryFileResponse.data.type
                },
                descriptions: data.asset.descriptions,
                external_id: data.asset.external_id,
                folder: data.asset.folder,
                title: data.asset.title
            },
            config
        );

        return assetResponse;
    }

    async uploadBinaryFile(
        url: string,
        data: AssetModels.IUploadBinaryFileRequestData,
        config: IContentManagementQueryConfig
    ): Promise<AssetResponses.UploadBinaryFileResponse> {
        config.headers.push({
            header: 'Content-type',
            value: data.contentType
        });

        if (data.contentLength) {
            config.headers.push({ header: 'Content-length', value: data.contentLength.toString() });
        }

        return assetsMapper.mapUploadBinaryFileResponse(
            await this.postResponseAsync<AssetContracts.IUploadBinaryFileResponseContract>(
                url,
                data.binaryData,
                {},
                config
            )
        );
    }

    async viewAsset(url: string, config: IContentManagementQueryConfig): Promise<AssetResponses.ViewAssetResponse> {
        return assetsMapper.mapViewAssetResponse(
            await this.getResponseAsync<AssetContracts.IAssetModelContract>(url, {}, config)
        );
    }

    async listAssets(url: string, config: IContentManagementQueryConfig): Promise<AssetResponses.AssetsListResponse> {
        return assetsMapper.mapListingAssetsResponse(
            await this.getResponseAsync<AssetContracts.IAssetsListingResponseContract>(url, {}, config)
        );
    }

    async listContentItems(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<ContentItemResponses.ContentItemsResponse> {
        return contentItemsMapper.mapListingItemsResponse(
            await this.getResponseAsync<ContentItemContracts.IContentItemsListingResponseContract>(url, {}, config)
        );
    }

    async viewContentItem(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<ContentItemResponses.ViewContentItemResponse> {
        return contentItemsMapper.mapViewContentItemResponse(
            await this.getResponseAsync<ContentItemContracts.IViewContentItemResponseContract>(url, {}, config)
        );
    }

    async addContentItem(
        url: string,
        data: ContentItemContracts.IAddContentItemPostContract,
        config: IContentManagementQueryConfig
    ): Promise<ContentItemResponses.AddContentItemResponse> {
        return contentItemsMapper.mapAddContentItemResponse(
            await this.postResponseAsync<ContentItemContracts.IAddContentItemResponseContract>(url, data, {}, config)
        );
    }

    async upsertContentItem(
        url: string,
        data: ContentItemContracts.IUpsertContentItemPostContract,
        config: IContentManagementQueryConfig
    ): Promise<ContentItemResponses.UpsertContentItemResponse> {
        return contentItemsMapper.mapUpsertContentItemResponse(
            await this.putResponseAsync<ContentItemContracts.IUpsertContentItemResponseContract>(url, data, {}, config)
        );
    }

    async updateContentItem(
        url: string,
        data: ContentItemContracts.IUpdateContentItemPostContract,
        config: IContentManagementQueryConfig
    ): Promise<ContentItemResponses.AddContentItemResponse> {
        return contentItemsMapper.mapUpdateContentItemResponse(
            await this.putResponseAsync<ContentItemContracts.IUpdateContentItemResponseContract>(url, data, {}, config)
        );
    }

    async deleteContentItem(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return contentItemsMapper.mapEmptyResponse(
            await this.deleteResponseAsync<ContentItemContracts.IDeleteContentItemResponseContract>(url, {}, config)
        );
    }

    async deleteLanguageVariant(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return contentItemsMapper.mapEmptyResponse(
            await this.deleteResponseAsync<ContentItemContracts.IDeleteContentItemResponseContract>(url, {}, config)
        );
    }

    async upsertLanguageVariant(
        url: string,
        elements: LanguageVariantElements.ILanguageVariantElementBase[],
        config: IContentManagementQueryConfig
    ): Promise<LanguageVariantResponses.UpsertLanguageVariantResponse> {
        return languageVariantMapper.mapUpsertLanguageVariantResponse(
            await this.putResponseAsync<LanguageVariantContracts.IUpsertLanguageVariantResponseContract>(
                url,
                {
                    elements: elements
                },
                {},
                config
            )
        );
    }

    async viewLanguageVariant(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<LanguageVariantResponses.ViewLanguageVariantResponse> {
        return languageVariantMapper.mapViewLanguageVariantResponse(
            await this.getResponseAsync<LanguageVariantContracts.IViewLanguageVariantResponseContract>(url, {}, config)
        );
    }

    async listLanguageVariantsOfItem(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<LanguageVariantResponses.ListLanguageVariantsOfItemResponse> {
        return languageVariantMapper.mapLanguageVariantsOfItemResponse(
            await this.getResponseAsync<LanguageVariantContracts.IListLanguageVariantsOfItemResponseContract[]>(
                url,
                {},
                config
            )
        );
    }

    async listLanguageVariantsOfContentTypeWithComponents(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<LanguageVariantResponses.ListLanguageVariantsOfContentTypeWithComponentsResponse> {
        return languageVariantMapper.mapLanguageVariantsOfContentTypeWithComponentsResponse(
            await this.getResponseAsync<LanguageVariantContracts.IListLanguageVariantsOfContentTypeWithComponentsResponseContract>(
                url,
                {},
                config
            )
        );
    }

    async listLanguageVariantsOfContentType(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<LanguageVariantResponses.ListLanguageVariantsOfContentTypeResponse> {
        return languageVariantMapper.mapLanguageVariantsOfContentTypeResponse(
            await this.getResponseAsync<LanguageVariantContracts.IListLanguageVariantsOfContentTypeResponseContract>(
                url,
                {},
                config
            )
        );
    }

    async listLanguageVariantsByCollection(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<LanguageVariantResponses.ListLanguageVariantsByCollectionResponse> {
        return languageVariantMapper.mapLanguageVariantsByCollectionResponse(
            await this.getResponseAsync<LanguageVariantContracts.IListLanguageVariantsByCollectionResponseContract>(
                url,
                {},
                config
            )
        );
    }

    async listLanguages(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<LanguageResponses.ListLanguagesResponse> {
        return languageMapper.mapListLanguagesResponse(
            await this.getResponseAsync<LanguageContracts.IListLanguagesResponseContract>(url, {}, config)
        );
    }

    async viewLanguage(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<LanguageResponses.ViewLanguageResponse> {
        return languageMapper.mapViewLanguageResponse(
            await this.getResponseAsync<LanguageContracts.IViewLanguageResponseContract>(url, {}, config)
        );
    }

    async addLanguage(
        url: string,
        config: IContentManagementQueryConfig,
        data: LanguageModels.IAddLanguageData
    ): Promise<LanguageResponses.AddLanguageResponse> {
        return languageMapper.mapAddLanguageResponse(
            await this.postResponseAsync<LanguageContracts.IAddLanguageResponseContract>(url, data, {}, config)
        );
    }

    async modifyLanguage(
        url: string,
        config: IContentManagementQueryConfig,
        data: LanguageModels.IModifyLanguageData[]
    ): Promise<LanguageResponses.ModifyLanguageResponse> {
        return languageMapper.mapModifyLanguageResponse(
            await this.patchResponseAsync<LanguageContracts.IModifyLanguageResponseContract>(url, data, {}, config)
        );
    }

    async listWebhooks(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<WebhookResponses.WebhookListResponse> {
        return webhookMapper.mapWebhooksListResponse(
            await this.getResponseAsync<WebhookContracts.IWebhookListContract>(url, {}, config)
        );
    }

    async getWebhook(url: string, config: IContentManagementQueryConfig): Promise<WebhookResponses.GetWebhookResponse> {
        return webhookMapper.mapGetWebhookResponse(
            await this.getResponseAsync<WebhookContracts.IGetWebhookContract>(url, {}, config)
        );
    }

    async addWebhook(
        url: string,
        config: IContentManagementQueryConfig,
        data: WebhookModels.IAddWebhookData
    ): Promise<WebhookResponses.AddWebhookResponse> {
        return webhookMapper.mapAddWebhookResponse(
            await this.postResponseAsync<WebhookContracts.IAddWebhookContract>(url, data, {}, config)
        );
    }

    async enableWebhook(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<WebhookResponses.AddWebhookResponse> {
        return webhookMapper.mapEnableWebhookResponse(
            await this.putResponseAsync<WebhookContracts.IEnableWebhookContract>(url, {}, {}, config)
        );
    }

    async disableWebhook(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<WebhookResponses.DisableWebhookResponse> {
        return webhookMapper.mapDisableWebhookResponse(
            await this.putResponseAsync<WebhookContracts.IDisableWebhookContract>(url, {}, {}, config)
        );
    }

    async deleteWebhook(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return webhookMapper.mapEmptyResponse(
            await this.deleteResponseAsync<BaseResponses.EmptyContentManagementResponse>(url, {}, config)
        );
    }

    async listAssetFolders(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<AssetFolderResponses.AssetFoldersListResponse> {
        return assetFolderMapper.mapListAssetFoldersResponse(
            await this.getResponseAsync<AssetFolderContracts.IListAssetFoldersResponseContract>(url, {}, config)
        );
    }

    async addAssetFolders(
        url: string,
        config: IContentManagementQueryConfig,
        data: AssetFolderModels.IAddAssetFoldersData
    ): Promise<AssetFolderResponses.AddAssetFoldersResponse> {
        return assetFolderMapper.mapAddAssetFoldersResponse(
            await this.postResponseAsync<AssetFolderContracts.IAddAssetFoldersResponseContract>(url, data, {}, config)
        );
    }

    async modifyAssetFolders(
        url: string,
        config: IContentManagementQueryConfig,
        data: AssetFolderModels.IModifyAssetFoldersData[]
    ): Promise<AssetFolderResponses.ModifyAssetFoldersResponse> {
        return assetFolderMapper.mapModifyAssetFoldersResponse(
            await this.patchResponseAsync<AssetFolderContracts.IModifyAssetFoldersDataResponseContract>(
                url,
                data,
                {},
                config
            )
        );
    }

    async listCollections(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<CollectionResponses.CollectionsListResponse> {
        return collectionsMappers.mapListCollectionsResponse(
            await this.getResponseAsync<CollectionContracts.ICollectionListResponseContract>(url, {}, config)
        );
    }

    async listRoles(url: string, config: IContentManagementQueryConfig): Promise<RoleResponses.RoleListResponse> {
        return roleMapper.mapRoleListResponse(
            await this.getResponseAsync<RoleContracts.IRoleListResponseContract>(url, {}, config)
        );
    }

    async setCollections(
        url: string,
        config: IContentManagementQueryConfig,
        data: CollectionModels.ISetCollectionData[]
    ): Promise<CollectionResponses.SetCollectionsResponse> {
        return collectionsMappers.mapSetCollectionsResponse(
            await this.patchResponseAsync<CollectionContracts.ISetCollectionsResponseContract>(url, data, {}, config)
        );
    }

    async inviteProjectUser(
        url: string,
        config: IContentManagementQueryConfig,
        data: ProjectUserModels.IInviteUserData
    ): Promise<ProjectUsersResponses.InviteUserResponse> {
        return projectUserMapper.mapInviteUserResponse(
            await this.postResponseAsync<ProjectUserContracts.IInviteUserResponseContract>(url, data, {}, config)
        );
    }

    async changeUserRoles(
        url: string,
        config: IContentManagementQueryConfig,
        data: ProjectUserModels.IChangeUserRoleData
    ): Promise<ProjectUsersResponses.ChangeUserRolesResponse> {
        return projectUserMapper.mapChangeUserRolesResponse(
            await this.putResponseAsync<ProjectUserContracts.IChangeUserRolesResponseContract>(url, data, {}, config)
        );
    }

    private async getListAllResponseInternalAsync<
        TResponse extends BaseResponses.IContentManagementListResponse
    >(data: {
        xContinuationToken?: string;
        getResponse: (xContinuationToken?: string) => Promise<TResponse>;
        resolvedResponses: TResponse[];
        listQueryConfig?: IContentManagementListQueryConfig<TResponse>;
    }): Promise<TResponse[]> {
        const response = await data.getResponse(data.xContinuationToken);

        if (data.listQueryConfig?.delayBetweenRequests) {
            await this.sleep(data.listQueryConfig.delayBetweenRequests);
        }

        data.resolvedResponses.push(response);

        if (data.listQueryConfig?.responseFetched) {
            data.listQueryConfig.responseFetched(response, data.xContinuationToken);
        }

        if (response.data.pagination.continuationToken) {
            // recursively fetch next page data
            return await this.getListAllResponseInternalAsync({
                xContinuationToken: response.data.pagination.continuationToken,
                getResponse: data.getResponse,
                resolvedResponses: data.resolvedResponses
            });
        }

        return data.resolvedResponses;
    }

    private sleep(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}
