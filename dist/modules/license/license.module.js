"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicenseModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const license_controller_1 = require("./license.controller");
const license_service_1 = require("./license.service");
const license_schema_1 = require("../../database/mongoose/license/license.schema");
let LicenseModule = class LicenseModule {
};
LicenseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: license_schema_1.License.name, schema: license_schema_1.LicenseSchema }]),
        ],
        controllers: [license_controller_1.LicenseController],
        providers: [license_service_1.LicenseService],
    })
], LicenseModule);
exports.LicenseModule = LicenseModule;
//# sourceMappingURL=license.module.js.map