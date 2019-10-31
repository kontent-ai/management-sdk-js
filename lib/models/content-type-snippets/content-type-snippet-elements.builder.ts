import { ElementsInContentType } from '../content-types/content-type-elements.builder';

export class ContentTypeSnippetElementsBuilder {

    assetElement(element: ElementsInContentType.IAssetElement): ElementsInContentType.IElementInContentType {
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

}

export const contentTypeSnippetElementsBuilder = new ContentTypeSnippetElementsBuilder();
