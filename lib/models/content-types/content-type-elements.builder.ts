import { ContentTypeSnippetElements } from '../content-type-snippets/content-type-snippet-elements.builder';
import { ContentTypeElements } from '../elements/content-type-element.models';

export class ContentTypeElementsBuilder extends ContentTypeSnippetElements {
    urlSlugElement(element: ContentTypeElements.IUrlSlugElementData): ContentTypeElements.IUrlSlugElementData {
        return element;
    }

    snippetElement(element: ContentTypeElements.ISnippetElementData): ContentTypeElements.ISnippetElementData {
        return element;
    }
}

export const contentTypeElementsBuilder = new ContentTypeElementsBuilder();
