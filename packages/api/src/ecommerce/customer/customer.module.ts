import { CoreUnification } from '@@core/@core-services/unification/core-unification.service';
import { IngestDataService } from '@@core/@core-services/unification/ingest-data.service';
import { WebhookService } from '@@core/@core-services/webhooks/panora-webhooks/webhook.service';
import { Utils } from '@ecommerce/@lib/@utils';
import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './services/customer.service';
import { ServiceRegistry } from './services/registry.service';
import { ShopifyService } from './services/shopify';
import { ShopifyCustomerMapper } from './services/shopify/mappers';
import { WoocommerceService } from './services/woocommerce';
import { WoocommerceCustomerMapper } from './services/woocommerce/mappers';
import { SyncService } from './sync/sync.service';
import { SquarespaceCustomerMapper } from './services/squarespace/mappers';
import { AmazonCustomerMapper } from './services/amazon/mappers';
import { EbayCustomerMapper } from './services/ebay/mappers';
import { EbayService } from './services/ebay';
@Module({
  controllers: [CustomerController],
  providers: [
    CustomerService,
    CoreUnification,
    SyncService,
    WebhookService,
    ServiceRegistry,
    IngestDataService,
    Utils,
    ShopifyCustomerMapper,
    WoocommerceCustomerMapper,
    SquarespaceCustomerMapper,
    AmazonCustomerMapper,
    EbayCustomerMapper,
    /* PROVIDERS SERVICES */
    ShopifyService,
    WoocommerceService,
    EbayService,
  ],
  exports: [SyncService],
})
export class CustomerModule {}
