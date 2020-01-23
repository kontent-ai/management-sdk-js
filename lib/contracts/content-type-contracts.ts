import { ElementContracts } from './element-contracts';
import { SharedContracts } from './shared-contracts';

export namespace ContentTypeContracts {

    export interface IContentTypeContract {
        id: string;
        name: string;
        codename: string;
        last_modified: string;
        elements: ElementContracts.IContentTypeElementContract[];
        external_id?: string;
        content_groups?: IContentTypeGroup[];
    }

    export interface IContentTypeListResponseContract {
        types: IContentTypeContract[];
        pagination: SharedContracts.IPaginationModelContract;
    }

    export interface IModifyContentTypeResponseContract extends IContentTypeContract {
    }

    export interface IViewContentTypeResponseContract extends IContentTypeContract {
    }

    export interface IDeleteContentTypeResponseContract {
    }

    export interface IAddContentTypeResponseContract extends IContentTypeContract {
    }

    export interface IContentTypeGroup {
        name: string;
        codename?: string;
        external_id?: string;
        id?: string;
    }
}
