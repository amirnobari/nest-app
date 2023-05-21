import { Body, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import {
  DetailsTimePriceLicense,
  DetailsTimePriceLicenseDocument,
} from 'src/database/mongoose/details-time-price-license.schema'
import {
  Product,
  ProductDocument,
} from 'src/database/mongoose/products/product.schema'
import { CreateDetalisTimePriceLicenseDto } from './dto/create-detalis-time-price-license.dto'
import { CreateProductDto } from './dto/create-product.dto'
import { License, LicenseDocument } from 'src/database/mongoose/license/license.schema'

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
    @InjectModel(DetailsTimePriceLicense.name)
    private readonly detailsTimePriceLicenseModel: Model<DetailsTimePriceLicenseDocument>,
    @InjectModel(License.name)
    private readonly licenseModel: Model<LicenseDocument>,
  ) { }

  async createProduct(createProductDto: CreateProductDto) {
    const license = await this.licenseModel.findOne({ _id: createProductDto.licenseId })
    if (!license) {
      throw new Error('licenseid is invalid')
    }

    const detailsTimePriceLicense = await this.detailsTimePriceLicenseModel.findOne({ _id: createProductDto.detailsTimePriceLicenseId })
    if (!detailsTimePriceLicense) {
      throw new Error('detailsTimePriceLicenseId is invalid')
    }

    //create to database
    const product = new this.productModel({
      name: createProductDto.name,
      status: createProductDto.status,
      category: createProductDto.category,
      license,
      detailsTimePriceLicense,
    })

    return await product.save()
  }

  async createDetalisTimePriceLicense(
    createDetalisTimePriceLicenseDto: CreateDetalisTimePriceLicenseDto,
  ) {
    const detalisTimePriceLicense = new this.detailsTimePriceLicenseModel({
      price: createDetalisTimePriceLicenseDto.price,
      time: createDetalisTimePriceLicenseDto.time,
    })
    return await detalisTimePriceLicense.save()
  }
}
