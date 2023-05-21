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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailsTimePriceLicenseSchema = exports.DetailsTimePriceLicense = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const details_license_price_enum_1 = require("../../enum/details-time-price-license/details-license-price.enum");
const details_license_time_enum_1 = require("../../enum/details-time-price-license/details-license-time.enum");
let DetailsTimePriceLicense = class DetailsTimePriceLicense {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: details_license_price_enum_1.DetailsLicensePriceEnum, required: true }),
    __metadata("design:type", String)
], DetailsTimePriceLicense.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: details_license_time_enum_1.DetailsLicenseTimeEnum, required: true }),
    __metadata("design:type", String)
], DetailsTimePriceLicense.prototype, "time", void 0);
DetailsTimePriceLicense = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], DetailsTimePriceLicense);
exports.DetailsTimePriceLicense = DetailsTimePriceLicense;
exports.DetailsTimePriceLicenseSchema = mongoose_1.SchemaFactory.createForClass(DetailsTimePriceLicense);
//# sourceMappingURL=details-time-price-license.schema.js.map