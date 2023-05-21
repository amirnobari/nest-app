"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const details_time_price_license_schema_1 = require("../../database/mongoose/details-time-price-license.schema");
const product_schema_1 = require("../../database/mongoose/products/product.schema");
const product_controller_1 = require("./product.controller");
const product_service_1 = require("./product.service");
const license_schema_1 = require("../../database/mongoose/license/license.schema");
let ProductModule = class ProductModule {
};
ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: product_schema_1.Product.name, schema: product_schema_1.ProductSchema },
                {
                    name: details_time_price_license_schema_1.DetailsTimePriceLicense.name,
                    schema: details_time_price_license_schema_1.DetailsTimePriceLicenseSchema,
                },
                {
                    name: license_schema_1.License.name,
                    schema: license_schema_1.LicenseSchema,
                },
            ]),
        ],
        controllers: [product_controller_1.ProductController],
        providers: [product_service_1.ProductService],
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map