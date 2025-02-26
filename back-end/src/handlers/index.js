"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.savePainDiaryHandler = void 0;
const types_1 = require("../types");
const dal_1 = require("../dal");
const savePainDiaryHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const validation = types_1.painDiarySchema.safeParse(req.body);
    if (!validation.success) {
        res.status(400).json({ error: validation.error.errors });
    }
    try {
        if (validation.data) {
            const newEntry = yield (0, dal_1.savePainDiaryEntry)(validation.data);
            res.status(201).json(newEntry);
        }
    }
    catch (error) {
        console.error("Error saving pain diary entry:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.savePainDiaryHandler = savePainDiaryHandler;
