import { ContentTypeElements } from '../elements/content-type-element.models';

export class ContentTypeSnippetElements {
    assetElement(element: ContentTypeElements.IAssetElementData): ContentTypeElements.IAssetElementData {
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

    multipleChoiceElement(element: ContentTypeElements.IMultipleChoiceElementData): ContentTypeElements.IMultipleChoiceElementData {
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

    any<TElementData extends ContentTypeElements.Element>(element: TElementData): TElementData {
        return element;
    }
}

export const contentTypeSnippetElementsBuilder = new ContentTypeSnippetElements();
