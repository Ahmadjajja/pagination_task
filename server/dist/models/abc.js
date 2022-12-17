"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const abcSchema = new mongoose_1.default.Schema({
    index: {
        type: Number,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
    },
    balance: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    eyeColor: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    company: {
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
    address: {
        type: String,
        required: true,
    },
    registered: {
        type: String,
        required: true,
    },
    favoriteFruit: {
        type: String,
        required: true,
    },
});
const Abc = mongoose_1.default.model('Abc', abcSchema);
exports.default = Abc;
