import { MappersRegistry } from '@@core/@core-services/registries/mappers.registry';
import { CoreUnification } from '@@core/@core-services/unification/core-unification.service';
import { Utils } from '@ecommerce/@lib/@utils';
import { IOrderMapper } from '@ecommerce/order/types';
import {
  UnifiedEcommerceOrderInput,
  UnifiedEcommerceOrderOutput,
} from '@ecommerce/order/types/model.unified';
import { Injectable } from '@nestjs/common';
import { EbayOrderOutput } from './types';

@Injectable()
export class EbayOrderMapper implements IOrderMapper {
  constructor(
    private mappersRegistry: MappersRegistry,
    private utils: Utils,
    private coreUnificationService: CoreUnification,
  ) {
    this.mappersRegistry.registerService('ecommerce', 'order', 'ebay', this);
  }

  async desunify(
    source: UnifiedEcommerceOrderInput,
    customFieldMappings?: {
      slug: string;
      remote_id: string;
    }[],
  ): Promise<EbayOrderOutput> {
    return {};
  }

  async unify(
    source: EbayOrderOutput | EbayOrderOutput[],
    connectionId: string,
    customFieldMappings?: {
      slug: string;
      remote_id: string;
    }[],
  ): Promise<UnifiedEcommerceOrderOutput | UnifiedEcommerceOrderOutput[]> {
    return [];
  }
}
