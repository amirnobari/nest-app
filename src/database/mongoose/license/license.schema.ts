// import { Document, HydratedDocument, Schema, model } from 'mongoose';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { LicenseStatusEnum } from 'src/enum/license/license-status.enum'
import { DetailsTimePriceLicense } from '../details-time-price-license.schema'

export type LicenseDocument = HydratedDocument<License>

@Schema({ timestamps: true })
export class License {
  @Prop({ type: String, required: true })
  userId: string

  @Prop({ type: String, required: true })
  licenseKey: string

  @Prop({ type: Date })
  startetAt: Date

  @Prop({ type: Date })
  expiredAt: Date

  @Prop({ type: String, enum: LicenseStatusEnum, required: true })
  status: LicenseStatusEnum

  @Prop({ type: DetailsTimePriceLicense })
  detailsTimePriceLicense: DetailsTimePriceLicense
}
export const LicenseSchema = SchemaFactory.createForClass(License)
