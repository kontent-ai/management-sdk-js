import { SharedContracts } from './shared-contracts';

export namespace ContentItemContracts {
    export interface IContentItemModelContract {
        id: string;
        name: string;
        codename: string;
        type: {
            id?: string;
            codename?: string;
            external_id?: string;
        };
        external_id?: string;
        last_modified: Date;
        spaces: SharedContracts.IIdReferenceContract[];
        collection: SharedContracts.IReferenceObjectContract;
    }

    export interface IContentItemsListingResponseContract {
        items: IContentItemModelContract[];
        pagination: SharedContracts.IPaginationModelContract;
    }

    export interface IAddContentItemResponseContract extends IContentItemModelContract {}

    export interface IViewContentItemResponseContract extends IContentItemModelContract {}

    export interface IUpdateContentItemResponseContract extends IContentItemModelContract {}

    export interface IUpsertContentItemResponseContract extends IContentItemModelContract {}

    export interface IDeleteContentItemResponseContract {}

    export interface IUpdateContentItemPostContract {
        name: string;
        codename?: string;
    }

    export interface IUpsertContentItemPostContract {
        name: string;
        type?: SharedContracts.IReferenceObjectContract;
        codename?: string;
        collection?: SharedContracts.IReferenceObjectContract;
    }

    export interface IAddContentItemPostContract {
        name: string;
        type: {
            codename?: string;
            id?: string;
            external_id?: string;
        };
        codename?: string;
        external_id?: string;
        collection?: SharedContracts.IReferenceObjectContract;
    }
}
