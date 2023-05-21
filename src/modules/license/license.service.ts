import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  License,
  LicenseDocument,
} from '../../database/mongoose/license/license.schema';
import { LicenseStatusEnum } from './enum/license.enum';
import { CreateLicenseDto } from './dto/create-license.dto';

@Injectable()
export class LicenseService {
  constructor(
    @InjectModel(License.name)
    private readonly licenseModel: Model<LicenseDocument>,
  ) {}

  async getLicenses(): Promise<License[]> {
    return this.licenseModel.find().exec();
  }

  async createLicense(licenseData: CreateLicenseDto): Promise<License> {
    const { userId, productId, price, periodtime } = licenseData;
    const lastFourUserId = userId.slice(-4).toUpperCase();
    const lastFourProductId = productId.slice(-4).toUpperCase();
    //const lastFourTransactionId = transactionId.slice(-4).toUpperCase();    =>do later
    // const lastFourLogId = logId.slice(-4).toUpperCase();                    =>do later
    const licenseKey =
      lastFourUserId + '-' + lastFourProductId + '-' + 'XXXX' + '-' + 'XXXX';
    const createdLicense: LicenseDocument = new this.licenseModel({
      userId,
      productId,
      price,
      periodtime,
      status: LicenseStatusEnum.Pending,
      licenseKey,
    });

    return createdLicense.save();
  }
}
