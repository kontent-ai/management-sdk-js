import { ContentTypeElements } from '../elements/content-type-element.models';

export class ContentTypeElementsBuilder {
    contentGroup(contentGroup: ContentTypeElements.IContentGroup): ContentTypeElements.IContentGroup {
        return contentGroup;
    }

    assetElement(element: ContentTypeElements.IAssetElementData): ContentTypeElements.IAssetElementData {
        return element;
    }

    snippetElement(element: ContentTypeElements.ISnippetElementData): ContentTypeElements.ISnippetElementData {
        return element;
    }

    customElement(element: ContentTypeElements.ICustomElementData): ContentTypeElements.ICustomElementData {
        return element;
    }

    dateTimeElement(element: ContentTypeElements.IDateTimeElementData): ContentTypeElements.IDateTimeElementData {
        return element;
    }

    guidelinesElement(element: ContentTypeElements.IGuidelinesElementData): ContentTypeElements.IGuidelinesElementData {
        return element;
    }

    linkedItemsElement(element: ContentTypeElements.ILinkedItemsElementData): ContentTypeElements.ILinkedItemsElementData {
        return element;
    }

    subpagesElement(element: ContentTypeElements.ISubpagesElementData): ContentTypeElements.ISubpagesElementData {
        return element;
    }

    multipleChoiceElement(
        element: ContentTypeElements.IMultipleChoiceElementData
    ): ContentTypeElements.IMultipleChoiceElementData {
        return element;
    }

    numberElement(element: ContentTypeElements.INumberElementData): ContentTypeElements.INumberElementData {
        return element;
    }

    richTextElement(element: ContentTypeElements.IRichTextElementData): ContentTypeElements.IRichTextElementData {
        return element;
    }

    taxonomyElement(element: ContentTypeElements.ITaxonomyElementData): ContentTypeElements.ITaxonomyElementData {
        return element;
    }

    textElement(element: ContentTypeElements.ITextElementData): ContentTypeElements.ITextElementData {
        return element;
    }

    urlSlugElement(element: ContentTypeElements.IUrlSlugElementData): ContentTypeElements.IUrlSlugElementData {
        return element;
    }

    any<TElementData extends ContentTypeElements.IElementShared>(element: TElementData): TElementData {
        return element;
    }
}

export const contentTypeElementsBuilder = new ContentTypeElementsBuilder();

