"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Check if value not is null, undefined or empty
 * @param {any} value value to check
 */
function isRequired(value) {
    return value !== null && value !== undefined;
}
exports.isRequired = isRequired;
/**
 * Check if value not is number
 * @param {any} value value to check
 */
function isNumber(value) {
    return !isRequired(value) || /^[0-9]$/.test(value);
}
exports.isNumber = isNumber;
/**
 * Check if value not is guid
 * @param {any} value value value to check
 */
function isGuid(value) {
    return !isRequired(value) || /^\w{8}-(\w{4}-){3}\w{12}$/.test(value);
}
exports.isGuid = isGuid;
/**
 * Check if value contains max limit characters
 * @param {any} value value value to check
 * @param {number} max limit max than characters
 */
function isMaxLength(value, max) {
    return !isRequired(value) || value.length <= max;
}
exports.isMaxLength = isMaxLength;
/**
 * Check if value contains less limit characters
 * @param {any} value value value to check
 * @param {number} min limit less than characters
 */
function isMinLength(value, min) {
    return !isRequired(value) || value.length >= min;
}
exports.isMinLength = isMinLength;
/**
 * Check if value is e-mail
 * @param {any} value value value to check
 */
function isEmail(value) {
    return !isRequired(value) || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
}
exports.isEmail = isEmail;
/**
 * Check is value exist in list options
 * @param {any} value value value to check
 * @param {Array} options options to check
 */
function isEnum(value, options) {
    let result = !isRequired(value);
    if (!result) {
        let keys = Object.keys(options);
        let length = keys.length;
        for (let i = 0; i < length; i++) {
            if (value === options[keys[i]]) {
                result = true;
                break;
            }
        }
    }
    return result;
}
exports.isEnum = isEnum;
