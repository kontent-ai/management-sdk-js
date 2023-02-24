import { IHttpService, ISDKInfo } from '@kontent-ai/core-sdk';

import { IManagementClientConfig } from '../config/imanagement-client-config.interface';
import {
    AssetContracts,
    AssetFolderContracts,
    AssetRenditionContracts,
    CollectionContracts,
    ContentItemContracts,
    ContentTypeContracts,
    ContentTypeSnippetContracts,
    EnvironmentContracts,
    LanguageContracts,
    LanguageVariantContracts,
    ProjectContracts,
    ProjectUserContracts,
    RoleContracts,
    SubscriptionContracts,
    SpaceContracts,
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
    projectUserMapper,
    assetRenditionMapper,
    spacesMapper
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
    ProjectUserModels,
    AssetRenditionModels,
    SpaceModels
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
    ProjectUsersResponses,
    AssetRenditionResponses,
    SpaceResponses
} from '../responses';
import { BaseManagementQueryService } from './base-management-service.class';
import { EnvironmentResponses } from '../responses/environments/environment-responses';
import { environmentMapper } from '../mappers/environment-mapper';
import { EnvironmentModels } from '../models/environments/environment.models';

export class ManagementQueryService extends BaseManagementQueryService<any> {
    constructor(
        protected config: IManagementClientConfig,
        protected httpService: IHttpService<any>,
        protected sdkInfo: ISDKInfo
    ) {
        super(config, httpService, sdkInfo);
    }

    async genericPostResponseAsync(
        url: string,
        data: any,
        config: IContentManagementQueryConfig
    ): Promise<GenericResponses.GenericResponse> {
        return genericMapper.mapGenericResponse(await super.postResponseAsync<void>(url, data, {}, config));
    }

    async genericPatchResponseAsync(
        url: string,
        data: any,
        config: IContentManagementQueryConfig
    ): Promise<GenericResponses.GenericResponse> {
        return genericMapper.mapGenericResponse(await super.patchResponseAsync<void>(url, data, {}, config));
    }

    async genericDeleteResponseAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<GenericResponses.GenericResponse> {
        return genericMapper.mapGenericResponse(await super.deleteResponseAsync<void>(url, {}, config));
    }

    async genericGetResponseAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<GenericResponses.GenericResponse> {
        return genericMapper.mapGenericResponse(await super.getResponseAsync<void>(url, {}, config));
    }

    async genericPutResponseAsync(
        url: string,
        data: any,
        config: IContentManagementQueryConfig
    ): Promise<GenericResponses.GenericResponse> {
        return genericMapper.mapGenericResponse(await super.putResponseAsync<void>(url, data, {}, config));
    }

    async getListAllResponseAsync<
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

    async publishLanguageVariantAsync(
        url: string,
        data: WorkflowModels.IPublishLanguageVariantData | undefined,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return workflowMapper.mapEmptyResponse(await this.putResponseAsync<void>(url, data, {}, config));
    }

    async createNewVersionOfLanguageVariantAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return workflowMapper.mapEmptyResponse(await this.putResponseAsync<void>(url, undefined, {}, config));
    }

    async unpublishLanguageVariantAsync(
        url: string,
        data: WorkflowModels.IUnpublishLanguageVarianthData | undefined,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return workflowMapper.mapEmptyResponse(await this.putResponseAsync<void>(url, data, {}, config));
    }

    async cancelScheduledPublishingOfLanguageVariantAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return workflowMapper.mapEmptyResponse(await this.putResponseAsync<void>(url, undefined, {}, config));
    }

    async cancelScheduledUnpublishingOfLanguageVariantAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return workflowMapper.mapEmptyResponse(await this.putResponseAsync<void>(url, undefined, {}, config));
    }

    async changeWorkflowStepOfLanguageVariantAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return workflowMapper.mapEmptyResponse(await this.putResponseAsync<void>(url, undefined, {}, config));
    }

    async changeWorkflowOfLanguageVariantAsync(
        url: string,
        data: WorkflowModels.IChangeWorkflowOfLanguageVariantData,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return workflowMapper.mapEmptyResponse(await this.putResponseAsync<void>(url, data, {}, config));
    }

    async listWorkflowStepsAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<WorkflowResponses.ListWorkflowStepsResponse> {
        return workflowMapper.mapListWorkflowStepsResponse(
            await this.getResponseAsync<WorkflowContracts.IListWorkflowStepsResponseContract>(url, {}, config)
        );
    }

    async listWorkflowsAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<WorkflowResponses.ListWorkflowsResponse> {
        return workflowMapper.mapListWorkflowsResponse(
            await this.getResponseAsync<WorkflowContracts.IListWorkflowsResponseContract>(url, {}, config)
        );
    }

    async addWorkflowAsync(
        url: string,
        config: IContentManagementQueryConfig,
        data: WorkflowModels.IAddWorkflowData
    ): Promise<WorkflowResponses.AddWorkflowResponse> {
        return workflowMapper.mapAddWorkflowResponse(
            await this.postResponseAsync<WorkflowContracts.IAddWorkflowContract>(url, data, {}, config)
        );
    }

    async updateWorkflowAsync(
        url: string,
        config: IContentManagementQueryConfig,
        data: WorkflowModels.IUpdateWorkflowData
    ): Promise<WorkflowResponses.AddWorkflowResponse> {
        return workflowMapper.mapUpdateWorkflowResponse(
            await this.putResponseAsync<WorkflowContracts.IUpdateWorkflowContract>(url, data, {}, config)
        );
    }

    async deleteWorkflowAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return webhookMapper.mapEmptyResponse(
            await this.deleteResponseAsync<BaseResponses.EmptyContentManagementResponse>(url, {}, config)
        );
    }

    async viewContentTypeSnippetAsync(
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

    async deleteContentTypeSnippetAsync(
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

    async addContentTypeSnippetAsync(
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

    async listContentTypeSnippetsAsync(
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

    async projectInformationAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<ProjectResponses.ProjectInformationResponse> {
        return projectMapper.mapProjectInformationResponse(
            await this.getResponseAsync<ProjectContracts.IProjectInformationResponseContract>(url, {}, config)
        );
    }

    async listProjectValidationIssuesAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<ProjectResponses.ProjectValidationIssuesListResponse> {
        return projectMapper.mapProjectValidationIssuesListResponse(
            await this.getResponseAsync<ProjectContracts.IProjectValidationListResponseContract>(url, {}, config)
        );
    }

    async startProjectValidationAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<ProjectResponses.StartProjectValidationResponse> {
        return projectMapper.mapStartProjectValidationResponse(
            await this.postResponseAsync<ProjectContracts.IStartProjectValidationResponseContract>(url, {}, {}, config)
        );
    }

    async checkProjectValidationAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<ProjectResponses.CheckProjectValidationResponse> {
        return projectMapper.mapCheckProjectValidationResponse(
            await this.getResponseAsync<ProjectContracts.ICheckProjectValidationResponseContract>(url, {}, config)
        );
    }

    async validateProjectContentAsync(
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

    async addContentTypeAsync(
        url: string,
        data: ContentTypeModels.IAddContentTypeData,
        config: IContentManagementQueryConfig
    ): Promise<ContentTypeResponses.AddContentTypeResponse> {
        return contentTypeMapper.mapAddContentTypeResponse(
            await this.postResponseAsync<ContentTypeContracts.IAddContentTypeResponseContract>(url, data, {}, config)
        );
    }

    async deleteContentTypeAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return contentTypeMapper.mapEmptyResponse(
            await this.deleteResponseAsync<ContentTypeContracts.IDeleteContentTypeResponseContract>(url, {}, config)
        );
    }

    async modifyContentTypeAsync(
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

    async modifyTaxonomyAsync(
        url: string,
        config: IContentManagementQueryConfig,
        data: TaxonomyModels.IModifyTaxonomyData[]
    ): Promise<TaxonomyResponses.ModifyTaxonomyResponse> {
        return taxonomyMappper.mapModifyTaxonomyResponse(
            await this.patchResponseAsync<TaxonomyContracts.IModifyTaxonomyResponseContract>(url, data, {}, config)
        );
    }

    async modifyContentTypeSnippetAsync(
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

    async viewContentTypeAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<ContentTypeResponses.ViewContentTypeResponse> {
        return contentTypeMapper.mapViewContentTypeResponse(
            await this.getResponseAsync<ContentTypeContracts.IViewContentTypeResponseContract>(url, {}, config)
        );
    }

    async listContentTypesAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<ContentTypeResponses.ContentTypeListResponse> {
        return contentTypeMapper.mapListingResponse(
            await this.getResponseAsync<ContentTypeContracts.IContentTypeListResponseContract>(url, {}, config)
        );
    }

    async listAssetRenditionsAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<AssetRenditionResponses.AssetRenditionsListResponse> {
        return assetRenditionMapper.mapListAssetRenditionsResponse(
            await this.getResponseAsync<AssetRenditionContracts.IListRenditionResponseContract>(url, {}, config)
        );
    }

    async viewAssetRenditionAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<AssetRenditionResponses.ViewAssetRenditionResponse> {
        return assetRenditionMapper.mapViewAssetRenditionResponse(
            await this.getResponseAsync<AssetRenditionContracts.IViewRenditionResponseContract>(url, {}, config)
        );
    }

    async addAssetRenditionAsync(
        url: string,
        config: IContentManagementQueryConfig,
        data: AssetRenditionModels.IAddAssetRenditionData
    ): Promise<AssetRenditionResponses.AddAssetRenditionResponse> {
        return assetRenditionMapper.mapAddAssetRenditionResponse(
            await this.postResponseAsync<AssetRenditionContracts.IAddAssetRenditionResponseContract>(
                url,
                data,
                {},
                config
            )
        );
    }

    async modifyAssetRenditionAsync(
        url: string,
        config: IContentManagementQueryConfig,
        data: AssetRenditionModels.IModifyAssetRenditionData
    ): Promise<AssetRenditionResponses.AddAssetRenditionResponse> {
        return assetRenditionMapper.mapModifyAssetRenditionResponse(
            await this.putResponseAsync<AssetRenditionContracts.IModifyAssetRenditionResponseContract>(
                url,
                data,
                {},
                config
            )
        );
    }

    async addTaxonomyAsync(
        url: string,
        data: TaxonomyModels.IAddTaxonomyRequestModel,
        config: IContentManagementQueryConfig
    ): Promise<TaxonomyResponses.AddTaxonomyResponse> {
        return taxonomyMappper.mapAddTaxonomyResponse(
            await this.postResponseAsync<TaxonomyContracts.IAddTaxonomyResponseContract>(url, data, {}, config)
        );
    }

    async deleteTaxonomyAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return taxonomyMappper.mapEmptyResponse(
            await this.deleteResponseAsync<TaxonomyContracts.IDeleteTaxonomyResponseContract>(url, {}, config)
        );
    }

    async getTaxonomyAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<TaxonomyResponses.GetTaxonomyResponse> {
        return taxonomyMappper.mapGetTaxonomyResponse(
            await this.getResponseAsync<TaxonomyContracts.IGetTaxonomyResponseContract>(url, {}, config)
        );
    }

    async listTaxonomiesAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<TaxonomyResponses.TaxonomyListResponse> {
        return taxonomyMappper.mapListingTaxonomysResponse(
            await this.getResponseAsync<TaxonomyContracts.IListTaxonomyResponseContract>(url, {}, config)
        );
    }

    async deleteAssetAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return assetsMapper.mapEmptyResponse(
            await this.deleteResponseAsync<AssetContracts.IDeleteAssetResponseContract>(url, {}, config)
        );
    }

    async upsertAssetAsync(
        url: string,
        data: AssetModels.IUpsertAssetRequestData,
        config: IContentManagementQueryConfig
    ): Promise<AssetResponses.UpdateAssetResponse> {
        return assetsMapper.mapUpsertAssetResponse(
            await this.putResponseAsync<AssetContracts.IUpsertAssetResponseContract>(url, data, {}, config)
        );
    }

    async addAssetAsync(
        url: string,
        data: AssetModels.IAddAssetRequestData,
        config: IContentManagementQueryConfig
    ): Promise<AssetResponses.AddAssetResponse> {
        return assetsMapper.mapAddAssetResponse(
            await this.postResponseAsync<AssetContracts.IAddAssetResponseContract>(url, data, {}, config)
        );
    }

    async listSubscriptionProjectsAsync(
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

    async litSubscriptionUsersAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<SubscriptionResponses.SubscriptionUsersListResponse> {
        return subscriptionMapper.mapSubscriptionUsersListResponse(
            await this.getResponseAsync<SubscriptionContracts.IListSubscriptionUsersResponseContract>(url, {}, config)
        );
    }

    async viewSubscriptionProjectAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<SubscriptionResponses.ViewSubscriptionProjectResponse> {
        return subscriptionMapper.mapViewSubscriptionProjectResponse(
            await this.getResponseAsync<SubscriptionContracts.ISubscriptionProjectContract>(url, {}, config)
        );
    }

    async viewSubscriptionUserAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<SubscriptionResponses.ViewSubscriptionUserResponse> {
        return subscriptionMapper.mapViewSubscriptionUserResponse(
            await this.getResponseAsync<SubscriptionContracts.ISubscriptionUserContract>(url, {}, config)
        );
    }

    async activateUserInAllProjectsAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return contentItemsMapper.mapEmptyResponse(
            await this.putResponseAsync<ContentItemContracts.IDeleteContentItemResponseContract>(url, {}, {}, config)
        );
    }

    async deactivateUserInAllProjectsAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return contentItemsMapper.mapEmptyResponse(
            await this.putResponseAsync<ContentItemContracts.IDeleteContentItemResponseContract>(url, {}, {}, config)
        );
    }

    async uploadAssetFromUrlAsync(
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

        // config needs to be cloned as otherwise it would be mutated with invalid
        // headers in uploadBinaryFile method
        const configForUploadBinaryFile = JSON.parse(JSON.stringify(config));

        // upload binary file
        const uploadedBinaryFileResponse = await this.uploadBinaryFileAsync(
            uploadBinaryFileUrl,
            {
                binaryData: binaryData,
                contentType: mimeType,
                filename: data.binaryFile.filename,
                contentLength: binaryData.byteLength
            },
            configForUploadBinaryFile
        );

        // creta asset & assign it to binary file
        const assetResponse = await this.addAssetAsync(
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

    async uploadBinaryFileAsync(
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

    async viewAssetAsync(url: string, config: IContentManagementQueryConfig): Promise<AssetResponses.ViewAssetResponse> {
        return assetsMapper.mapViewAssetResponse(
            await this.getResponseAsync<AssetContracts.IAssetModelContract>(url, {}, config)
        );
    }

    async listAssetsAsync(url: string, config: IContentManagementQueryConfig): Promise<AssetResponses.AssetsListResponse> {
        return assetsMapper.mapListingAssetsResponse(
            await this.getResponseAsync<AssetContracts.IAssetsListingResponseContract>(url, {}, config)
        );
    }

    async listContentItemsAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<ContentItemResponses.ContentItemsResponse> {
        return contentItemsMapper.mapListingItemsResponse(
            await this.getResponseAsync<ContentItemContracts.IContentItemsListingResponseContract>(url, {}, config)
        );
    }

    async viewContentItemAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<ContentItemResponses.ViewContentItemResponse> {
        return contentItemsMapper.mapViewContentItemResponse(
            await this.getResponseAsync<ContentItemContracts.IViewContentItemResponseContract>(url, {}, config)
        );
    }

    async addContentItemAsync(
        url: string,
        data: ContentItemContracts.IAddContentItemPostContract,
        config: IContentManagementQueryConfig
    ): Promise<ContentItemResponses.AddContentItemResponse> {
        return contentItemsMapper.mapAddContentItemResponse(
            await this.postResponseAsync<ContentItemContracts.IAddContentItemResponseContract>(url, data, {}, config)
        );
    }

    async upsertContentItemAsync(
        url: string,
        data: ContentItemContracts.IUpsertContentItemPostContract,
        config: IContentManagementQueryConfig
    ): Promise<ContentItemResponses.UpsertContentItemResponse> {
        return contentItemsMapper.mapUpsertContentItemResponse(
            await this.putResponseAsync<ContentItemContracts.IUpsertContentItemResponseContract>(url, data, {}, config)
        );
    }

    async updateContentItemAsync(
        url: string,
        data: ContentItemContracts.IUpdateContentItemPostContract,
        config: IContentManagementQueryConfig
    ): Promise<ContentItemResponses.AddContentItemResponse> {
        return contentItemsMapper.mapUpdateContentItemResponse(
            await this.putResponseAsync<ContentItemContracts.IUpdateContentItemResponseContract>(url, data, {}, config)
        );
    }

    async deleteContentItemAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return contentItemsMapper.mapEmptyResponse(
            await this.deleteResponseAsync<ContentItemContracts.IDeleteContentItemResponseContract>(url, {}, config)
        );
    }

    async deleteLanguageVariantAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return contentItemsMapper.mapEmptyResponse(
            await this.deleteResponseAsync<ContentItemContracts.IDeleteContentItemResponseContract>(url, {}, config)
        );
    }

    async upsertLanguageVariantAsync(
        url: string,
        data: LanguageVariantContracts.IUpsertLanguageVariantPostContract,
        config: IContentManagementQueryConfig
    ): Promise<LanguageVariantResponses.UpsertLanguageVariantResponse> {
        return languageVariantMapper.mapUpsertLanguageVariantResponse(
            await this.putResponseAsync<LanguageVariantContracts.IUpsertLanguageVariantResponseContract>(
                url,
                data,
                {},
                config
            )
        );
    }

    async viewLanguageVariantAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<LanguageVariantResponses.ViewLanguageVariantResponse> {
        return languageVariantMapper.mapViewLanguageVariantResponse(
            await this.getResponseAsync<LanguageVariantContracts.IViewLanguageVariantResponseContract>(url, {}, config)
        );
    }

    async listLanguageVariantsOfItemAsync(
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

    async listLanguageVariantsOfContentTypeWithComponentsAsync(
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

    async listLanguageVariantsOfContentTypeAsync(
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

    async listLanguageVariantsByCollectionAsync(
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

    async listLanguagesAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<LanguageResponses.ListLanguagesResponse> {
        return languageMapper.mapListLanguagesResponse(
            await this.getResponseAsync<LanguageContracts.IListLanguagesResponseContract>(url, {}, config)
        );
    }

    async viewLanguageAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<LanguageResponses.ViewLanguageResponse> {
        return languageMapper.mapViewLanguageResponse(
            await this.getResponseAsync<LanguageContracts.IViewLanguageResponseContract>(url, {}, config)
        );
    }

    async addLanguageAsync(
        url: string,
        config: IContentManagementQueryConfig,
        data: LanguageModels.IAddLanguageData
    ): Promise<LanguageResponses.AddLanguageResponse> {
        return languageMapper.mapAddLanguageResponse(
            await this.postResponseAsync<LanguageContracts.IAddLanguageResponseContract>(url, data, {}, config)
        );
    }

    async modifyLanguageAsync(
        url: string,
        config: IContentManagementQueryConfig,
        data: LanguageModels.IModifyLanguageData[]
    ): Promise<LanguageResponses.ModifyLanguageResponse> {
        return languageMapper.mapModifyLanguageResponse(
            await this.patchResponseAsync<LanguageContracts.IModifyLanguageResponseContract>(url, data, {}, config)
        );
    }

    async listWebhooksAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<WebhookResponses.WebhookListResponse> {
        return webhookMapper.mapWebhooksListResponse(
            await this.getResponseAsync<WebhookContracts.IWebhookListContract>(url, {}, config)
        );
    }

    async getWebhookAsync(url: string, config: IContentManagementQueryConfig): Promise<WebhookResponses.GetWebhookResponse> {
        return webhookMapper.mapGetWebhookResponse(
            await this.getResponseAsync<WebhookContracts.IGetWebhookContract>(url, {}, config)
        );
    }

    async addWebhookAsync(
        url: string,
        config: IContentManagementQueryConfig,
        data: WebhookModels.IAddWebhookData
    ): Promise<WebhookResponses.AddWebhookResponse> {
        return webhookMapper.mapAddWebhookResponse(
            await this.postResponseAsync<WebhookContracts.IAddWebhookContract>(url, data, {}, config)
        );
    }

    async enableWebhookAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<WebhookResponses.AddWebhookResponse> {
        return webhookMapper.mapEnableWebhookResponse(
            await this.putResponseAsync<WebhookContracts.IEnableWebhookContract>(url, {}, {}, config)
        );
    }

    async disableWebhookAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<WebhookResponses.DisableWebhookResponse> {
        return webhookMapper.mapDisableWebhookResponse(
            await this.putResponseAsync<WebhookContracts.IDisableWebhookContract>(url, {}, {}, config)
        );
    }

    async deleteWebhookAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return webhookMapper.mapEmptyResponse(
            await this.deleteResponseAsync<BaseResponses.EmptyContentManagementResponse>(url, {}, config)
        );
    }

    async listAssetFoldersAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<AssetFolderResponses.AssetFoldersListResponse> {
        return assetFolderMapper.mapListAssetFoldersResponse(
            await this.getResponseAsync<AssetFolderContracts.IListAssetFoldersResponseContract>(url, {}, config)
        );
    }

    async addAssetFoldersAsync(
        url: string,
        config: IContentManagementQueryConfig,
        data: AssetFolderModels.IAddAssetFoldersData
    ): Promise<AssetFolderResponses.AddAssetFoldersResponse> {
        return assetFolderMapper.mapAddAssetFoldersResponse(
            await this.postResponseAsync<AssetFolderContracts.IAddAssetFoldersResponseContract>(url, data, {}, config)
        );
    }

    async modifyAssetFoldersAsync(
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

    async listCollectionsAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<CollectionResponses.CollectionsListResponse> {
        return collectionsMappers.mapListCollectionsResponse(
            await this.getResponseAsync<CollectionContracts.ICollectionListResponseContract>(url, {}, config)
        );
    }

    async listRolesAsync(url: string, config: IContentManagementQueryConfig): Promise<RoleResponses.RoleListResponse> {
        return roleMapper.mapRoleListResponse(
            await this.getResponseAsync<RoleContracts.IRoleListResponseContract>(url, {}, config)
        );
    }

    async viewRoleAsync(url: string, config: IContentManagementQueryConfig): Promise<RoleResponses.ViewRoleResponse> {
        return roleMapper.mapViewRoleResponse(
            await this.getResponseAsync<RoleContracts.IRoleContract>(url, {}, config)
        );
    }

    async setCollectionsAsync(
        url: string,
        config: IContentManagementQueryConfig,
        data: CollectionModels.ISetCollectionData[]
    ): Promise<CollectionResponses.SetCollectionsResponse> {
        return collectionsMappers.mapSetCollectionsResponse(
            await this.patchResponseAsync<CollectionContracts.ISetCollectionsResponseContract>(url, data, {}, config)
        );
    }

    async inviteProjectUserAsync(
        url: string,
        config: IContentManagementQueryConfig,
        data: ProjectUserModels.IInviteUserData
    ): Promise<ProjectUsersResponses.InviteUserResponse> {
        return projectUserMapper.mapInviteUserResponse(
            await this.postResponseAsync<ProjectUserContracts.IInviteUserResponseContract>(url, data, {}, config)
        );
    }

    async changeUserRolesAsync(
        url: string,
        config: IContentManagementQueryConfig,
        data: ProjectUserModels.IChangeUserRoleData
    ): Promise<ProjectUsersResponses.ChangeUserRolesResponse> {
        return projectUserMapper.mapChangeUserRolesResponse(
            await this.putResponseAsync<ProjectUserContracts.IChangeUserRolesResponseContract>(url, data, {}, config)
        );
    }

    async getEnvironmentCloningStateAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<EnvironmentResponses.GetCloningStateResponse> {
        return environmentMapper.mapGetEnvironmentCloningStateResponse(
            await this.getResponseAsync<EnvironmentContracts.IEnvironmentCloningStateResponseContract>(url, {}, config)
        );
    }

    async deleteEnvironmentAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return environmentMapper.mapEmptyResponse(
            await this.deleteResponseAsync<EnvironmentContracts.IDeleteEnvironmentResponseContract>(url, {}, config)
        );
    }

    async modifyEnvironmentAsync(
        url: string,
        config: IContentManagementQueryConfig,
        data: EnvironmentModels.IModifyEnvironmentData[]
    ): Promise<EnvironmentResponses.ModifyEnvironmentResponse> {
        return environmentMapper.mapModifyEnvironmentResponse(
            await this.patchResponseAsync<EnvironmentContracts.IModifyEnvironmentResponseContract>(
                url,
                data,
                {},
                config
            )
        );
    }

    async cloneEnvironmentAsync(
        url: string,
        config: IContentManagementQueryConfig,
        data: EnvironmentModels.ICloneEnvironmentData
    ): Promise<EnvironmentResponses.CloneEnvironmentResponse> {
        return environmentMapper.mapCloneEnvironmentResponse(
            await this.postResponseAsync<EnvironmentContracts.ICloneEnvironmentResponseContract>(url, data, {}, config)
        );
    }

    async markEnvironmentAsProductionAsync(
        url: string,
        config: IContentManagementQueryConfig,
        data: EnvironmentModels.IMarkEnvironmentAsProductionData
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return environmentMapper.mapEmptyResponse(
            await this.putResponseAsync<EnvironmentContracts.IMarkEnvironmentAsProductionResponseContract>(
                url,
                data,
                {},
                config
            )
        );
    }

    async addSpaceAsync(
        url: string,
        data: SpaceContracts.IAddSpacePostContract,
        config: IContentManagementQueryConfig
    ): Promise<SpaceResponses.AddSpaceResponse> {
        return spacesMapper.mapAddSpaceResponse(
            await this.postResponseAsync<SpaceContracts.IAddSpaceResponseContract>(url, data, {}, config)
        );
    }

    async viewSpaceAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<SpaceResponses.ViewSpaceResponse> {
        return spacesMapper.mapViewSpaceResponse(
            await this.getResponseAsync<SpaceContracts.IViewSpaceResponseContract>(url, {}, config)
        );
    }

    async listSpacesAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<SpaceResponses.SpacesResponse> {
        return spacesMapper.mapListingSpacesResponse(
            await this.getResponseAsync<SpaceContracts.ISpacesListingResponseContract>(url, {}, config)
        );
    }

    async deleteSpaceAsync(
        url: string,
        config: IContentManagementQueryConfig
    ): Promise<BaseResponses.EmptyContentManagementResponse> {
        return contentTypeMapper.mapEmptyResponse(
            await this.deleteResponseAsync<SpaceContracts.IDeleteSpaceResponseContact>(url, {}, config)
        );
    }

    async modifySpaceAsync(
        url: string,
        config: IContentManagementQueryConfig,
        data: SpaceModels.IModifySpaceeData[]
    ): Promise<SpaceResponses.ModifySpaceResponse> {
        return spacesMapper.mapModifySpaceResponse(
            await this.patchResponseAsync<SpaceContracts.IModifySpaceResponseContract>(
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
            await this.sleepAsync(data.listQueryConfig.delayBetweenRequests);
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

    private async sleepAsync(ms: number): Promise<void> {
        return await new Promise((resolve) => setTimeout(resolve, ms));
    }
}
