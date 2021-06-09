import { ContentTypeElements } from '../elements/content-type-element.models';

export class ContentTypeElementsBuilder {
    contentGroup(contentGroup: ContentTypeElements.IContentGroup): ContentTypeElements.IElementShared {
        return contentGroup;
    }

    assetElement(element: ContentTypeElements.IAssetElementData): ContentTypeElements.IElementShared {
        return element;
    }

    snippetElement(element: ContentTypeElements.ISnippetElementData): ContentTypeElements.IElementShared {
        return element;
    }

    customElement(element: ContentTypeElements.ICustomElementData): ContentTypeElements.IElementShared {
        return element;
    }

    dateTimeElement(element: ContentTypeElements.IDateTimeElementData): ContentTypeElements.IElementShared {
        return element;
    }

    guidelinesElement(element: ContentTypeElements.IGuidelinesElementData): ContentTypeElements.IElementShared {
        return element;
    }

    linkedItemsElement(element: ContentTypeElements.ILinkedItemsElementData): ContentTypeElements.IElementShared {
        return element;
    }

    multipleChoiceElement(
        element: ContentTypeElements.IMultipleChoiceElementData
    ): ContentTypeElements.IElementShared {
        return element;
    }

    numberElement(element: ContentTypeElements.INumberElementData): ContentTypeElements.IElementShared {
        return element;
    }

    richTextElement(element: ContentTypeElements.IRichTextElementData): ContentTypeElements.IElementShared {
        return element;
    }

    taxonomyElement(element: ContentTypeElements.ITaxonomyElementData): ContentTypeElements.IElementShared {
        return element;
    }

    textElement(element: ContentTypeElements.ITextElementData): ContentTypeElements.IElementShared {
        return element;
    }

    urlSlugElement(element: ContentTypeElements.IUrlSlugElementData): ContentTypeElements.IElementShared {
        return element;
    }

    any(element: any): ContentTypeElements.IElementShared {
        return element;
    }
}

export const contentTypeElementsBuilder = new ContentTypeElementsBuilder();
