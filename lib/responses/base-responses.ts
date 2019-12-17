import { IBaseResponse } from '@kentico/kontent-core';

import { SharedModels } from '../models';

export namespace BaseResponses {
    export interface IContentManagementResponseDebug {
        response: IBaseResponse<any>;
    }

    export interface IContentManagementResponse {
        data: any;
        rawData: any;
        debug: IContentManagementResponseDebug;
    }

    export interface IContentManagementListResponse {
        data: {
            items: any[];
            pagination: SharedModels.Pagination
        };
        rawData: any;
        debug: IContentManagementResponseDebug;
    }

    export interface IContentManagementListAllResponse {
        responses: any[];
        data: {
            items: any[]
        };
    }

    export abstract class ContentManagementListAllResponse<
        TResponse extends IContentManagementListResponse,
        TData extends any
    > implements IContentManagementListAllResponse {
        public responses: TResponse[];
        public data: {
            items: TData[];
        };

        constructor(obj: { responses: TResponse[]; items: TData[]; }) {
            this.responses = obj.responses;
            this.data = {
                items: obj.items
            };
        }
    }

    export abstract class BaseContentManagementListResponse<
        TRawData extends any,
        TItem extends any,
    > implements IContentManagementResponse {

        public data: {
            items: TItem[],
            pagination: SharedModels.Pagination
        };

        constructor(public debug: IContentManagementResponseDebug, public rawData: TRawData, data: {
            items: TItem[],
            pagination: SharedModels.Pagination
        }) {
            this.data = data;
        }
    }

    export abstract class BaseContentManagementResponse<TRawData extends any, TData extends any>
        implements IContentManagementResponse {
        constructor(public debug: IContentManagementResponseDebug, public rawData: TRawData, public data: TData) {}
    }

    export class EmptyContentManagementResponse extends BaseResponses.BaseContentManagementResponse<void, void> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: void, data: void) {
            super(debug, rawData, data);
        }
    }
}
