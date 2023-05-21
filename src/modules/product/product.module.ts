import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  DetailsTimePriceLicense,
  DetailsTimePriceLicenseSchema,
} from 'src/database/mongoose/details-time-price-license.schema';
import {
  Product,
  ProductSchema,
} from 'src/database/mongoose/products/product.schema';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { License, LicenseSchema } from 'src/database/mongoose/license/license.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      {
        name: DetailsTimePriceLicense.name,
        schema: DetailsTimePriceLicenseSchema,
      },
      {
        name: License.name,
        schema:LicenseSchema,
      },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
