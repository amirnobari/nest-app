// import { Document, HydratedDocument, Schema, model } from 'mongoose';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LicenseDocument = HydratedDocument<License>;

@Schema({ timestamps: true })
export class License {
  @Prop({ type: String, required: true })
  userId: string;

  @Prop({ type: String, required: true })
  licenseKey: string;

  @Prop({ type: Date, required: true })
  startetAt: Date;

  @Prop({ type: Date, required: true })
  expiredAt: Date;

  @Prop({ type: String, required: true })
  status: string;
}
export const LicenseSchema = SchemaFactory.createForClass(License);
