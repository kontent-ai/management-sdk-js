import { IResponse, TestHttpService } from '@kontent-ai/core-sdk';
import { createManagementClient, ManagementClient } from '../../../lib';

export const testEnvironmentId: string = 'environmentId';
export const testSubscriptionId: string = 'subscriptionId';

export const testApiKey: string = 'managementTestApiKey';

export function useLiveTesting(): boolean {
    if (testApiKey) {
        return true;
    }
    return false;
}

export const cmClient: ManagementClient = createManagementClient({
    environmentId: testEnvironmentId,
    subscriptionId: testSubscriptionId,
    apiKey: testApiKey
});

export const getTestManagementClient = (environmentId: string, apiKey: string) =>
    createManagementClient({
        apiKey: apiKey,
        environmentId: environmentId
    });

export const cmTestClientWithInvalidApiKey: ManagementClient = createManagementClient({
    environmentId: testEnvironmentId,
    subscriptionId: testSubscriptionId,
    apiKey: testApiKey
});

export const getTestClientWithBaseKontentError: (errorJson: any) => ManagementClient = (errorJson: any) =>
    createManagementClient({
        environmentId: testEnvironmentId,
        apiKey: testApiKey,
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
    createManagementClient({
        environmentId: testEnvironmentId,
        subscriptionId: testSubscriptionId,
        apiKey: testApiKey,
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
