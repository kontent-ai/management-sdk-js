import { SharedContracts } from './shared-contracts';

export namespace TaxonomyContracts {

    export interface ITaxonomyContract {
        last_modified: string;
        name: string;
        id: string;
        codename: string;
        terms: ITaxonomyContract[];
        external_id?: string;
    }

    export type ITemporaryTaxonomyListResponse = ITaxonomyContract[] | IListTaxonomyResponse;

    export interface IListTaxonomyResponse {
        pagination: SharedContracts.IPaginationModelContract;
        taxonomies: ITaxonomyContract[];
    }

    export interface IViewTaxonomyResponseContract extends ITaxonomyContract {
    }

    export interface IAddTaxonomyResponseContract extends ITaxonomyContract {
    }

    export interface IGetTaxonomyResponseContract extends ITaxonomyContract {
    }

    export interface IModifyTaxonomyResponseContract extends ITaxonomyContract {
    }

    export interface IDeleteTaxonomyResponseContract {
    }
}
