import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import {
  License,
  LicenseDocument,
} from '../../database/mongoose/license/license.schema'
import { LicenseStatusEnum } from '../../enum/license/license-status.enum'
import { CreateLicenseDto } from './dto/create-license.dto'
import { DetailsTimePriceLicense, DetailsTimePriceLicenseDocument } from 'src/database/mongoose/details-time-price-license.schema'

@Injectable()
export class LicenseService {
  constructor(
    @InjectModel(License.name)
    private readonly licenseModel: Model<LicenseDocument>,
    @InjectModel(DetailsTimePriceLicense.name)
    private readonly detailsTimePriceLicenseModel: Model<DetailsTimePriceLicenseDocument>,
  ) { }

  async getLicenses(): Promise<License[]> {
    return this.licenseModel.find().exec()
  }
  //motagayer
  async createLicense(createLicenseDto: CreateLicenseDto): Promise<License> {
    const { userId, productId, detailsTimePriceId } = createLicenseDto
    const lastFourUserId = userId.slice(-4).toUpperCase()
    const lastFourProductId = productId.slice(-4).toUpperCase()
    //const lastFourTransactionId = transactionId.slice(-4).toUpperCase();    =>do later
    // const lastFourLogId = logId.slice(-4).toUpperCase();                    =>do later
    const licenseKey =
      lastFourUserId + '-' + lastFourProductId + '-' + 'XXXX' + '-' + 'XXXX'
    const detailsTimePriceLicense = await this.detailsTimePriceLicenseModel.findOne({ _id: detailsTimePriceId })
    let time = detailsTimePriceLicense.time
    let timeArr = time.split('-')
    let number = Number(timeArr[0])
    let type = timeArr[1]
    if (type == 'd') {
      number = number
    }
    if (type == 'm') {
      number = number * 30
    }
    if (type == 'y') {
      number = number * 365
    }
    let startetAt = new Date(Date.now())
    let nowDate = new Date(Date.now())
    let expiredAt = new Date(nowDate.setDate(nowDate.getDate() + number))
    const createdLicense: LicenseDocument = new this.licenseModel({
      userId,
      licenseKey,
      startetAt,
      expiredAt,
      detailsTimePriceLicense,
      status: LicenseStatusEnum.Enable,
    })
    return createdLicense.save()
  }
}
