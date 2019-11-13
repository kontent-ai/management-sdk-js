import { SharedContracts } from '../../contracts';
import { ElementModels } from '../elements/elements.models';
import { SharedModels } from '../shared/shared-models';
import { ElementsInContentType } from './content-type-elements.builder';

export namespace ContentTypeModels {
    export type ModifyContentTypeOperation = 'addInto' | 'remove' | 'replace';

    export interface IModifyContentTypeData {
        op: ModifyContentTypeOperation;
        path: string;
        value?: any;

        before?: SharedModels.IReferenceObject;
        after?: SharedModels.IReferenceObject;
    }

    export class ContentType {
        public id!: string;
        public name!: string;
        public codename!: string;
        public lastModified!: Date;
        public elements!: ElementModels.ElementModel[] | ElementModels.MultipleChoiceElementModel[];

        constructor(data: {
            id: string;
            name: string;
            codename: string;
            lastModified: Date;
            elements: ElementModels.ElementModel[] | ElementModels.MultipleChoiceElementModel[];
        }) {
            Object.assign(this, data);
        }
    }

    export interface IAddContentTypeContentGroup {
        name: string;
        external_id?: string;
    }

    export interface IAddContentTypeData {
        name: string;
        elements: ElementsInContentType.IElementInContentType[];

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
