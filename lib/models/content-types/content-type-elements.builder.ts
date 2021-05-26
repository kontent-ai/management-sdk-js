import { SharedContracts } from '../../contracts';
import { ContentTypeModels } from './content-type.models';

export namespace ContentTypeElements {
    export interface IElementInContentType {
        type: string;
        content_group?: SharedContracts.IReferenceObjectContract;
    }

    export interface IContentGroup extends IElementInContentType {
        name: string;
        external_id?: string;
    }

    export interface IAssetElement extends IElementInContentType {
        name: string;
        type: 'asset';
        codename?: string;
        external_id?: string;
        guidelines?: string;
        asset_count_limit?: {
            value: number;
            condition: 'at_most' | 'exactly' | 'at_least';
        };
        maximum_file_size?: number;
        allowed_file_types?: 'adjustable' | 'any';
        image_width_limit?: {
            value: number;
            condition: 'at_most' | 'exactly' | 'at_least';
        };
        image_height_limit?: {
            value: number;
            condition: 'at_most' | 'exactly' | 'at_least';
        };
        is_required?: boolean;
    }

    export interface ISnippetInType extends IElementInContentType {
        snippet: SharedContracts.IReferenceObjectContract;
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
        allowed_elements?: SharedContracts.IReferenceObjectContract[];
    }

    export interface IDateTimeInType extends IElementInContentType {
        name: string;
        type: 'date_time';
        is_required?: boolean;
        guidelines?: string;
        codename?: string;
        external_id?: string;
    }

    export interface IGuidelinesInType extends IElementInContentType {
        guidelines: string;
        type: 'guidelines';
        codename?: string;
        external_id?: string;
    }

    export interface ILinkedItemsInType extends IElementInContentType {
        item_count_limit?: {
            value: number;
            condition: 'at_most' | 'exactly' | 'at_least';
        };
        allowed_content_types?: SharedContracts.IReferenceObjectContract[];
        name: string;
        guidelines?: string;
        type: 'modular_content';
        is_required?: boolean;
        codename?: string;
        external_id?: string;
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
        guidelines?: string;
        codename?: string;
    }

    export interface INumberInType extends IElementInContentType {
        name: string;
        type: 'number';
        is_required?: boolean;
        codename?: string;
        external_id?: string;
        guidelines?: string;
    }

    export interface IRichTextInType extends IElementInContentType {
        maximum_text_length?: {
            value: number;
            applies_to: ContentTypeModels.RichTextMaximumLengthAppliesTo;
        };
        maximum_image_size?: number;
        allowed_content_types?: SharedContracts.IReferenceObjectContract[];
        image_width_limit?: {
            value: number;
            condition: ContentTypeModels.RichTextImageCondition;
        };
        image_height_limit?: {
            value: number;
            condition: ContentTypeModels.RichTextImageCondition;
        };
        allowed_image_types?: ContentTypeModels.RichTextallowedImageType;
        name: string;
        type: 'rich_text';
        is_required?: boolean;
        codename?: string;
        external_id?: string;
        guidelines?: string;
        allowed_blocks?: ContentTypeModels.RichTextAllowedBlock[];
        allowed_text_blocks?: ContentTypeModels.RichTextAllowedTextBlock[];
        allowed_formatting?: ContentTypeModels.RichTextAllowedFormatting[];
        allowed_table_blocks?: ContentTypeModels.RichTextAllowedTableBlock[];
        allowed_table_text_blocks?: ContentTypeModels.RichTextAllowedTextBlock[];
        allowed_table_formatting?: ContentTypeModels.RichTextAllowedFormatting[];
    }

    export interface ITaxonomyChoiceInType extends IElementInContentType {
        taxonomy_group: SharedContracts.IReferenceObjectContract;
        type: 'taxonomy';
        is_required?: boolean;
        codename?: string;
        external_id?: string;
    }

    export interface ITextInType extends IElementInContentType {
        name: string;
        type: 'text';
        is_required?: boolean;
        codename?: string;
        external_id?: string;
        guidelines?: string;
        maximum_text_length?: {
            value: number;
            applies_to: 'words' | 'characters';
        };
    }

    export interface IUrlSlugType extends IElementInContentType {
        depends_on: {
            element: SharedContracts.IReferenceObjectContract;
            snippet?: SharedContracts.IReferenceObjectContract;
        };
        name: string;
        type: 'url_slug';
        is_required?: boolean;
        codename: string;
        external_id?: string;
        guidelines?: string;
    }
}

export class ContentTypeElementsBuilder {
    contentGroup(contentGroup: ContentTypeElements.IContentGroup): ContentTypeElements.IElementInContentType {
        return contentGroup;
    }

    assetElement(element: ContentTypeElements.IAssetElement): ContentTypeElements.IElementInContentType {
        return element;
    }

    snippetElement(element: ContentTypeElements.ISnippetInType): ContentTypeElements.IElementInContentType {
        return element;
    }

    customElement(element: ContentTypeElements.ICustomElementInType): ContentTypeElements.IElementInContentType {
        return element;
    }

    dateTimeElement(element: ContentTypeElements.IDateTimeInType): ContentTypeElements.IElementInContentType {
        return element;
    }

    guidelinesElement(element: ContentTypeElements.IGuidelinesInType): ContentTypeElements.IElementInContentType {
        return element;
    }

    linkedItemsElement(element: ContentTypeElements.ILinkedItemsInType): ContentTypeElements.IElementInContentType {
        return element;
    }

    multipleChoiceElement(
        element: ContentTypeElements.IMultipleChoiceInType
    ): ContentTypeElements.IElementInContentType {
        return element;
    }

    numberElement(element: ContentTypeElements.INumberInType): ContentTypeElements.IElementInContentType {
        return element;
    }

    richTextElement(element: ContentTypeElements.IRichTextInType): ContentTypeElements.IElementInContentType {
        return element;
    }

    taxonomyElement(element: ContentTypeElements.ITaxonomyChoiceInType): ContentTypeElements.IElementInContentType {
        return element;
    }

    textElement(element: ContentTypeElements.ITextInType): ContentTypeElements.IElementInContentType {
        return element;
    }

    urlSlugElement(element: ContentTypeElements.IUrlSlugType): ContentTypeElements.IElementInContentType {
        return element;
    }

    any(element: any): ContentTypeElements.IElementInContentType {
        return element;
    }
}

export const contentTypeElementsBuilder = new ContentTypeElementsBuilder();
