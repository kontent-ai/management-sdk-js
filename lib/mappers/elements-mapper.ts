import { ElementContracts, SharedContracts } from '../contracts';
import { ContentTypeElements, ElementModels, SharedModels } from '../models';
import { BaseMapper } from './base-mapper';

export class ElementsMapper extends BaseMapper {
    mapTypeElements(
        elementsRaw: ElementContracts.IContentTypeElementContract[]
    ): ContentTypeElements.ContentTypeElementModel[] {
        return elementsRaw.map((m) => this.mapTypeElement(m));
    }

    mapTypeElement(
        rawElement: ElementContracts.IContentTypeElementContract
    ): ContentTypeElements.ContentTypeElementModel {
        return rawElement as ContentTypeElements.ContentTypeElementModel;
    }

    mapElements(elementsRaw: ElementContracts.IContentItemElementContract[]): ElementModels.ContentItemElement[] {
        return elementsRaw.map((m) => {
            return new ElementModels.ContentItemElement({
                element: super.mapReference(m.element),
                value: this.mapElementValue(m.value),
                components: this.mapElementComponents(m.components ?? []),
                mode: m.mode,
                searchableValue: m.searchableValue,
                _raw: m
            });
        });
    }

    mapElement(rawElement: ElementContracts.IContentItemElementContract): ElementModels.ContentItemElement {
        return new ElementModels.ContentItemElement({
            element: super.mapReference(rawElement.element),
            value: this.mapElementValue(rawElement.value),
            mode: rawElement.mode,
            searchableValue: rawElement.searchableValue,
            _raw: rawElement
        });
    }

    private mapElementComponents(
        components: ElementContracts.IContentItemElementComponent[]
    ): ElementModels.ContentItemElementComponent[] {
        return components.map(
            (m) =>
                new ElementModels.ContentItemElementComponent({
                    elements: this.mapElements(m.elements),
                    id: m.id,
                    type: m.type,
                    _raw: m
                })
        );
    }

    private mapElementValue(
        rawValue: string | number | SharedContracts.IReferenceObjectContract[]
    ): string | number | SharedModels.ReferenceObject[] {
        if (Array.isArray(rawValue)) {
            return rawValue.map((m) => super.mapReference(m));
        }

        return rawValue;
    }
}

export const elementsMapper = new ElementsMapper();
