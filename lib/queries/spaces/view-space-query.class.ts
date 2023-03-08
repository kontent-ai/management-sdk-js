import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { SpaceResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ViewSpaceQuery extends BaseQuery<SpaceResponses.ViewSpaceResponse> {

  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ManagementQueryService,
    public identifier: Identifiers.SpaceIdentifier,
  ) {
    super(config, queryService);
  }

  toPromise(): Promise<SpaceResponses.ViewSpaceResponse> {
    return this.queryService.viewSpaceAsync(this.getUrl(), this.queryConfig);
  }

  protected getAction(): string {
    return this.apiEndpoints.viewSpace(this.identifier);
  }
}
