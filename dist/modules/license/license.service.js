"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicenseService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const license_schema_1 = require("../../database/mongoose/license/license.schema");
const license_status_enum_1 = require("../../enum/license/license-status.enum");
const details_time_price_license_schema_1 = require("../../database/mongoose/details-time-price-license.schema");
let LicenseService = class LicenseService {
    constructor(licenseModel, detailsTimePriceLicenseModel) {
        this.licenseModel = licenseModel;
        this.detailsTimePriceLicenseModel = detailsTimePriceLicenseModel;
    }
    async getLicenses() {
        return this.licenseModel.find().exec();
    }
    async createLicense(createLicenseDto) {
        const { userId, productId, detailsTimePriceId } = createLicenseDto;
        const lastFourUserId = userId.slice(-4).toUpperCase();
        const lastFourProductId = productId.slice(-4).toUpperCase();
        const licenseKey = lastFourUserId + '-' + lastFourProductId + '-' + 'XXXX' + '-' + 'XXXX';
        const detailsTimePriceLicense = await this.detailsTimePriceLicenseModel.findOne({ _id: detailsTimePriceId });
        let time = detailsTimePriceLicense.time;
        let timeArr = time.split('-');
        let number = Number(timeArr[0]);
        let type = timeArr[1];
        if (type == 'd') {
            number = number;
        }
        if (type == 'm') {
            number = number * 30;
        }
        if (type == 'y') {
            number = number * 365;
        }
        let startetAt = new Date(Date.now());
        let nowDate = new Date(Date.now());
        let expiredAt = new Date(nowDate.setDate(nowDate.getDate() + number));
        const createdLicense = new this.licenseModel({
            userId,
            licenseKey,
            startetAt,
            expiredAt,
            detailsTimePriceLicense,
            status: license_status_enum_1.LicenseStatusEnum.Enable,
        });
        return createdLicense.save();
    }
};
LicenseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(license_schema_1.License.name)),
    __param(1, (0, mongoose_1.InjectModel)(details_time_price_license_schema_1.DetailsTimePriceLicense.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], LicenseService);
exports.LicenseService = LicenseService;
//# sourceMappingURL=license.service.js.map