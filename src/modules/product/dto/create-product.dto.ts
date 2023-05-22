import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ProductCategoryEnum } from 'src/enum/product/product.category.enum';
import { ProductStatusEnum } from 'src/enum/product/product.status.enum';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  status: ProductStatusEnum;

  @IsNotEmpty()
  category: ProductCategoryEnum;

  @IsOptional()
  licenseId: string;

  @IsNotEmpty()
  detailsTimePriceLicenseId: string[];
}
