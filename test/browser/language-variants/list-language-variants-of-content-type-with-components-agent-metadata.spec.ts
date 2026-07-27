import { LanguageVariantResponses } from '../../../lib';
import * as jsonResponseWithAgentMetadata from '../fake-responses/language-variants/fake-list-language-variants-of-content-type-with-components-agent-metadata.json';
import { cmClient, getTestClientWithJson } from '../setup';

describe('List language variants of content type with components with agent metadata', () => {
    let response: LanguageVariantResponses.ListLanguageVariantsOfContentTypeWithComponentsResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(jsonResponseWithAgentMetadata)
            .listLanguageVariantsOfContentTypeWithComponents()
            .byTypeCodename('x')
            .withAgentMetadata()
            .toPromise();
    });

    it(`withAgentMetadata should add the X-KC-Agent-Metadata header`, () => {
        const query = cmClient
            .listLanguageVariantsOfContentTypeWithComponents()
            .byTypeCodename('xCodename')
            .withAgentMetadata();

        expect(query.getHeaders()).toContain(
            jasmine.objectContaining({
                header: 'X-KC-Agent-Metadata',
                value: 'true'
            })
        );
    });

    it(`agent metadata should be mapped for every variant in the list`, () => {
        expect(response.data.items).toHaveSize(jsonResponseWithAgentMetadata.variants.length);

        response.data.items.forEach((variant, index) => {
            const originalVariant = jsonResponseWithAgentMetadata.variants[index];
            const agentMetadata = variant.agentMetadata;

            if (!agentMetadata) {
                throw Error(`Agent metadata was not mapped for variant at index '${index}'`);
            }

            expect(agentMetadata.editability.isEditable).toEqual(
                originalVariant.agent_metadata.editability.is_editable
            );
            expect(agentMetadata.editability.guidance).toEqual(originalVariant.agent_metadata.editability.guidance);
        });
    });

    it(`raw data should contain agent metadata as returned by the API`, () => {
        response.rawData.variants.forEach((rawVariant: any, index: number) => {
            expect(rawVariant.agent_metadata).toEqual(jsonResponseWithAgentMetadata.variants[index].agent_metadata);
        });
    });
});
