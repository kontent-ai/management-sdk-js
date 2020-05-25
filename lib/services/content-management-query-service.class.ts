import { IHttpService, ISDKInfo } from '@kentico/kontent-core';
import { Observable, of } from 'rxjs';
import { flatMap, map, delay } from 'rxjs/operators';

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
    WorkflowContracts,
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
} from '../mappers';
import { webhookMapper } from '../mappers/webhook-mapper';
import {
    AssetModels,
    ContentTypeModels,
    ContentTypeSnippetModels,
    IContentManagementQueryConfig,
    LanguageModels,
    LanguageVariantModels,
    TaxonomyModels,
    WebhookModels,
    WorkflowModels,
    AssetFolderModels,
    IContentManagementListQueryConfig,
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
} from '../responses';
import { BaseContentManagementQueryService } from './base-content-management-service.class';

export class ContentManagementQueryService extends BaseContentManagementQueryService {

    private readonly defaultListQueryConfig: IContentManagementListQueryConfig;

    constructor(
        protected config: IManagementClientConfig,
        protected httpService: IHttpService,
        protected sdkInfo: ISDKInfo
    ) {
        super(config, httpService, sdkInfo);

        if (config.listQueryConfig) {
            this.defaultListQueryConfig = config.listQueryConfig;
        } else {
            this.defaultListQueryConfig = {
                delayBetweenRequests: 250
            };
        }
    }

    getListAllResponse<
        TResponse extends BaseResponses.IContentManagementListResponse,
        TAllResponse extends BaseResponses.IContentManagementListAllResponse
    >(data: {
        getResponse: (xContinuationToken?: string) => Observable<TResponse>;
        allResponseFactory: (items: any[], responses: TResponse[]) => TAllResponse;
        listQueryConfig?: IContentManagementListQueryConfig
    }): Observable<TAllResponse> {
        return this.getListAllResponseInternal({
            resolvedResponses: [],
            getResponse: data.getResponse,
            xContinuationToken: undefined,
            listQueryConfig: data.listQueryConfig
        }).pipe(
            map(responses => {
                return data.allResponseFactory(
                    responses.reduce((prev: any[], current) => {
                        prev.push(...current.data.items);
                        return prev;
                    }, []),
                    responses
                );
            })
        );
    }

    publishOrScheduleLanguageVariant(
        url: string,
        data: WorkflowModels.IPublishOrSchedulePublishData | undefined,
        config: IContentManagementQueryConfig
    ): Observable<BaseResponses.EmptyContentManagementResponse> {
        return this.putResponse<void>(url, data, {}, config).pipe(
            map(response => {
                return workflowMapper.mapEmptyResponse(response);
            })
        );
    }

    createNewVersionOfLanguageVariant(
        url: string,
        config: IContentManagementQueryConfig
    ): Observable<BaseResponses.EmptyContentManagementResponse> {
        return this.putResponse<void>(url, undefined, {}, config).pipe(
            map(response => {
                return workflowMapper.mapEmptyResponse(response);
            })
        );
    }

    unpublishLanguageVariant(
        url: string,
        config: IContentManagementQueryConfig
    ): Observable<BaseResponses.EmptyContentManagementResponse> {
        return this.putResponse<void>(url, undefined, {}, config).pipe(
            map(response => {
                return workflowMapper.mapEmptyResponse(response);
            })
        );
    }

    cancelScheduledPublishingOfLanguageVariant(
        url: string,
        config: IContentManagementQueryConfig
    ): Observable<BaseResponses.EmptyContentManagementResponse> {
        return this.putResponse<void>(url, undefined, {}, config).pipe(
            map(response => {
                return workflowMapper.mapEmptyResponse(response);
            })
        );
    }

    changeWorkflowStepOfLanguageVariant(
        url: string,
        config: IContentManagementQueryConfig
    ): Observable<BaseResponses.EmptyContentManagementResponse> {
        return this.putResponse<void>(url, undefined, {}, config).pipe(
            map(response => {
                return workflowMapper.mapEmptyResponse(response);
            })
        );
    }

