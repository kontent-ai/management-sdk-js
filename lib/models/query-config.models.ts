import { HttpResponseType, IHeader } from '@kentico/kontent-core';

export interface IContentManagementQueryConfig {
    headers: IHeader[];
}

export interface IContentManagementInternalQueryConfig {
    responseType?: HttpResponseType;
}
