import { IsNotEmpty, IsString } from 'class-validator'

export class CreateLicenseDto {
  @IsString()
  @IsNotEmpty()
  userId: string

  @IsString()
  @IsNotEmpty()
  productId: string

  @IsString()
  @IsNotEmpty()
  detailsTimePriceId: string
}