    listWorkflowSteps(
        url: string,
        config: IContentManagementQueryConfig
    ): Observable<WorkflowResponses.ListWorkflowStepsResponse> {
        return this.getResponse<WorkflowContracts.IListWorkflowStepsResponseContract>(url, {}, config).pipe(
            map(response => {
                return workflowMapper.mapListWorkflowStepsResponse(response);
            })
        );
    }

    addContentType(
        url: string,
        data: ContentTypeModels.IAddContentTypeData,
        config: IContentManagementQueryConfig
    ): Observable<ContentTypeResponses.AddContentTypeResponse> {
        return this.postResponse<ContentTypeContracts.IAddContentTypeResponseContract>(url, data, {}, config).pipe(
            map(response => {
                return contentTypeMapper.mapAddContentTypeResponse(response);
            })
        );
    }

    viewContentTypeSnippet(
        url: string,
        config: IContentManagementQueryConfig
    ): Observable<ContentTypeSnippetResponses.ViewContentTypeSnippetResponse> {
        return this.getResponse<ContentTypeSnippetContracts.IViewContentTypeSnippetResponseContract>(
            url,
            {},
            config
        ).pipe(
            map(response => {
                return contentTypeSnippetMapper.mapViewContentTypeSnippetResponse(response);
            })
        );
    }

    deleteContentTypeSnippet(
        url: string,
        config: IContentManagementQueryConfig
    ): Observable<BaseResponses.EmptyContentManagementResponse> {
        return this.deleteResponse<ContentTypeSnippetContracts.IDeleteContentTypeSnippetResponseContract>(
            url,
            {},
            config
        ).pipe(
            map(response => {
                return contentTypeSnippetMapper.mapEmptyResponse(response);
            })
        );
    }

    addContentTypeSnippet(
        url: string,
        data: ContentTypeSnippetModels.IAddContentTypeSnippetData,
        config: IContentManagementQueryConfig
    ): Observable<ContentTypeSnippetResponses.AddContentTypeSnippetResponse> {
        return this.postResponse<ContentTypeSnippetContracts.IAddContentTypeSnippetResponseContract>(
            url,
            data,
            {},
            config
        ).pipe(
            map(response => {
                return contentTypeSnippetMapper.mapAddContentTypeSnippetResponse(response);
            })
        );
    }

    listContentTypeSnippets(
        url: string,
        config: IContentManagementQueryConfig
    ): Observable<ContentTypeSnippetResponses.ContentTypeSnippetListResponse> {
        return this.getResponse<ContentTypeSnippetContracts.IContentTypeSnippetListResponseContract>(
            url,
            {},
            config
        ).pipe(
            map(response => {
                return contentTypeSnippetMapper.mapListingResponse(response);
            })
        );
    }

    projectInformation(
        url: string,
        config: IContentManagementQueryConfig
    ): Observable<ProjectResponses.ProjectInformationResponse> {
        return this.getResponse<ProjectContracts.IProjectInformationResponseContract>(url, {}, config).pipe(
            map(response => {
                return projectMapper.mapProjectInformationResponse(response);
            })
        );
    }

    validateProjectContent(
        url: string,
        data: {
            projectId: string;
        },
        config: IContentManagementQueryConfig
    ): Observable<ProjectResponses.ValidateProjectContentResponse> {
        return this.postResponse<ProjectContracts.IProjectReportResponseContract>(url, data, {}, config).pipe(
            map(response => {
                return projectMapper.mapValidateProjectContentResponse(response);
            })
        );
    }

    deleteContentType(
        url: string,
        config: IContentManagementQueryConfig
    ): Observable<BaseResponses.EmptyContentManagementResponse> {
        return this.deleteResponse<ContentTypeContracts.IDeleteContentTypeResponseContract>(url, {}, config).pipe(
            map(response => {
                return contentTypeMapper.mapEmptyResponse(response);
            })
        );
    }

    modifyContentType(
        url: string,
        config: IContentManagementQueryConfig,
        data: ContentTypeModels.IModifyContentTypeData[]
    ): Observable<ContentTypeResponses.ModifyContentTypeResponse> {
        return this.patchResponse<ContentTypeContracts.IModifyContentTypeResponseContract>(url, data, {}, config).pipe(
            map(response => {
                return contentTypeMapper.mapModifyContentTypeResponse(response);
            })
        );
    }

