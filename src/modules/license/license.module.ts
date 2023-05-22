import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LicenseController } from './license.controller';
import { LicenseService } from './license.service';
import {
  License,
  LicenseSchema,
} from 'src/database/mongoose/license/license.schema';
import { DetailsTimePriceLicense, DetailsTimePriceLicenseSchema } from 'src/database/mongoose/details-time-price-license.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: License.name, schema: LicenseSchema },
      {
        name: DetailsTimePriceLicense.name,
        schema: DetailsTimePriceLicenseSchema,
      },

    ]),
  ],
  controllers: [LicenseController],
  providers: [LicenseService],
})
export class LicenseModule {}
