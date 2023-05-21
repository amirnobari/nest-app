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
exports.ProductSchema = exports.Product = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const product_category_enum_1 = require("../../../enum/product/product.category.enum");
const product_status_enum_1 = require("../../../enum/product/product.status.enum");
const license_schema_1 = require("../license/license.schema");
const details_time_price_license_schema_1 = require("../details-time-price-license.schema");
let Product = class Product {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: product_status_enum_1.ProductStatusEnum, required: true }),
    __metadata("design:type", String)
], Product.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: product_category_enum_1.ProductCategoryEnum, required: true }),
    __metadata("design:type", String)
], Product.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: license_schema_1.License }),
    __metadata("design:type", license_schema_1.License)
], Product.prototype, "licenseId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: details_time_price_license_schema_1.DetailsTimePriceLicense }),
    __metadata("design:type", details_time_price_license_schema_1.DetailsTimePriceLicense)
], Product.prototype, "detailTimePrice", void 0);
Product = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Product);
exports.Product = Product;
exports.ProductSchema = mongoose_1.SchemaFactory.createForClass(Product);
//# sourceMappingURL=product.schema.js.map