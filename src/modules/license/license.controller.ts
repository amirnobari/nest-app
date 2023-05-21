import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateLicenseDto } from './dto/create-license.dto';
import { LicenseService } from './license.service';

@Controller('licenses')
export class LicenseController {
  constructor(private readonly licenseService: LicenseService) {}

  @Post()
  async createLicense(
    @Body() createLicenseDto: CreateLicenseDto,
  ): Promise<any> {
    const createdLicense = await this.licenseService.createLicense(
      createLicenseDto,
    );
    return createdLicense;
  }
  @Get()
  async getLicenses(): Promise<any> {
    // منطق دریافت لایسنس‌ها را در اینجا پیاده‌سازی کنید
    // مثال:
    const licenses = await this.licenseService.getLicenses();
    return licenses;
  }
}
