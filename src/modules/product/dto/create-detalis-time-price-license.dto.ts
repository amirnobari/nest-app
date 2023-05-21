import { IsNotEmpty } from 'class-validator';
import { DetailsLicensePriceEnum } from 'src/enum/details-time-price-license/details-license-price.enum';
import { DetailsLicenseTimeEnum } from 'src/enum/details-time-price-license/details-license-time.enum';

export class CreateDetalisTimePriceLicenseDto {
  @IsNotEmpty()
  price: DetailsLicensePriceEnum;

  @IsNotEmpty()
  time: DetailsLicenseTimeEnum;
}
