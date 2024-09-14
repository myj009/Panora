import { EncryptionService } from '@@core/@core-services/encryption/encryption.service';
import { LoggerService } from '@@core/@core-services/logger/logger.service';
import { PrismaService } from '@@core/@core-services/prisma/prisma.service';
import { IOrderService } from '@ecommerce/order/types';
import { Injectable } from '@nestjs/common';
import { ServiceRegistry } from '../registry.service';
import { EcommerceObject } from '@panora/shared';
import { EbayOrderInput, EbayOrderOutput } from './types';
import { ApiResponse } from '@@core/utils/types';
import { SyncParam } from '@@core/utils/types/interface';

@Injectable()
export class EbayService implements IOrderService {
  constructor(
    private prisma: PrismaService,
    private logger: LoggerService,
    private cryptoService: EncryptionService,
    private registry: ServiceRegistry,
  ) {
    this.logger.setContext(
      EcommerceObject.order.toUpperCase() + ':' + EbayService.name,
    );
    this.registry.registerService('shopify', this);
  }

  async addOrder(
    orderData: EbayOrderInput,
    linkedUserId: string,
  ): Promise<ApiResponse<EbayOrderOutput>> {
    try {
      const connection = await this.prisma.connections.findFirst({
        where: {
          id_linked_user: linkedUserId,
          provider_slug: 'ebay',
          vertical: 'ecommerce',
        },
      });
      return {
        statusCode: 200,
        message: 'Order added successfully',
        data: {},
      };
    } catch (error) {
      throw error;
    }
  }

  async sync(data: SyncParam): Promise<ApiResponse<EbayOrderOutput[]>> {
    try {
      const { linkedUserId } = data;

      const connection = await this.prisma.connections.findFirst({
        where: {
          id_linked_user: linkedUserId,
          provider_slug: 'ebay',
          vertical: 'ecommerce',
        },
      });
      return {
        statusCode: 200,
        message: 'Order added successfully',
        data: [],
      };
    } catch (error) {
      throw error;
    }
  }
}
