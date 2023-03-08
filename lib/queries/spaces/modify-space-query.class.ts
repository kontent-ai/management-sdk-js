import { IManagementClientConfig } from '../../config';
import { Identifiers, SpaceModels } from '../../models';
import { SpaceResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class ModifySpaceQuery extends BaseQuery<SpaceResponses.ModifySpaceResponse> {

  constructor(
    protected config: IManagementClientConfig,
    protected queryService: ManagementQueryService,
    public identifier: Identifiers.SpaceIdentifier,
    public data: SpaceModels.IModifySpaceData[]
  ) {
    super(config, queryService);
  }

  toPromise(): Promise<SpaceResponses.ModifySpaceResponse> {
    return this.queryService.modifySpaceAsync(this.getUrl(), this.queryConfig, this.data);
  }

  protected getAction(): string {
    return this.apiEndpoints.modifySpace(this.identifier);
  }
}
