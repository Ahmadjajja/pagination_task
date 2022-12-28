"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const crawlies_personal_details_schema = new mongoose_1.default.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    prefix: {
        type: String,
        required: true,
    },
    is_candidate: {
        type: String,
        required: true,
    }
});
const Crawlies_personal_details_schema = mongoose_1.default.model('crawlies_personal_details', crawlies_personal_details_schema);
exports.default = Crawlies_personal_details_schema;
