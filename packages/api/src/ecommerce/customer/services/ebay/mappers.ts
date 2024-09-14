import { MappersRegistry } from '@@core/@core-services/registries/mappers.registry';
import { CoreUnification } from '@@core/@core-services/unification/core-unification.service';
import { Utils } from '@ecommerce/@lib/@utils';
import { ICustomerMapper } from '@ecommerce/customer/types';
import { Injectable } from '@nestjs/common';
import { EbayCustomerOutput } from './types';
import {
  UnifiedEcommerceCustomerInput,
  UnifiedEcommerceCustomerOutput,
} from '@ecommerce/customer/types/model.unified';
import { DesunifyReturnType } from '@@core/utils/types/desunify.input';

@Injectable()
export class EbayCustomerMapper implements ICustomerMapper {
  constructor(
    private mappersRegistry: MappersRegistry,
    private utilsService: Utils,
    private coreUnificationServices: CoreUnification,
  ) {}

  desunify(
    source: UnifiedEcommerceCustomerInput,
    customFieldMappings?: {
      slug: string;
      remote_id: string;
    }[],
  ): DesunifyReturnType {
    return;
  }

  unify(
    source: EbayCustomerOutput | EbayCustomerOutput[],
    connectionId: string,
    customFieldMappings?: {
      slug: string;
      remote_id: string;
    }[],
  ): Promise<
    UnifiedEcommerceCustomerOutput | UnifiedEcommerceCustomerOutput[]
  > {
    return {};
  }
}