    modifyTaxonomy(
        url: string,
        config: IContentManagementQueryConfig,
        data: TaxonomyModels.IModifyTaxonomyData[]
    ): Observable<TaxonomyResponses.ModifyTaxonomyResponse> {
        return this.patchResponse<TaxonomyContracts.IModifyTaxonomyResponseContract>(url, data, {}, config).pipe(
            map(response => {
                return taxonomyMappper.mapModifyTaxonomyResponse(response);
            })
        );
    }

    modifyContentTypeSnippet(
        url: string,
        config: IContentManagementQueryConfig,
        data: ContentTypeSnippetModels.IModifyContentTypeSnippetData[]
    ): Observable<ContentTypeSnippetResponses.ModifyContentTypeSnippetResponse> {
        return this.patchResponse<ContentTypeContracts.IModifyContentTypeResponseContract>(url, data, {}, config).pipe(
            map(response => {
                return contentTypeSnippetMapper.mapModifyContentTypeSnippetResponse(response);
            })
        );
    }

    viewContentType(
        url: string,
        config: IContentManagementQueryConfig
    ): Observable<ContentTypeResponses.ViewContentTypeResponse> {
        return this.getResponse<ContentTypeContracts.IViewContentTypeResponseContract>(url, {}, config).pipe(
            map(response => {
                return contentTypeMapper.mapViewContentTypeResponse(response);
            })
        );
    }

    listContentTypes(
        url: string,
        config: IContentManagementQueryConfig
    ): Observable<ContentTypeResponses.ContentTypeListResponse> {
        return this.getResponse<ContentTypeContracts.IContentTypeListResponseContract>(url, {}, config).pipe(
            map(response => {
                return contentTypeMapper.mapListingResponse(response);
            })
        );
    }

    addTaxonomy(
        url: string,
        data: TaxonomyModels.IAddTaxonomyRequestModel,
        config: IContentManagementQueryConfig
    ): Observable<TaxonomyResponses.AddTaxonomyResponse> {
        return this.postResponse<TaxonomyContracts.IAddTaxonomyResponseContract>(
            url,
            data,
            {},
            config
        ).pipe(
            map(response => {
                return taxonomyMappper.mapAddTaxonomyResponse(response);
            })
        );
    }

    deleteTaxonomy(
        url: string,
        config: IContentManagementQueryConfig
    ): Observable<BaseResponses.EmptyContentManagementResponse> {
        return this.deleteResponse<TaxonomyContracts.IDeleteTaxonomyResponseContract>(url, {}, config).pipe(
            map(response => {
                return taxonomyMappper.mapEmptyResponse(response);
            })
        );
    }

    getTaxonomy(url: string, config: IContentManagementQueryConfig): Observable<TaxonomyResponses.GetTaxonomyResponse> {
        return this.getResponse<TaxonomyContracts.IGetTaxonomyResponseContract>(url, {}, config).pipe(
            map(response => {
                return taxonomyMappper.mapGetTaxonomyResponse(response);
            })
        );
    }

    listTaxonomies(
        url: string,
        config: IContentManagementQueryConfig
    ): Observable<TaxonomyResponses.TaxonomyListResponse> {
        return this.getResponse<TaxonomyContracts.ITaxonomyContract[]>(url, {}, config).pipe(
            map(response => {
                return taxonomyMappper.mapListingTaxonomysResponse(response);
            })
        );
    }

    deleteAsset(
        url: string,
        config: IContentManagementQueryConfig
    ): Observable<BaseResponses.EmptyContentManagementResponse> {
        return this.deleteResponse<AssetContracts.IDeleteAssetResponseContract>(url, {}, config).pipe(
            map(response => {
                return assetsMapper.mapEmptyResponse(response);
            })
        );
    }

    upsertAsset(
        url: string,
        data: AssetModels.IUpsertAssetRequestData,
        config: IContentManagementQueryConfig
    ): Observable<AssetResponses.UpdateAssetResponse> {
        return this.putResponse<AssetContracts.IUpsertAssetResponseContract>(
            url,
            data,
            {},
            config
        ).pipe(
            map(response => {
                return assetsMapper.mapUpsertAssetResponse(response);
            })
        );
    }

