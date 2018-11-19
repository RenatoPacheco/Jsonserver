"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const guid_1 = __importDefault(require("guid"));
const dateNow_1 = require("../helper/dateNow");
function errorMessage(message, reference = null) {
    return {
        id: guid_1.default.create(),
        message: message,
        reference: reference,
        date: dateNow_1.dateNow()
    };
}
exports.errorMessage = errorMessage;
