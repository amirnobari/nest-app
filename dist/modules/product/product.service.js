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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const details_time_price_license_schema_1 = require("../../database/mongoose/details-time-price-license.schema");
const product_schema_1 = require("../../database/mongoose/products/product.schema");
let ProductService = class ProductService {
    constructor(productModel, detailsTimePriceLicenseModel) {
        this.productModel = productModel;
        this.detailsTimePriceLicenseModel = detailsTimePriceLicenseModel;
    }
    async createProduct(createProductDto) {
        const product = new this.productModel({
            name: createProductDto.name,
            status: createProductDto.status,
            category: createProductDto.category,
            license: createProductDto.licenseId,
            detailstimepricelicense: createProductDto.detailsTimePriceLicenseId,
        });
        return await product.save();
    }
    async createDetalisTimePriceLicense(createDetalisTimePriceLicenseDto) {
        const detalisTimePriceLicense = new this.detailsTimePriceLicenseModel({
            price: createDetalisTimePriceLicenseDto.price,
            time: createDetalisTimePriceLicenseDto.time,
        });
        return await detalisTimePriceLicense.save();
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(product_schema_1.Product.name)),
    __param(1, (0, mongoose_1.InjectModel)(details_time_price_license_schema_1.DetailsTimePriceLicense.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map