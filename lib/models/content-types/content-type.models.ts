import { SharedContracts, ContentTypeContracts } from '../../contracts';
import { ElementModels } from '../elements/elements.models';
import { SharedModels } from '../shared/shared-models';
import { ContentTypeElements } from './content-type-elements.builder';

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
        public elements!: ElementModels.IContentTypeElementModel[];
        public contentGroups?: ContentTypeGroup[];
        public externalId?: string;

        public _raw!: ContentTypeContracts.IContentTypeContract;

        constructor(data: {
            id: string;
            name: string;
            codename: string;
            lastModified: Date;
            elements: ElementModels.IContentTypeElementModel[];
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
        elements: ContentTypeElements.IElementInContentType[];

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

    export type RichTextAllowedBlock = 'images' | 'text' | 'tables' | 'components-and-items';
    export type RichTextAllowedTextBlock = 'paragraph' | 'heading-one' | 'heading-two' | 'heading-three' | 'heading-four' | 'ordered-list' | 'unordered-list';
    export type RichTextAllowedFormatting = 'unstyled' | 'bold' | 'italic' | 'code' | 'link' | 'subscript' | 'superscript';
    export type RichTextAllowedTableBlock = 'images' | 'text';
    export type RichTextImageCondition = 'at_most' | 'exactly' | 'at_least';
    export type RichTextallowedImageType = 'adjustable' | 'any';
    export type RichTextMaximumLengthAppliesTo = 'words' | 'characters';
}
