export namespace CollectionContracts {
    export interface ICollectionContract {
        id: string;
        name: string;
        codename: string;
    }

    export interface ICollectionListResponseContract {
        collections: ICollectionContract[];
        last_modified?: string;
    }

    export interface ISetCollectionsResponseContract {
        collections: ICollectionContract[];
        last_modified?: string;
    }
}
