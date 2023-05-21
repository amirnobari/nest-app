// import { Document, HydratedDocument, Schema, model } from 'mongoose';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { DetailsLicensePriceEnum } from 'src/enum/details-time-price-license/details-license-price.enum';
import { DetailsLicenseTimeEnum } from 'src/enum/details-time-price-license/details-license-time.enum';

export type DetailsTimePriceLicenseDocument =
  HydratedDocument<DetailsTimePriceLicense>;

@Schema({ timestamps: true })
export class DetailsTimePriceLicense {
  @Prop({ type: String, enum: DetailsLicensePriceEnum, required: true })
  price: DetailsLicensePriceEnum;

  @Prop({ type: String, enum: DetailsLicenseTimeEnum, required: true })
  time: DetailsLicenseTimeEnum;
}
export const DetailsTimePriceLicenseSchema = SchemaFactory.createForClass(
  DetailsTimePriceLicense,
);