    addAsset(
        url: string,
        data: AssetModels.IAddAssetRequestData,
        config: IContentManagementQueryConfig
    ): Observable<AssetResponses.AddAssetResponse> {
        return this.postResponse<AssetContracts.IAddAssetResponseContract>(
            url,
            data,
            {},
            config
        ).pipe(
            map(response => {
                return assetsMapper.mapAddAssetResponse(response);
            })
        );
    }

    uploadBinaryFile(
        url: string,
        data: AssetModels.IUploadBinaryFileRequestData,
        config: IContentManagementQueryConfig
    ): Observable<AssetResponses.UploadBinaryFileResponse> {
        return this.postResponse<AssetContracts.IUploadBinaryFileResponseContract>(
            url,
            data.binaryData,
            {},
            config
        ).pipe(
            map(response => {
                return assetsMapper.mapUploadBinaryFileResponse(response);
            })
        );
    }

    viewAsset(url: string, config: IContentManagementQueryConfig): Observable<AssetResponses.ViewAssetResponse> {
        return this.getResponse<AssetContracts.IAssetModelContract>(url, {}, config).pipe(
            map(response => {
                return assetsMapper.mapViewAssetResponse(response);
            })
        );
    }

    listAssets(url: string, config: IContentManagementQueryConfig): Observable<AssetResponses.AssetsListResponse> {
        return this.getResponse<AssetContracts.IAssetsListingResponseContract>(url, {}, config).pipe(
            map(response => {
                return assetsMapper.mapListingAssetsResponse(response);
            })
        );
    }

    listContentItems(
        url: string,
        config: IContentManagementQueryConfig
    ): Observable<ContentItemResponses.ContentItemsResponse> {
        return this.getResponse<ContentItemContracts.IContentItemsListingResponseContract>(url, {}, config).pipe(
            map(response => {
                return contentItemsMapper.mapListingItemsResponse(response);
            })
        );
    }

    viewContentItem(
        url: string,
        config: IContentManagementQueryConfig
    ): Observable<ContentItemResponses.ViewContentItemResponse> {
        return this.getResponse<ContentItemContracts.IViewContentItemResponseContract>(url, {}, config).pipe(
            map(response => {
                return contentItemsMapper.mapViewContentItemResponse(response);
            })
        );
    }

    addContentItem(
        url: string,
        data: ContentItemContracts.IAddContentItemPostContract,
        config: IContentManagementQueryConfig
    ): Observable<ContentItemResponses.AddContentItemResponse> {
        return this.postResponse<ContentItemContracts.IAddContentItemResponseContract>(url, data, {}, config).pipe(
            map(response => {
                return contentItemsMapper.mapAddContentItemResponse(response);
            })
        );
    }

    upsertContentItem(
        url: string,
        data: ContentItemContracts.IUpsertContentItemPostContract,
        config: IContentManagementQueryConfig
    ): Observable<ContentItemResponses.UpsertContentItemResponse> {
        return this.putResponse<ContentItemContracts.IUpsertContentItemResponseContract>(url, data, {}, config).pipe(
            map(response => {
                return contentItemsMapper.mapUpsertContentItemResponse(response);
            })
        );
    }

    updateContentItem(
        url: string,
        data: ContentItemContracts.IUpdateContentItemPostContract,
        config: IContentManagementQueryConfig
    ): Observable<ContentItemResponses.AddContentItemResponse> {
        return this.putResponse<ContentItemContracts.IUpdateContentItemResponseContract>(url, data, {}, config).pipe(
            map(response => {
                return contentItemsMapper.mapUpdateContentItemResponse(response);
            })
        );
    }

    deleteContentItem(
        url: string,
        config: IContentManagementQueryConfig
    ): Observable<BaseResponses.EmptyContentManagementResponse> {
        return this.deleteResponse<ContentItemContracts.IDeleteContentItemResponseContract>(url, {}, config).pipe(
            map(response => {
                return contentItemsMapper.mapEmptyResponse(response);
            })
        );
    }

