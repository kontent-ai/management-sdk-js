import { IResponse } from '@kontent-ai/core-sdk';

import { LanguageVariantContracts } from '../contracts';
import { LanguageVariantModels } from '../models';
import { LanguageVariantResponses } from '../responses';
import { BaseMapper } from './base-mapper';
import { elementsMapper } from './elements-mapper';

export class LanguageVariantMapper extends BaseMapper {
    mapUpsertLanguageVariantResponse(
        response: IResponse<LanguageVariantContracts.IUpsertLanguageVariantResponseContract>
    ): LanguageVariantResponses.UpsertLanguageVariantResponse {
        const variant = this.mapLanguageVariant(response.data);
        return new LanguageVariantResponses.UpsertLanguageVariantResponse(
            super.mapResponseDebug(response),
            response.data,
            variant
        );
    }

    mapViewLanguageVariantResponse(
        response: IResponse<LanguageVariantContracts.IViewLanguageVariantResponseContract>
    ): LanguageVariantResponses.ViewLanguageVariantResponse {
        const variant = this.mapLanguageVariant(response.data);
        return new LanguageVariantResponses.ViewLanguageVariantResponse(
            super.mapResponseDebug(response),
            response.data,
            variant
        );
    }

    mapLanguageVariantsOfItemResponse(
        response: IResponse<LanguageVariantContracts.IListLanguageVariantsOfItemResponseContract[]>
    ): LanguageVariantResponses.ListLanguageVariantsOfItemResponse {
        const variants = response.data.map((m) => this.mapLanguageVariant(m));
        return new LanguageVariantResponses.ListLanguageVariantsOfItemResponse(
            super.mapResponseDebug(response),
            response.data,
            {
                items: variants
            }
        );
    }

    mapLanguageVariantsByCollectionResponse(
        response: IResponse<LanguageVariantContracts.IListLanguageVariantsByCollectionResponseContract>
    ): LanguageVariantResponses.ListLanguageVariantsByCollectionResponse {
        const variants = response.data.variants.map((m) => this.mapLanguageVariant(m));
        return new LanguageVariantResponses.ListLanguageVariantsByCollectionResponse(
            super.mapResponseDebug(response),
            response.data,
            {
                items: variants,
                pagination: super.mapPagination(response.data.pagination)
            }
        );
    }

    mapFilterLanguageVariantsResponse(
        response: IResponse<LanguageVariantContracts.IFilterLanguageVariantsResponseContract>
    ): LanguageVariantResponses.FilterLanguageVariantsResponse {
        return new LanguageVariantResponses.FilterLanguageVariantsResponse(
            super.mapResponseDebug(response),
            response.data,
            {
                items: response.data.data,
                pagination: super.mapPagination(response.data.pagination)
            }
        );
    }


    mapLanguageVariantsBySpaceResponse(
        response: IResponse<LanguageVariantContracts.IListLanguageVariantsBySpaceResponseContract>
    ): LanguageVariantResponses.ListLanguageVariantsBySpaceResponse {
        const variants = response.data.variants.map((m) => this.mapLanguageVariant(m));
        return new LanguageVariantResponses.ListLanguageVariantsBySpaceResponse(
            super.mapResponseDebug(response),
            response.data,
            {
                items: variants,
                pagination: super.mapPagination(response.data.pagination)
            }
        );
    }

    mapLanguageVariantsOfContentTypeResponse(
        response: IResponse<LanguageVariantContracts.IListLanguageVariantsOfContentTypeResponseContract>
    ): LanguageVariantResponses.ListLanguageVariantsOfContentTypeResponse {
        const variants = response.data.variants.map((m) => this.mapLanguageVariant(m));
        return new LanguageVariantResponses.ListLanguageVariantsOfContentTypeResponse(
            super.mapResponseDebug(response),
            response.data,
            {
                items: variants,
                pagination: super.mapPagination(response.data.pagination)
            }
        );
    }

    mapLanguageVariantsOfContentTypeWithComponentsResponse(
        response: IResponse<LanguageVariantContracts.IListLanguageVariantsOfContentTypeWithComponentsResponseContract>
    ): LanguageVariantResponses.ListLanguageVariantsOfContentTypeWithComponentsResponse {
        const variants = response.data.variants.map((m) => this.mapLanguageVariantWithComponents(m));
        return new LanguageVariantResponses.ListLanguageVariantsOfContentTypeWithComponentsResponse(
            super.mapResponseDebug(response),
            response.data,
            {
                items: variants,
                pagination: super.mapPagination(response.data.pagination)
            }
        );
    }

    mapLanguageVariantWithComponents(
        rawVariant: LanguageVariantContracts.ILanguageVariantModelsContract
    ): LanguageVariantModels.ContentItemLanguageWithComponentsVariant {
        return new LanguageVariantModels.ContentItemLanguageWithComponentsVariant({
            rawElements: rawVariant.elements,
            elements: elementsMapper.mapElements(rawVariant.elements),
            item: super.mapReference(rawVariant.item),
            language: super.mapReference(rawVariant.language),
            lastModified: new Date(rawVariant.last_modified),
            dueDate: this.mapDueDate(rawVariant.due_date),
            schedule: this.mapSchedule(rawVariant.schedule),
            workflow: {
                workflowIdentifier: super.mapReference(rawVariant.workflow.workflow_identifier),
                stepIdentifier: super.mapReference(rawVariant.workflow.step_identifier)
            },
            _raw: rawVariant
        });
    }

    mapLanguageVariant(
        rawVariant: LanguageVariantContracts.ILanguageVariantModelContract
    ): LanguageVariantModels.ContentItemLanguageVariant {
        return new LanguageVariantModels.ContentItemLanguageVariant({
            elements: elementsMapper.mapElements(rawVariant.elements),
            item: super.mapReference(rawVariant.item),
            language: super.mapReference(rawVariant.language),
            lastModified: new Date(rawVariant.last_modified),
            dueDate: this.mapDueDate(rawVariant.due_date),
            schedule: this.mapSchedule(rawVariant.schedule),
            note: rawVariant.note,
            contributors: rawVariant.contributors,
            workflow: {
                workflowIdentifier: super.mapReference(rawVariant.workflow.workflow_identifier),
                stepIdentifier: super.mapReference(rawVariant.workflow.step_identifier)
            },
            _raw: rawVariant
        });
    }

    private mapDueDate(
        dueDateRaw: LanguageVariantContracts.ILanguageVariantDueDate
    ): LanguageVariantModels.ILanguageVariantDueDate {
        return dueDateRaw;
    }

    private mapSchedule(
        scheduleRaw: LanguageVariantContracts.ILanguageVariantSchedule
    ): LanguageVariantModels.ILanguageVariantSchedule {
        return {
            publishDisplayTimezone: scheduleRaw.publish_display_timezone,
            publishTime: scheduleRaw.publish_time,
            unpublishDisplayTimezone: scheduleRaw.unpublish_display_timezone,
            unpublishTime: scheduleRaw.unpublish_time
        };
    }
}

export const languageVariantMapper = new LanguageVariantMapper();
