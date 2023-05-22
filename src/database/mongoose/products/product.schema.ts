// import { Document, HydratedDocument, Schema, model } from 'mongoose';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { ProductCategoryEnum } from 'src/enum/product/product.category.enum';
import { ProductStatusEnum } from 'src/enum/product/product.status.enum';
import { License } from '../license/license.schema';
import { DetailsTimePriceLicense } from '../details-time-price-license.schema';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
export class Product {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, enum: ProductStatusEnum, required: true })
  status: ProductStatusEnum;

  @Prop({ type: String, enum: ProductCategoryEnum, required: true })
  category: ProductCategoryEnum;

  @Prop({ type: License })
  license: License;

  @Prop({ type: [Types.ObjectId], ref: DetailsTimePriceLicense.name })
  detailTimePrice: DetailsTimePriceLicense[];
}
export const ProductSchema = SchemaFactory.createForClass(Product);