    deleteLanguageVariant(
        url: string,
        config: IContentManagementQueryConfig
    ): Observable<BaseResponses.EmptyContentManagementResponse> {
        return this.deleteResponse<ContentItemContracts.IDeleteContentItemResponseContract>(url, {}, config).pipe(
            map(response => {
                return contentItemsMapper.mapEmptyResponse(response);
            })
        );
    }

    upsertLanguageVariant(
        url: string,
        elements: LanguageVariantModels.ILanguageVariantElement[],
        config: IContentManagementQueryConfig
    ): Observable<LanguageVariantResponses.UpsertLanguageVariantResponse> {
        return this.putResponse<LanguageVariantContracts.IUpsertLanguageVariantResponseContract>(
            url,
            {
                elements: elements
            },
            {},
            config
        ).pipe(
            map(response => {
                return languageVariantMapper.mapUpsertLanguageVariantResponse(response);
            })
        );
    }

    viewLanguageVariant(
        url: string,
        config: IContentManagementQueryConfig
    ): Observable<LanguageVariantResponses.ViewLanguageVariantResponse> {
        return this.getResponse<LanguageVariantContracts.IViewLanguageVariantResponseContract>(url, {}, config).pipe(
            map(response => {
                return languageVariantMapper.mapViewLanguageVariantResponse(response);
            })
        );
    }

    listLanguageVariantsOfItem(
        url: string,
        config: IContentManagementQueryConfig
    ): Observable<LanguageVariantResponses.ListLanguageVariantsOfItemResponse> {
        return this.getResponse<LanguageVariantContracts.IListLanguageVariantsOfItemResponseContract[]>(
            url,
            {},
            config
        ).pipe(
            map(response => {
                return languageVariantMapper.mapLanguageVariantsOfItemResponse(response);
            })
        );
    }

    listLanguageVariantsOfContentTypeWithComponents(
        url: string,
        config: IContentManagementQueryConfig
    ): Observable<LanguageVariantResponses.ListLanguageVariantsOfContentTypeWithComponentsResponse> {
        return this.getResponse<
            LanguageVariantContracts.IListLanguageVariantsOfContentTypeWithComponentsResponseContract
        >(url, {}, config).pipe(
            map(response => {
                return languageVariantMapper.mapLanguageVariantsOfContentTypeWithComponentsResponse(response);
            })
        );
    }

    listLanguageVariantsOfContentType(
        url: string,
        config: IContentManagementQueryConfig
    ): Observable<LanguageVariantResponses.ListLanguageVariantsOfContentTypeResponse> {
        return this.getResponse<LanguageVariantContracts.IListLanguageVariantsOfContentTypeResponseContract>(
            url,
            {},
            config
        ).pipe(
            map(response => {
                return languageVariantMapper.mapLanguageVariantsOfContentTypeResponse(response);
            })
        );
    }

    listLanguages(
        url: string,
        config: IContentManagementQueryConfig
    ): Observable<LanguageResponses.ListLanguagesResponse> {
        return this.getResponse<LanguageContracts.IListLanguagesResponseContract>(url, {}, config).pipe(
            map(response => {
                return languageMapper.mapListLanguagesResponse(response);
            })
        );
    }

    viewLanguage(
        url: string,
        config: IContentManagementQueryConfig
    ): Observable<LanguageResponses.ViewLanguageResponse> {
        return this.getResponse<LanguageContracts.IViewLanguageResponseContract>(url, {}, config).pipe(
            map(response => {
                return languageMapper.mapViewLanguageResponse(response);
            })
        );
    }

    addLanguage(
        url: string,
        config: IContentManagementQueryConfig,
        data: LanguageModels.IAddLanguageData
    ): Observable<LanguageResponses.AddLanguageResponse> {
        return this.postResponse<LanguageContracts.IAddLanguageResponseContract>(url, data, {}, config).pipe(
            map(response => {
                return languageMapper.mapAddLanguageResponse(response);
            })
        );
    }

