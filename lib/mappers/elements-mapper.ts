import { enumHelper } from '@kentico/kontent-core';

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
        return elementsRaw.map((m) => this.mapElement(m));
    }

    mapElementsWithComponents(
        elementsRaw: ElementContracts.IContentItemElementWithComponentsContract[]
    ): ElementModels.ContentItemElementWithComponents[] {
        return elementsRaw.map((m) => this.mapElementWithComponents(m));
    }

    mapElementWithComponents(
        rawElement: ElementContracts.IContentItemElementWithComponentsContract
    ): ElementModels.ContentItemElementWithComponents {
        return new ElementModels.ContentItemElementWithComponents({
            element: super.mapReference(rawElement.element),
            value: this.mapElementValue(rawElement.value),
            components: this.mapElementComponents(rawElement.components || [])
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

    mapElementComponents(
        components: ElementContracts.IContentItemElementComponent[]
    ): ElementModels.ContentItemElementComponent[] {
        return components.map(
            (m) =>
                new ElementModels.ContentItemElementComponent({
                    elements: this.mapElementsWithComponents(m.elements),
                    id: m.id,
                    type: m.type,
                    _raw: m
                })
        );
    }

    mapMultipleChoiceMode(mode: string | undefined): ElementModels.ElementMode {
        if (!mode) {
            throw Error(`No value provided for multiple choice mode`);
        }

        const mappedMode = enumHelper.getEnumFromValue<ElementModels.ElementMode>(ElementModels.ElementMode, mode);

        if (!mappedMode) {
            throw Error(`Could not map multiple choice element option '${mode}'`);
        }

        return mappedMode;
    }

    mapElementValue(
        rawValue: string | number | SharedContracts.IReferenceObjectContract[]
    ): string | number | SharedModels.ReferenceObject[] {
        if (Array.isArray(rawValue)) {
            return rawValue.map((m) => super.mapReference(m));
        }

        return rawValue;
    }

    mapElementType(type: string): ElementModels.ElementType {
        const mappedType = enumHelper.getEnumFromValue<ElementModels.ElementType>(ElementModels.ElementType, type);

        if (!mappedType) {
            throw Error(`Invalid element type '${type}'`);
        }

        return mappedType;
    }
}

export const elementsMapper = new ElementsMapper();
