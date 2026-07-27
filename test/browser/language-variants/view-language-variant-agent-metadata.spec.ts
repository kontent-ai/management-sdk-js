import { LanguageVariantResponses } from '../../../lib';
import * as jsonResponseWithAgentMetadata from '../fake-responses/language-variants/fake-view-language-variant-agent-metadata.json';
import * as jsonResponseWithoutAgentMetadata from '../fake-responses/language-variants/fake-view-language-variant.json';
import { cmClient, getTestClientWithJson } from '../setup';

describe('View language variant with agent metadata', () => {
    let response: LanguageVariantResponses.ViewLanguageVariantResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(jsonResponseWithAgentMetadata)
            .viewLanguageVariant()
            .byItemCodename('x')
            .byLanguageCodename('x')
            .withAgentMetadata()
            .toPromise();
    });

    it(`withAgentMetadata should add the X-KC-Agent-Metadata header`, () => {
        const headers = cmClient
            .viewLanguageVariant()
            .byItemCodename('xCodename')
            .byLanguageCodename('xLanguageCodename')
            .withAgentMetadata()
            .getHeaders();

        expect(headers).toContain(
            jasmine.objectContaining({
                header: 'X-KC-Agent-Metadata',
                value: 'true'
            })
        );
    });

    it(`agent metadata should be mapped`, () => {
        const agentMetadata = response.data.agentMetadata;

        if (!agentMetadata) {
            throw Error(`Agent metadata was not mapped`);
        }

        expect(agentMetadata.editability.isEditable).toEqual(
            jsonResponseWithAgentMetadata.agent_metadata.editability.is_editable
        );
        expect(agentMetadata.editability.guidance).toEqual(
            jsonResponseWithAgentMetadata.agent_metadata.editability.guidance
        );
    });

    it(`raw data should contain agent metadata as returned by the API`, () => {
        expect(response.rawData.agent_metadata).toEqual(jsonResponseWithAgentMetadata.agent_metadata);
    });

    it(`agent metadata should be undefined when not returned by the API`, async () => {
        const responseWithoutMetadata = await getTestClientWithJson(jsonResponseWithoutAgentMetadata)
            .viewLanguageVariant()
            .byItemCodename('x')
            .byLanguageCodename('x')
            .toPromise();

        expect(responseWithoutMetadata.data.agentMetadata).toBeUndefined();
        expect(responseWithoutMetadata.rawData.agent_metadata).toBeUndefined();
    });
});
