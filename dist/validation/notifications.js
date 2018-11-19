"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorMessage_1 = require("./errorMessage");
const validates = __importStar(require("./validates"));
/**
 * Check if value not is null, undefined or empty
 * @param {any} value value to check
 * @param {string} reference key reference for group notifications
 * @param {string} name name to show in nitification message, default: Value
 */
function isRequerid(value, reference, name = 'Value') {
    let result = undefined;
    if (!validates.isRequerid(value)) {
        result = errorMessage_1.errorMessage(`${name} is requerid`, reference);
    }
    return result;
}
exports.isRequerid = isRequerid;
/**
 * Check if value not is number
 * @param {any} value value to check
 * @param {string} reference key reference for group notifications
 * @param {string} name name to show in nitification message, default: Value
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
 * @param {string} name name to show in nitification message, default: Value
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
 * @param {string} name name to show in nitification message, default: Value
 */
function isMaxlength(value, max, reference, name = 'Value') {
    let result = undefined;
    if (!validates.isMaxlength(value, max)) {
        result = errorMessage_1.errorMessage(`${name} contains more than ${max} characters`, reference);
    }
    return result;
}
exports.isMaxlength = isMaxlength;
/**
 * Check if value contains less limit characters
 * @param {any} value value value to check
 * @param {number} min limit less than characters
 * @param {string} reference key reference for group notifications
 * @param {string} name name to show in nitification message, default: Value
 */
function isMinlength(value, min, reference, name = 'Value') {
    let result = undefined;
    if (!validates.isMinlength(value, min)) {
        result = errorMessage_1.errorMessage(`${name} contains less than ${min} characters`, reference);
    }
    return result;
}
exports.isMinlength = isMinlength;
/**
 * Check if value is e-mail
 * @param {any} value value to check
 * @param {string} reference key reference for group notifications
 * @param {string} name name to show in nitification message, default: Value
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
 * @param {string} name name to show in nitification message, default: Value
 */
function isEnum(value, options, reference, name = 'Value') {
    let result = undefined;
    if (!validates.isEnum(value, options)) {
        result = errorMessage_1.errorMessage(`${name} not is valid`, reference);
    }
    return result;
}
exports.isEnum = isEnum;
