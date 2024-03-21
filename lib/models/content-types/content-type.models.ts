import { SharedContracts, ContentTypeContracts } from '../../contracts';
import { ContentTypeElements } from '../elements/content-type-element.models';
import { SharedModels } from '../shared/shared-models';

export namespace ContentTypeModels {
    export type ModifyContentTypeOperation = 'addInto' | 'remove' | 'replace';

    export interface IModifyContentTypeData {
        op: ModifyContentTypeOperation;
        path: string;
        value?: any;

        before?: SharedModels.IReferenceObject;
        after?: SharedModels.IReferenceObject;
    }

    export class ContentTypeGroup {

        public name!: string;
        public codename?: string;
        public externalId?: string;
        public id?: string;

        constructor(data: {
             name: string;
             codename?: string;
             externalId?: string;
             id?: string;
        }) {
            Object.assign(this, data);
        }
    }

    export class ContentType implements SharedModels.IBaseModel<ContentTypeContracts.IContentTypeContract> {
        public id!: string;
        public name!: string;
        public codename!: string;
        public lastModified!: Date;
        public elements!: ContentTypeElements.ContentTypeElementModel[];
        public contentGroups?: ContentTypeGroup[];
        public externalId?: string;

        public _raw!: ContentTypeContracts.IContentTypeContract;

        constructor(data: {
            id: string;
            name: string;
            codename: string;
            lastModified: Date;
            elements: ContentTypeElements.ContentTypeElementModel[];
            externalId?: string;
            contentGroups?: ContentTypeGroup[];
            _raw: ContentTypeContracts.IContentTypeContract;
        }) {
            Object.assign(this, data);
        }
    }

    export interface IAddContentTypeContentGroup {
        name: string;
        external_id?: string;
        codename?: string;
    }

    export interface IAddContentTypeData {
        name: string;
        elements: ContentTypeElements.Element[];

        external_id?: string;
        codename?: string;
        content_groups?: IAddContentTypeContentGroup[];
    }

    export interface IAddContentTypeCustomElementData {
        sourceUrl: string;
        json_parameters?: string;
    }

    export interface IAddContentTypeElementDependsOnData {
        element?: SharedContracts.IReferenceObjectContract;
        snippet?: SharedContracts.IReferenceObjectContract;
    }

    export interface IAddContentTypeElementMultipleChoiceElementOptionsData {
        name: string;
    }

}
