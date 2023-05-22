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
exports.LicenseSchema = exports.License = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const license_status_enum_1 = require("../../../enum/license/license-status.enum");
const details_time_price_license_schema_1 = require("../details-time-price-license.schema");
let License = class License {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], License.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], License.prototype, "licenseKey", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], License.prototype, "startetAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], License.prototype, "expiredAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: license_status_enum_1.LicenseStatusEnum, required: true }),
    __metadata("design:type", String)
], License.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: details_time_price_license_schema_1.DetailsTimePriceLicense }),
    __metadata("design:type", details_time_price_license_schema_1.DetailsTimePriceLicense)
], License.prototype, "detailsTimePriceLicense", void 0);
License = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], License);
exports.License = License;
exports.LicenseSchema = mongoose_1.SchemaFactory.createForClass(License);
//# sourceMappingURL=license.schema.js.map