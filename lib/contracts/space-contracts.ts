import { SharedContracts } from './shared-contracts';


export namespace SpaceContracts {
    export interface ISpaceContract {
        id: string;
        name: string;
        codename: string;
    }
    export interface ISpacesListingResponseContract {
        items: ISpaceContract[];
        pagination: SharedContracts.IPaginationModelContract;
    }
    export interface IAddSpaceResponseContract extends ISpaceContract{
    }

    export interface IViewSpaceResponseContract extends ISpaceContract{
    }

    export interface IAddSpaceResponseContract extends ISpaceContract{
    }

    export interface IModifySpaceResponseContract extends ISpaceContract {
    }

    export interface IDeleteSpaceResponseContact {
    }

    export interface IUpdateSpacePostContract {
        name: string;
        codename?: string;
    }

    export interface IUpsertSpacePostContract {
        name: string;
        codename?: string;
    }

    export interface IAddSpacePostContract {
        name: string;
        codename?: string;
    }
}







