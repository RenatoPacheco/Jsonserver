"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Check if value not is null, undefined or empty
 * @param {any} value value to check
 */
function isRequerid(value) {
    return value !== null && value !== undefined;
}
exports.isRequerid = isRequerid;
/**
 * Check if value not is number
 * @param {any} value value to check
 */
function isNumber(value) {
    return !isRequerid(value) || /^[0-9]$/.test(value);
}
exports.isNumber = isNumber;
/**
 * Check if value not is guid
 * @param {any} value value value to check
 */
function isGuid(value) {
    return !isRequerid(value) || /^\w{8}-(\w{4}-){3}\w{12}$/.test(value);
}
exports.isGuid = isGuid;
/**
 * Check if value contains max limit characters
 * @param {any} value value value to check
 * @param {number} max limit max than characters
 */
function isMaxlength(value, max) {
    return !isRequerid(value) || value.length <= max;
}
exports.isMaxlength = isMaxlength;
/**
 * Check if value contains less limit characters
 * @param {any} value value value to check
 * @param {number} min limit less than characters
 */
function isMinlength(value, min) {
    return !isRequerid(value) || value.length >= min;
}
exports.isMinlength = isMinlength;
/**
 * Check if value is e-mail
 * @param {any} value value value to check
 */
function isEmail(value) {
    return !isRequerid(value) || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
}
exports.isEmail = isEmail;
/**
 * Check is value exist in list options
 * @param {any} value value value to check
 * @param {Array} options options to check
 */
function isEnum(value, options) {
    let result = !isRequerid(value);
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
