import { Body, Controller, Post } from '@nestjs/common';
import { CreateDetalisTimePriceLicenseDto } from './dto/create-detalis-time-price-license.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productService.createProduct(createProductDto);
  }

  @Post('detalis-time-price-license')
  createDetalisTimePriceLicense(
    @Body() createDetalisTimePriceLicenseDto: CreateDetalisTimePriceLicenseDto,
  ) {
    return this.productService.createDetalisTimePriceLicense(
      createDetalisTimePriceLicenseDto,
    );
  }
}
