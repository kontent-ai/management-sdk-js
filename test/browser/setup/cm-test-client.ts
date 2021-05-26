import { ManagementClient } from '../../../lib';
import { IResponse, TestHttpService } from '@kentico/kontent-core';

export const testProjectId: string = 'b259760f-81c5-013a-05e7-69efb4b954e5';

// tslint:disable-next-line:max-line-length
export const testProjectIdApiKey: string = '';

export function useLiveTesting(): boolean {
    if (testProjectIdApiKey) {
        return true;
    }
    return false;
}

export const cmLiveClient: ManagementClient = new ManagementClient({
    projectId: testProjectId,
    // tslint:disable-next-line:max-line-length
    apiKey: testProjectIdApiKey
});

export const getTestClient = (projectId: string, apiKey: string) =>
    new ManagementClient({
        apiKey: apiKey,
        projectId: projectId
    });

export const cmTestClientWithInvalidApiKey: ManagementClient = new ManagementClient({
    projectId: testProjectId,
    // tslint:disable-next-line:max-line-length
    apiKey: 'xxx'
});

export const getTestClientWithBaseKontentError: (errorJson: any) => ManagementClient = (errorJson: any) =>
    new ManagementClient({
        projectId: testProjectId,
        apiKey: 'xxx',
        httpService: new TestHttpService({
            response: undefined,
            error: {
                isAxiosError: true,
                response: {
                    data: errorJson
                }
            }
        })
    });

export const getTestClientWithJson: (json: any) => ManagementClient = (json: any) =>
    new ManagementClient({
        projectId: testProjectId,
        apiKey: 'xxx',
        httpService: new TestHttpService({
            response: getResponseFromJson(json),
            error: undefined
        })
    });

function getResponseFromJson(json: any): IResponse<any> {
    return {
        data: json,
        headers: [],
        rawResponse: json,
        status: 999,
        retryStrategy: {
            retryAttempts: 1,
            options: {}
        }
    };
}
