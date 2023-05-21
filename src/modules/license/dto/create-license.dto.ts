import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLicenseDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  productId: string;

  @IsString()
  @IsNotEmpty()
  price: string; //it is enum type,do later

  @IsString()
  @IsNotEmpty()
  periodtime: string; //it is enum type,do later
}
