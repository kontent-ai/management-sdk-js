import { PreviewModels, PreviewResponses } from '../../../lib';
import * as responseJson from '../fake-responses/preview/fake-modify-preview-configuration.json';
import { cmLiveClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Modify preview configuration', () => {
    let response: PreviewResponses.ModifyConfigurationResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson)
            .modifyPreviewConfiguration()
            .withData({
                space_domains: [
                    {
                        domain: 'z.com',
                        space: {
                            codename: 'spaceCodename'
                        }
                    }
                ],
                preview_url_patterns: [
                    {
                        content_type: {
                            codename: 'contentTypeCodename'
                        },
                        url_patterns: [
                            {
                                space: {
                                    codename: 'spaceCodename'
                                },
                                url_pattern: 'https://{Space}/{Lang}/articles/history/'
                            }
                        ]
                    }
                ]
            })
            .toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmLiveClient
            .modifyPreviewConfiguration()
            .withData({} as any)
            .getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/preview-configuration`);
    });

    it(`response should be instance of PreviewResponses.ModifyConfigurationResponse class`, () => {
        expect(response).toEqual(jasmine.any(PreviewResponses.ModifyConfigurationResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
        expect(response.data).toEqual(jasmine.any(PreviewModels.PreviewConfiguration));
    });
});
