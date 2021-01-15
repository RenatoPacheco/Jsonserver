"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEnum = exports.isEmail = exports.isMinLength = exports.isMaxLength = exports.isGuid = exports.isNumber = exports.isRequired = void 0;
const errorMessage_1 = require("./errorMessage");
const validates = __importStar(require("./validates"));
/**
 * Check if value not is null, undefined or empty
 * @param {any} value value to check
 * @param {string} reference key reference for group notifications
 * @param {string} name name to show in notification message, default: Value
 */
function isRequired(value, reference, name = 'Value') {
    let result = undefined;
    if (!validates.isRequired(value)) {
        result = errorMessage_1.errorMessage(`${name} is required`, reference);
    }
    return result;
}
exports.isRequired = isRequired;
/**
 * Check if value not is number
 * @param {any} value value to check
 * @param {string} reference key reference for group notifications
 * @param {string} name name to show in notification message, default: Value
 */
function isNumber(value, reference, name = 'Value') {
    let result = undefined;
    if (!validates.isNumber(value)) {
        result = errorMessage_1.errorMessage(`${name} not is a number`, reference);
    }
    return result;
}
exports.isNumber = isNumber;
/**
 * Check if value not is guid
 * @param {any} value value value to check
 * @param {string} reference key reference for group notifications
 * @param {string} name name to show in notification message, default: Value
 */
function isGuid(value, reference, name = 'Value') {
    let result = undefined;
    if (!validates.isGuid(value)) {
        result = errorMessage_1.errorMessage(`${name} not is a guid`, reference);
    }
    return result;
}
exports.isGuid = isGuid;
/**
 * Check if value contains max limit characters
 * @param {any} value value value to check
 * @param {number} max limit max than characters
 * @param {string} reference key reference for group notifications
 * @param {string} name name to show in notification message, default: Value
 */
function isMaxLength(value, max, reference, name = 'Value') {
    let result = undefined;
    if (!validates.isMaxLength(value, max)) {
        result = errorMessage_1.errorMessage(`${name} contains more than ${max} characters`, reference);
    }
    return result;
}
exports.isMaxLength = isMaxLength;
/**
 * Check if value contains less limit characters
 * @param {any} value value value to check
 * @param {number} min limit less than characters
 * @param {string} reference key reference for group notifications
 * @param {string} name name to show in notification message, default: Value
 */
function isMinLength(value, min, reference, name = 'Value') {
    let result = undefined;
    if (!validates.isMinLength(value, min)) {
        result = errorMessage_1.errorMessage(`${name} contains less than ${min} characters`, reference);
    }
    return result;
}
exports.isMinLength = isMinLength;
/**
 * Check if value is e-mail
 * @param {any} value value to check
 * @param {string} reference key reference for group notifications
 * @param {string} name name to show in notification message, default: Value
 */
function isEmail(value, reference, name = 'Value') {
    let result = undefined;
    if (!validates.isEmail(value)) {
        result = errorMessage_1.errorMessage(`${name} not is valid e-mail`, reference);
    }
    return result;
}
exports.isEmail = isEmail;
/**
 * Check is value exist in list options
 * @param {any} value value value to check
 * @param {Array} options options to check
 * @param {string} reference key reference for group notifications
 * @param {string} name name to show in notification message, default: Value
 */
function isEnum(value, options, reference, name = 'Value') {
    let result = undefined;
    if (!validates.isEnum(value, options)) {
        result = errorMessage_1.errorMessage(`${name} not is valid`, reference);
    }
    return result;
}
exports.isEnum = isEnum;
