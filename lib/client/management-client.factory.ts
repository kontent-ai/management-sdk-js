import { ManagementClient } from './management-client.class';
import { IManagementClientConfig } from '../config';

export function createManagementClient(config: IManagementClientConfig): ManagementClient {
    return new ManagementClient(config);
}
