import { ContentTypeElements } from '../content-types/content-type-elements.builder';

export class ContentTypeSnippetElements {

    assetElement(element: ContentTypeElements.IAssetElement): ContentTypeElements.IElementInContentType {
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

    multipleChoiceElement(element: ContentTypeElements.IMultipleChoiceInType): ContentTypeElements.IElementInContentType {
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

    any(element: any): ContentTypeElements.IElementInContentType {
        return element;
    }
}

export const contentTypeSnippetElementsBuilder = new ContentTypeSnippetElements();
