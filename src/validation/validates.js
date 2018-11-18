/**
 * Check if value not is null, undefined or empty
 * @param {any} value value to check 
 */
const isRequerid = function(value) {
    return value !== null && value !== undefined;
}

/**
 * Check if value not is number
 * @param {any} value value to check
 */
const isNumber = function(value) {
    return !isRequerid(value) || /^[0-9]$/.test(value);
}

/**
 * Check if value not is guid
 * @param {any} value value value to check
 */
const isGuid = function(value) {
    return !isRequerid(value) || /^\w{8}-(\w{4}-){3}\w{12}$/.test(value);
}

/**
 * Check if value contains max limit characters
 * @param {any} value value value to check
 * @param {number} max limit max than characters
 */
const isMaxlength = function(value, max) {
    return !isRequerid(value) || value.length <= max;
}

/**
 * Check if value contains less limit characters
 * @param {any} value value value to check
 * @param {number} min limit less than characters
 */
const isMinlength = function(value, min) {
    return !isRequerid(value) || value.length >= min;
}

/**
 * Check if value is e-mail
 * @param {any} value value value to check
 */
const isEmail = function(value) {
    return !isRequerid(value) || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
}

/**
 * Check is value exist in list options
 * @param {any} value value value to check
 * @param {Array} options options to check
 */
const isEnum = function(value, options) {
    let result = !isRequerid(value)
    if (!result) {
        let keys = Object.keys(options);
        let length = keys.length;
        for(let i = 0; i < length; i++) {
            if (value === options[keys[i]]) {
                result = true;
                break;
            }
        }
    }
    return result;
}

module.exports = {
    isRequerid : isRequerid,
    isNumber : isNumber,
    isGuid: isGuid,
    isMaxlength: isMaxlength,
    isMinlength: isMinlength,
    isEmail: isEmail,
    isEnum: isEnum
}

