import { EncryptionService } from '@@core/@core-services/encryption/encryption.service';
import { PrismaService } from '@@core/@core-services/prisma/prisma.service';
import { ApiResponse } from '@@core/utils/types';
import { SyncParam } from '@@core/utils/types/interface';
import { ICustomerService } from '@ecommerce/customer/types';
import { Injectable } from '@nestjs/common';
import { ServiceRegistry } from '../registry.service';
import { EcommerceObject } from '@panora/shared';
import { LoggerService } from '@@core/@core-services/logger/logger.service';
import { EbayCustomerOutput } from './types';
import axios from 'axios';

@Injectable()
export class EbayService implements ICustomerService {
  constructor(
    private prisma: PrismaService,
    private logger: LoggerService,
    private cryptoService: EncryptionService,
    private registry: ServiceRegistry,
  ) {
    this.logger.setContext(
      EcommerceObject.customer.toUpperCase() + ':' + EbayService.name,
    );
    this.registry.registerService('shopify', this);
  }

  async sync(data: SyncParam): Promise<ApiResponse<EbayCustomerOutput[]>> {
    try {
      const { linkedUserId } = data;
      const connection = await this.prisma.connections.findFirst({
        where: {
          id_linked_user: linkedUserId,
          provider_slug: 'ebay',
          vertical: 'ecommerce',
        },
      });
      const resp = await axios.get(`${connection.account_url}/customer/sync`, {
        headers: {
          Authorization: `Bearer ${connection.access_token}`,
        },
      });
      const customers: EbayCustomerOutput[] = resp.data.customers;
      this.logger.log('Synced Ebay customers !');
      return {
        statusCode: 200,
        message: 'Ebay customers retrieved successfully !',
        data: customers,
      };
    } catch (error) {
      throw error;
    }
  }
}
