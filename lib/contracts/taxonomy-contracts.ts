import { SharedContracts } from './shared-contracts';

export namespace TaxonomyContracts {

    export interface ITaxonomyContract {
        last_modified: string;
        name: string;
        id: string;
        codename: string;
        terms?: ITaxonomyContract[];
        external_id?: string;
    }

    export interface IListTaxonomyResponseContract {
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
