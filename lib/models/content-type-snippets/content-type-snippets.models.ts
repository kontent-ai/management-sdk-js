import { ContentTypeSnippetContracts } from '../../contracts';
import { ContentTypeElements } from '../elements/content-type-element.models';
import { SharedModels } from '../shared/shared-models';

export namespace ContentTypeSnippetModels {
    export type ModifyContentTypeSnippetOperation = 'addInto' | 'remove' | 'replace' | 'move';

    export class ContentTypeSnippet
        implements SharedModels.IBaseModel<ContentTypeSnippetContracts.IContentTypeSnippetContract>
    {
        public id!: string;
        public name!: string;
        public codename!: string;
        public lastModified!: Date;
        public elements!: ContentTypeElements.ContentTypeElementModel[];
        public externalId?: string;
        public _raw!: ContentTypeSnippetContracts.IContentTypeSnippetContract;

        constructor(data: {
            id: string;
            name: string;
            codename: string;
            lastModified: Date;
            elements: ContentTypeElements.ContentTypeElementModel[];
            externalId?: string;
            _raw: ContentTypeSnippetContracts.IContentTypeSnippetContract;
        }) {
            Object.assign(this, data);
        }
    }

    export interface IAddContentTypeSnippetData {
        name: string;
        elements: ContentTypeElements.Element[];

        external_id?: string;
        codename?: string;
    }

    export interface IModifyContentTypeSnippetData {
        op: ModifyContentTypeSnippetOperation;
        path: string;
        value?: any;

        before?: SharedModels.IReferenceObject;
        after?: SharedModels.IReferenceObject;
    }
}
