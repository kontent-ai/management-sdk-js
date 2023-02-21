import { SharedContracts } from './shared-contracts';


export namespace SpaceContracts {
    export interface ISpaceModelContract {
        id: string;
        name: string;
        codename: string;
    }
    export interface ISpacesListingResponseContract {
        items: ISpaceModelContract[];
        pagination: SharedContracts.IPaginationModelContract;
    }
    export interface IAddSpaceResponseContract extends ISpaceModelContract{
    }

    export interface IViewSpaceResponseContract extends ISpaceModelContract{
    }

    export interface IAddSpaceResponseContract extends ISpaceModelContract{
    }

    export interface IUpdateSpaceResponseContract extends ISpaceModelContract{
    }

    export interface IUpsertSpaceResponseContract extends ISpaceModelContract{
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







