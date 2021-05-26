import { IHttpService, ISDKInfo } from '@kentico/kontent-core';
import { LanguageVariantElements } from '../models/language-variants/language-variant-elements-builder';

import { IManagementClientConfig } from '../config/imanagement-client-config.interface';
import {
    AssetContracts,
    AssetFolderContracts,
    ContentItemContracts,
    ContentTypeContracts,
    ContentTypeSnippetContracts,
    LanguageContracts,
    LanguageVariantContracts,
    ProjectContracts,
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
    genericMapper
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
    IContentManagementListQueryConfig
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
    GenericResponses
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
            await this.getResponseAsync<TaxonomyContracts.ITaxonomyContract[]>(url, {}, config)
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

    async uploadBinaryFile(
        url: string,
        data: AssetModels.IUploadBinaryFileRequestData,
        config: IContentManagementQueryConfig
    ): Promise<AssetResponses.UploadBinaryFileResponse> {
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
