import { SharedModels } from '../shared/shared-models';

export namespace ElementsInContentType {

    export interface IElementInContentType {
    }

    export interface IAssetElement extends IElementInContentType {
        name: string;
        type: 'asset';
        codename?: string;
        external_id?: string;
        guidelines?: string;
        asset_count_limit?: {
            value: number;
            condition: 'at_most' | 'exactly' | 'at_least'
        };
        maximum_file_size?: number;
        allowed_file_types?: 'adjustable' | 'any';
        image_width_limit?: {
            value: number;
            condition: 'at_most' | 'exactly' | 'at_least'
        };
        image_height_limit?: {
            value: number;
            condition: 'at_most' | 'exactly' | 'at_least'
        };
        is_required?: boolean;
        content_group?: SharedModels.IReferenceObject;
    }

    export interface ISnippetInType extends IElementInContentType {
        snippet: SharedModels.IReferenceObject;
        type: 'snippet';
        codename: string;
        external_id?: string;
    }

    export interface ICustomElementInType extends IElementInContentType {
        name: string;
        type: 'custom';
        source_url: string;
        json_parameters?: string;
        codename?: string;
        external_id?: string;
        guidelines?: string;
        is_required?: boolean;
        allowed_elements?: SharedModels.IReferenceObject[];
        content_group?: SharedModels.IReferenceObject;
    }

    export interface IDateTimeInType extends IElementInContentType {
        name: string;
        type: 'date_time';
        is_required?: boolean;
        guidelines?: string;
        codename?: string;
        external_id?: string;
        content_group?: SharedModels.IReferenceObject;
    }

    export interface IGuidelinesInType extends IElementInContentType {
        guidelines: string;
        type: 'guidelines';
        codename?: string;
        external_id?: string;
        content_group?: SharedModels.IReferenceObject;
    }

    export interface ILinkedItemsInType extends IElementInContentType {
        items_count_limit: {
            value: number;
            condition: 'at_most' | 'exactly' | 'at_least'
        };
        allowed_content_types?: SharedModels.IReferenceObject[];
        name: string;
        guidelines?: string;
        type: 'modular_content';
        codename?: string;
        external_id?: string;
        content_group?: SharedModels.IReferenceObject;
    }

    export interface IMultipleChoiceOption {
        name: string;
        codename?: string;
    }

    export interface IMultipleChoiceInType extends IElementInContentType {
        mode: 'single' | 'multiple';
        options: IMultipleChoiceOption[];
        name: string;
        type: 'multiple_choice';
        is_required?: boolean;
        external_id?: string;
        content_group?: SharedModels.IReferenceObject;
        guidelines?: string;
    }

    export interface INumberInType extends IElementInContentType {
        name: string;
        type: 'number';
        is_required?: boolean;
        codename?: string;
        external_id?: string;
        content_group?: SharedModels.IReferenceObject;
        guidelines?: string;
    }

    export interface IRichTextInType extends IElementInContentType {
        maximum_text_length?: {
            value: number;
            applied_to: 'words' | 'characters'
        };
        maximum_image_size?: number;
        allowed_content_types?: SharedModels.IReferenceObject[];
        image_width_limit?: {
            value: number;
            condition: 'at_most' | 'exactly' | 'at_least'
        };
        image_height_limit?: {
            value: number;
            condition: 'at_most' | 'exactly' | 'at_least'
        };
        allowed_image_types?: 'adjustable' | 'any';
        name: string;
        type: 'rich_text';
        is_required?: boolean;
        codename?: string;
        external_id?: string;
        guidelines?: string;
        content_group?: SharedModels.IReferenceObject;
    }

    export interface ITaxonomyChoiceInType extends IElementInContentType {
        taxonomy_group: SharedModels.IReferenceObject;
        type: 'taxonomy';
        is_required?: boolean;
        codename?: string;
        external_id?: string;
        content_group?: SharedModels.IReferenceObject;
    }

    export interface ITextInType extends IElementInContentType {
        name: string;
        type: 'text';
        is_required?: boolean;
        codename?: string;
        external_id?: string;
        guidelines?: string;
        content_group?: SharedModels.IReferenceObject;
        maximum_text_length?: {
            value: number;
            applied_to: 'words' | 'characters'
        };
    }

    export interface IUrlSlugType extends IElementInContentType {
        depends_on: {
            element: SharedModels.IReferenceObject,
            snippet?: SharedModels.IReferenceObject
        };
        name: string;
        type: 'url_slug';
        is_required?: boolean;
        codename: string;
        external_id?: string;
        guidelines?: string;
        content_group?: SharedModels.IReferenceObject;
    }
}

export class ContentTypeElementsBuilder {

    assetElement(element: ElementsInContentType.IAssetElement): ElementsInContentType.IElementInContentType {
        return element;
    }

    snippetElement(element: ElementsInContentType.ISnippetInType): ElementsInContentType.IElementInContentType {
        return element;
    }

    customElement(element: ElementsInContentType.ICustomElementInType): ElementsInContentType.IElementInContentType {
        return element;
    }

    dateTimeElement(element: ElementsInContentType.IDateTimeInType): ElementsInContentType.IElementInContentType {
        return element;
    }

    guidelinesElement(element: ElementsInContentType.IGuidelinesInType): ElementsInContentType.IElementInContentType {
        return element;
    }

    linkedItemsElement(element: ElementsInContentType.ILinkedItemsInType): ElementsInContentType.IElementInContentType {
        return element;
    }

    multipleChoiceElement(element: ElementsInContentType.IMultipleChoiceInType): ElementsInContentType.IElementInContentType {
        return element;
    }

    numberElement(element: ElementsInContentType.INumberInType): ElementsInContentType.IElementInContentType {
        return element;
    }

    richTextElement(element: ElementsInContentType.IRichTextInType): ElementsInContentType.IElementInContentType {
        return element;
    }

    taxonomyElement(element: ElementsInContentType.ITaxonomyChoiceInType): ElementsInContentType.IElementInContentType {
        return element;
    }

    textElement(element: ElementsInContentType.ITextInType): ElementsInContentType.IElementInContentType {
        return element;
    }

    urlSlugElement(element: ElementsInContentType.IUrlSlugType): ElementsInContentType.IElementInContentType {
        return element;
    }
}

export const contentTypeElementsBuilder = new ContentTypeElementsBuilder();
