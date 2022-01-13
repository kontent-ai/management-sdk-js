import { TaxonomyContracts } from '../../contracts';
import { TaxonomyModels, SharedModels } from '../../models';
import { BaseResponses } from '../base-responses';

export namespace TaxonomyResponses {
    export class TaxonomyListResponse extends BaseResponses.BaseContentManagementListResponse<
        TaxonomyContracts.IListTaxonomyResponseContract,
        TaxonomyModels.Taxonomy
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: TaxonomyContracts.IListTaxonomyResponseContract,
            data: {
                items: TaxonomyModels.Taxonomy[];
                pagination: SharedModels.Pagination;
            }
        ) {
            super(debug, rawData, data);
        }
    }

    export class ListAllTaxonomiesResponse extends BaseResponses.ContentManagementListAllResponse<
        TaxonomyListResponse,
        TaxonomyModels.Taxonomy
    > {
        constructor(data: { items: TaxonomyModels.Taxonomy[]; responses: TaxonomyListResponse[] }) {
            super(data);
        }
    }

    export class GetTaxonomyResponse extends BaseResponses.BaseContentManagementResponse<
        TaxonomyContracts.IGetTaxonomyResponseContract,
        TaxonomyModels.Taxonomy
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: TaxonomyContracts.IGetTaxonomyResponseContract,
            data: TaxonomyModels.Taxonomy
        ) {
            super(debug, rawData, data);
        }
    }

    export class AddTaxonomyResponse extends BaseResponses.BaseContentManagementResponse<
        TaxonomyContracts.IAddTaxonomyResponseContract,
        TaxonomyModels.Taxonomy
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: TaxonomyContracts.IAddTaxonomyResponseContract,
            data: TaxonomyModels.Taxonomy
        ) {
            super(debug, rawData, data);
        }
    }

    export class ModifyTaxonomyResponse extends BaseResponses.BaseContentManagementResponse<
        TaxonomyContracts.IModifyTaxonomyResponseContract,
        TaxonomyModels.Taxonomy
    > {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: TaxonomyContracts.IModifyTaxonomyResponseContract,
            data: TaxonomyModels.Taxonomy
        ) {
            super(debug, rawData, data);
        }
    }
}