    modifyLanguage(
        url: string,
        config: IContentManagementQueryConfig,
        data: LanguageModels.IModifyLanguageData[]
    ): Observable<LanguageResponses.ModifyLanguageResponse> {
        return this.patchResponse<LanguageContracts.IModifyLanguageResponseContract>(url, data, {}, config).pipe(
            map(response => {
                return languageMapper.mapModifyLanguageResponse(response);
            })
        );
    }

    listWebhooks(url: string, config: IContentManagementQueryConfig): Observable<WebhookResponses.WebhookListResponse> {
        return this.getResponse<WebhookContracts.IWebhookListContract>(url, {}, config).pipe(
            map(response => {
                return webhookMapper.mapWebhooksListResponse(response);
            })
        );
    }

    getWebhook(url: string, config: IContentManagementQueryConfig): Observable<WebhookResponses.GetWebhookResponse> {
        return this.getResponse<WebhookContracts.IGetWebhookContract>(url, {}, config).pipe(
            map(response => {
                return webhookMapper.mapGetWebhookResponse(response);
            })
        );
    }

    addWebhook(
        url: string,
        config: IContentManagementQueryConfig,
        data: WebhookModels.IAddWebhookData
    ): Observable<WebhookResponses.AddWebhookResponse> {
        return this.postResponse<WebhookContracts.IAddWebhookContract>(url, data, {}, config).pipe(
            map(response => {
                return webhookMapper.mapAddWebhookResponse(response);
            })
        );
    }

    deleteWebhook(
        url: string,
        config: IContentManagementQueryConfig
    ): Observable<BaseResponses.EmptyContentManagementResponse> {
        return this.deleteResponse<BaseResponses.EmptyContentManagementResponse>(url, {}, config).pipe(
            map(response => {
                return webhookMapper.mapEmptyResponse(response);
            })
        );
    }

    listAssetFolders(
        url: string,
        config: IContentManagementQueryConfig
    ): Observable<AssetFolderResponses.AssetFoldersListResponse> {
        return this.getResponse<AssetFolderContracts.IListAssetFoldersResponseContract>(url, {}, config).pipe(
            map(response => {
                return assetFolderMapper.mapListAssetFoldersResponse(response);
            })
        );
    }

    addAssetFolders(
        url: string,
        config: IContentManagementQueryConfig,
        data: AssetFolderModels.IAddAssetFoldersData
    ): Observable<AssetFolderResponses.AddAssetFoldersResponse> {
        return this.postResponse<AssetFolderContracts.IAddAssetFoldersResponseContract>(url, data, {}, config).pipe(
            map(response => {
                return assetFolderMapper.mapAddAssetFoldersResponse(response);
            })
        );
    }

    modifyAssetFolders(
        url: string,
        config: IContentManagementQueryConfig,
        data: AssetFolderModels.IModifyAssetFoldersData[]
    ): Observable<AssetFolderResponses.ModifyAssetFoldersResponse> {
        return this.patchResponse<AssetFolderContracts.IModifyAssetFoldersDataResponseContract>(
            url,
            data,
            {},
            config
        ).pipe(
            map(response => {
                return assetFolderMapper.mapModifyAssetFoldersResponse(response);
            })
        );
    }

    private getListAllResponseInternal<TResponse extends BaseResponses.IContentManagementListResponse>(data: {
        xContinuationToken?: string;
        getResponse: (xContinuationToken?: string) => Observable<TResponse>;
        resolvedResponses: TResponse[];
        listQueryConfig?: IContentManagementListQueryConfig
    }): Observable<TResponse[]> {
        return data.getResponse(data.xContinuationToken).pipe(
            delay(data.listQueryConfig
                ? data.listQueryConfig.delayBetweenRequests
                : this.defaultListQueryConfig.delayBetweenRequests),
            flatMap(response => {
                data.resolvedResponses.push(response);

                if (response.data.pagination.continuationToken) {
                    // recursively fetch next page data
                    return this.getListAllResponseInternal({
                        xContinuationToken: response.data.pagination.continuationToken,
                        getResponse: data.getResponse,
                        resolvedResponses: data.resolvedResponses
                    });
                }

                return of(undefined);
            }),
            map(() => {
                return data.resolvedResponses;
            })
        );
    }
}
