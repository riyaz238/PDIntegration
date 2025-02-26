"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.painDiarySchema = void 0;
const zod_1 = require("zod");
exports.painDiarySchema = zod_1.z.object({
    patientId: zod_1.z.string(),
    date: zod_1.z.string().regex(/^\d{2}-\d{2}-\d{4}$/), // Ensures DD-MM-YYYY format
    activity: zod_1.z.string().max(500),
    painlevel: zod_1.z.string(),
    medication: zod_1.z.string().max(500),
    timePeriod: zod_1.z.string(),
});
