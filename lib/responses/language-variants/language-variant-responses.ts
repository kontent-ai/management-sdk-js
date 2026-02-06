import { LanguageVariantContracts } from '../../contracts';
import { LanguageVariantModels, SharedModels } from '../../models';
import { BaseResponses } from '../base-responses';

export namespace LanguageVariantResponses {

    export class FilterItemsWithVariantsResponse extends BaseResponses.BaseContentManagementListResponse<
        LanguageVariantContracts.IFilterItemsWithVariantsResponseContract,
        LanguageVariantContracts.IFilterItemsWithVariantsResultContract
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: LanguageVariantContracts.IFilterItemsWithVariantsResponseContract,
            data: {
                items: LanguageVariantContracts.IFilterItemsWithVariantsResultContract[];
                pagination: SharedModels.Pagination;
            }
        ) {
            super(debug, rawData, data);
        }
    }

    export class ListAllFilterItemsWithVariantsResponse extends BaseResponses.ContentManagementListAllResponse<FilterItemsWithVariantsResponse, LanguageVariantContracts.IFilterItemsWithVariantsResultContract> {
        constructor(
            data: {
                items: LanguageVariantContracts.IFilterItemsWithVariantsResultContract[];
                responses: FilterItemsWithVariantsResponse[];
            }
        ) {
            super(data);
        }
    }

    export class BulkGetItemsWithVariantsResponse extends BaseResponses.BaseContentManagementListResponse<
        LanguageVariantContracts.IBulkGetItemsWithVariantsResponseContract,
        LanguageVariantContracts.IContentItemWithVariantContract
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: LanguageVariantContracts.IBulkGetItemsWithVariantsResponseContract,
            data: {
                items: LanguageVariantContracts.IContentItemWithVariantContract[];
                pagination: SharedModels.Pagination;
            }
        ) {
            super(debug, rawData, data);
        }
    }

    export class ListAllBulkGetItemsWithVariantsResponse extends BaseResponses.ContentManagementListAllResponse<BulkGetItemsWithVariantsResponse, LanguageVariantContracts.IContentItemWithVariantContract> {
        constructor(
            data: {
                items: LanguageVariantContracts.IContentItemWithVariantContract[];
                responses: BulkGetItemsWithVariantsResponse[];
            }
        ) {
            super(data);
        }
    }

    export class ListLanguageVariantsOfItemResponse extends BaseResponses.BaseContentManagementResponse<
        LanguageVariantContracts.IListLanguageVariantsOfItemResponseContract[],
        {
            items: LanguageVariantModels.ContentItemLanguageVariant[];
        }
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: LanguageVariantContracts.IListLanguageVariantsOfItemResponseContract[],
            data: {
                items: LanguageVariantModels.ContentItemLanguageVariant[];
            }
        ) {
            super(debug, rawData, data);
        }
    }

    export class ListLanguageVariantsOfContentTypeWithComponentsResponse extends BaseResponses.BaseContentManagementListResponse<
        LanguageVariantContracts.IListLanguageVariantsOfContentTypeWithComponentsResponseContract,
        LanguageVariantModels.ContentItemLanguageWithComponentsVariant
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: LanguageVariantContracts.IListLanguageVariantsOfContentTypeWithComponentsResponseContract,
            data: {
                items: LanguageVariantModels.ContentItemLanguageWithComponentsVariant[];
                pagination: SharedModels.Pagination;
            }
        ) {
            super(debug, rawData, data);
        }
    }

    export class ListAllLanguageVariantsOfContentTypeWithComponentsResponse extends BaseResponses.ContentManagementListAllResponse<ListLanguageVariantsOfContentTypeWithComponentsResponse, LanguageVariantModels.ContentItemLanguageVariant> {
        constructor(
            data: {
                items: LanguageVariantModels.ContentItemLanguageVariant[],
                responses: ListLanguageVariantsOfContentTypeWithComponentsResponse[]
            }
        ) {
            super(data);
        }
    }

    export class ListLanguageVariantsOfContentTypeResponse extends BaseResponses.BaseContentManagementListResponse<
        LanguageVariantContracts.IListLanguageVariantsOfContentTypeResponseContract,
        LanguageVariantModels.ContentItemLanguageVariant
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: LanguageVariantContracts.IListLanguageVariantsOfContentTypeResponseContract,
            data: {
                items: LanguageVariantModels.ContentItemLanguageVariant[];
                pagination: SharedModels.Pagination;
            }
        ) {
            super(debug, rawData, data);
        }
    }

    export class ListLanguageVariantsByCollectionResponse extends BaseResponses.BaseContentManagementListResponse<
        LanguageVariantContracts.IListLanguageVariantsByCollectionResponseContract,
        LanguageVariantModels.ContentItemLanguageVariant
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: LanguageVariantContracts.IListLanguageVariantsByCollectionResponseContract,
            data: {
                items: LanguageVariantModels.ContentItemLanguageVariant[];
                pagination: SharedModels.Pagination;
            }
        ) {
            super(debug, rawData, data);
        }
    }

    export class ListLanguageVariantsBySpaceResponse extends BaseResponses.BaseContentManagementListResponse<
        LanguageVariantContracts.IListLanguageVariantsBySpaceResponseContract,
        LanguageVariantModels.ContentItemLanguageVariant
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: LanguageVariantContracts.IListLanguageVariantsBySpaceResponseContract,
            data: {
                items: LanguageVariantModels.ContentItemLanguageVariant[];
                pagination: SharedModels.Pagination;
            }
        ) {
            super(debug, rawData, data);
        }
    }


    export class ListAllLanguageVariantsOfContentTypeResponse extends BaseResponses.ContentManagementListAllResponse<ListLanguageVariantsOfContentTypeResponse, LanguageVariantModels.ContentItemLanguageVariant> {
        constructor(
            data: {
                items: LanguageVariantModels.ContentItemLanguageVariant[],
                responses: ListLanguageVariantsOfContentTypeResponse[]
            }
        ) {
            super(data);
        }
    }

    export class ListAllLanguageVariantsByCollectionResponse extends BaseResponses.ContentManagementListAllResponse<ListLanguageVariantsByCollectionResponse, LanguageVariantModels.ContentItemLanguageVariant> {
        constructor(
            data: {
                items: LanguageVariantModels.ContentItemLanguageVariant[],
                responses: ListLanguageVariantsByCollectionResponse[]
            }
        ) {
            super(data);
        }
    }

    export class ListAllLanguageVariantsBySpaceResponse extends BaseResponses.ContentManagementListAllResponse<ListLanguageVariantsBySpaceResponse, LanguageVariantModels.ContentItemLanguageVariant> {
        constructor(
            data: {
                items: LanguageVariantModels.ContentItemLanguageVariant[],
                responses: ListLanguageVariantsBySpaceResponse[]
            }
        ) {
            super(data);
        }
    }


    export class UpsertLanguageVariantResponse extends BaseResponses.BaseContentManagementResponse<
        LanguageVariantContracts.IUpsertLanguageVariantResponseContract,
        LanguageVariantModels.ContentItemLanguageVariant
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: LanguageVariantContracts.IUpsertLanguageVariantResponseContract,
            data: LanguageVariantModels.ContentItemLanguageVariant
        ) {
            super(debug, rawData, data);
        }
    }

    export class ViewLanguageVariantResponse extends BaseResponses.BaseContentManagementResponse<
        LanguageVariantContracts.IViewLanguageVariantResponseContract,
        LanguageVariantModels.ContentItemLanguageVariant
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: LanguageVariantContracts.IViewLanguageVariantResponseContract,
            data: LanguageVariantModels.ContentItemLanguageVariant
        ) {
            super(debug, rawData, data);
        }
    }
}
