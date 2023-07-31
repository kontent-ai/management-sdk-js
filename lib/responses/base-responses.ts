import { IResponse } from '@kontent-ai/core-sdk';

import { SharedModels } from '../models';

export namespace BaseResponses {
    export interface IContentManagementResponseDebug {
        response: IResponse<any>;
    }

    export interface IContentManagementResponse {
        data: any;
        rawData: any;
        debug: IContentManagementResponseDebug;
    }

    export interface IContentManagementListResponse {
        data: {
            items: any[];
            pagination: SharedModels.Pagination;
        };
        rawData: any;
        debug: IContentManagementResponseDebug;
    }

    export interface IContentManagementListAllResponse {
        responses: any[];
        data: {
            items: any[];
        };
    }

    export abstract class ContentManagementListAllResponse<TResponse extends IContentManagementListResponse, TData>
        implements IContentManagementListAllResponse
    {
        public responses: TResponse[];
        public data: {
            items: TData[];
        };

        constructor(obj: { responses: TResponse[]; items: TData[] }) {
            this.responses = obj.responses;
            this.data = {
                items: obj.items
            };
        }
    }

    export abstract class BaseContentManagementListResponse<TRawData, TItem> implements IContentManagementResponse {
        constructor(
            public debug: IContentManagementResponseDebug,
            public rawData: TRawData,
            public data: {
                items: TItem[];
                pagination: SharedModels.Pagination;
            }
        ) {}
    }

    export abstract class BaseContentManagementResponse<TRawData, TData> implements IContentManagementResponse {
        constructor(public debug: IContentManagementResponseDebug, public rawData: TRawData, public data: TData) {}
    }

    export class EmptyContentManagementResponse extends BaseResponses.BaseContentManagementResponse<void, void> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: void, data: void) {
            super(debug, rawData, data);
        }
    }
}
