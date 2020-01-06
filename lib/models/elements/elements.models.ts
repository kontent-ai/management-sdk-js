import { SharedModels } from '../shared/shared-models';
import { ElementContracts } from '../../contracts';

export namespace ElementModels {

    export enum ElementMode {
        single = 'single',
        multiple = 'multiple'
    }

    export enum ElementType {
        text = 'text',
        richText = 'rich_text',
        number = 'number',
        multipleChoice = 'multiple_choice',
        dateTime = 'date_time',
        asset = 'asset',
        modularContent = 'modular_content',
        taxonomy = 'taxonomy',
        urlSlug = 'url_slug',
        guidelines = 'guidelines',
        snippet = 'snippet',
        custom = 'custom'
    }

    export class ContentItemElement implements SharedModels.IBaseModel<ElementContracts.IContentTypeElementContract> {
        public element!: SharedModels.ReferenceObject;
        public value!: string | number | SharedModels.ReferenceObject[];
        public _raw!: ElementContracts.IContentTypeElementContract;

        constructor(
            data: {
                element: SharedModels.ReferenceObject;
                value: string | number | SharedModels.ReferenceObject[];
                _raw: ElementContracts.IContentItemElementContract;
            }
        ) {
            Object.assign(this, data);
        }
    }

    export class ContentItemElementComponent implements SharedModels.IBaseModel<ElementContracts.IContentItemElementComponent> {
        public id!: string;
        public type!: SharedModels.ReferenceObject;
        public elements!: ContentItemElementWithComponents[];
        public _raw!: ElementContracts.IContentItemElementComponent;

        constructor(
            data: {
                id: string;
                type: SharedModels.ReferenceObject;
                elements: ContentItemElementWithComponents[];
                _raw: ElementContracts.IContentItemElementComponent;
            }
        ) {
            Object.assign(this, data);
        }
    }

    export class ContentItemElementWithComponents {
        public element!: SharedModels.ReferenceObject;
        public value!: string | number | SharedModels.ReferenceObject[];
        public components!: ContentItemElementComponent[];

        constructor(
            data: {
                element: SharedModels.ReferenceObject;
                value: string | number | SharedModels.ReferenceObject[];
                components: ContentItemElementComponent[];
            }
        ) {
            Object.assign(this, data);
        }
    }

    export class MultipleChoiceElementOption {
        public id!: string;
        public name!: string;
        public codename!: string;

        constructor(data: {
            id: string,
            name: string,
            codename: string,
        }) {
            Object.assign(this, data);
        }
    }

    export class ElementModel {

        public id!: string;
        public name?: string;
        public codename!: string;
        public type!: ElementType;
        public guidelines!: string;

        constructor(data: {
            id: string,
            name?: string,
            codename: string,
            type: ElementType,
            guidelines: string
        }) {
            Object.assign(this, data);
        }
    }

    export class MultipleChoiceElementModel extends ElementModel {

        public options!: MultipleChoiceElementOption[];
        public mode!: ElementMode;

        constructor(data: ElementModel, multipleElemData: {
            options: MultipleChoiceElementOption[];
            mode: ElementMode;
        }) {
            super(data);

            this.options = multipleElemData.options;
            this.mode = multipleElemData.mode;
        }
    }

    export interface IElementData {
        id: string;
        name?: string;
        codename: string;
        type: ElementType;
        guidelines: string;
    }

    export interface IMultipleChoiceOptionData {
        name: string;
    }

    export interface IMultipleChoiceElementData extends IElementData {
        options: IMultipleChoiceOptionData[];
        mode: ElementMode;
    }

}
