import { TaxonomyContracts } from '../../contracts';
import { TaxonomyModels, SharedModels } from '../../models';
import { BaseResponses } from '../base-responses';

export namespace TaxonomyResponses {

    export class TaxonomyListResponse extends BaseResponses.BaseContentManagementResponse<TaxonomyContracts.ITemporaryTaxonomyListResponse, {
        taxonomies: TaxonomyModels.Taxonomy[],
        pagination: SharedModels.Pagination
    }>  {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: TaxonomyContracts.ITemporaryTaxonomyListResponse,
            data: {
                taxonomies: TaxonomyModels.Taxonomy[],
                pagination: SharedModels.Pagination
            }
        ) {
            super(debug, rawData, data);
        }
    }

    export class GetTaxonomyResponse extends BaseResponses.BaseContentManagementResponse<TaxonomyContracts.IGetTaxonomyResponseContract, TaxonomyModels.Taxonomy>  {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: TaxonomyContracts.IGetTaxonomyResponseContract,
            data: TaxonomyModels.Taxonomy
        ) {
            super(debug, rawData, data);
        }
    }

    export class AddTaxonomyResponse extends BaseResponses.BaseContentManagementResponse<TaxonomyContracts.IAddTaxonomyResponseContract, TaxonomyModels.Taxonomy>  {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: TaxonomyContracts.IAddTaxonomyResponseContract,
            data: TaxonomyModels.Taxonomy
        ) {
            super(debug, rawData, data);
        }
    }

    export class ModifyTaxonomyResponse extends BaseResponses.BaseContentManagementResponse<TaxonomyContracts.IModifyTaxonomyResponseContract, TaxonomyModels.Taxonomy>  {
        constructor(
            debug: BaseResponses.IContentManagementResponseDebug,
            rawData: TaxonomyContracts.IModifyTaxonomyResponseContract,
            data: TaxonomyModels.Taxonomy
        ) {
            super(debug, rawData, data);
        }
    }
}
