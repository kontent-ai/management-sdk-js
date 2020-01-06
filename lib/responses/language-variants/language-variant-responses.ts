import { LanguageVariantContracts } from '../../contracts';
import { LanguageVariantModels, SharedModels } from '../../models';
import { BaseResponses } from '../base-responses';

export namespace LanguageVariantResponses {
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
