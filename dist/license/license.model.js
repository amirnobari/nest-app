"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicenseModel = void 0;
const mongoose_1 = require("mongoose");
const LicenseSchema = new mongoose_1.Schema({
    userId: { type: String, required: true },
    licenseCode: { type: String, required: true },
    startDate: { type: Date, required: true },
    completionDate: { type: Date, required: true },
    status: { type: String, required: true },
});
exports.LicenseModel = (0, mongoose_1.model)('License', LicenseSchema);
//# sourceMappingURL=license.model.js.map