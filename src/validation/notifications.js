const validates = require('./validates')
const errorMessage = require('./errorMessage')

/**
 * Check if value not is null, undefined or empty
 * @param {any} value value to check 
 * @param {string} reference key reference for group notifications
 * @param {string} name name to show in nitification message, default: Value
 */
const isRequerid = function(value, reference, name = 'Value') {
    let result = undefined;
    if (!validates.isRequerid(value)) {
        result = errorMessage(`${name} is requerid`, reference);
    }
    return result;
}

/**
 * Check if value not is number
 * @param {any} value value to check
 * @param {string} reference key reference for group notifications
 * @param {string} name name to show in nitification message, default: Value
 */
const isNumber = function(value, reference, name = 'Value') {
    let result = undefined;
    if (!validates.isNumber(value)) {
        result = errorMessage(`${name} not is a number`, reference);
    }
    return result;
}

/**
 * Check if value not is guid
 * @param {any} value value value to check
 * @param {string} reference key reference for group notifications
 * @param {string} name name to show in nitification message, default: Value
 */
const isGuid = function(value, reference, name = 'Value') {
    let result = undefined;
    if (!validates.isGuid(value)) {
        result = errorMessage(`${name} not is a guid`, reference);
    }
    return result;
}

/**
 * Check if value contains max limit characters
 * @param {any} value value value to check
 * @param {number} max limit max than characters
 * @param {string} reference key reference for group notifications
 * @param {string} name name to show in nitification message, default: Value
 */
const isMaxlength = function(value, max, reference, name = 'Value') {
    let result = undefined;
    if (!validates.isMaxlength(value, max)) {
        result = errorMessage(`${name} contains more than ${max} characters`, reference);
    }
    return result;
}

/**
 * Check if value contains less limit characters
 * @param {any} value value value to check
 * @param {number} min limit less than characters
 * @param {string} reference key reference for group notifications
 * @param {string} name name to show in nitification message, default: Value
 */
const isMinlength = function(value, min, reference, name = 'Value') {
    let result = undefined;
    if (!validates.isMinlength(value, min)) {
        result = errorMessage(`${name} contains less than ${min} characters`, reference);
    }
    return result;
}

/**
 * Check if value is e-mail
 * @param {any} value value to check 
 * @param {string} reference key reference for group notifications
 * @param {string} name name to show in nitification message, default: Value
 */
const isEmail = function(value, reference, name = 'Value') {
    let result = undefined;
    if (!validates.isEmail(value)) {
        result = errorMessage(`${name} not is valid e-mail`, reference);
    }
    return result;
}

/**
 * Check is value exist in list options
 * @param {any} value value value to check
 * @param {Array} options options to check
 * @param {string} reference key reference for group notifications
 * @param {string} name name to show in nitification message, default: Value
 */
const isEnum = function(value, options, reference, name = 'Value') {
    let result = undefined;
    if (!validates.isEnum(value, options)) {
        result = errorMessage(`${name} not is valid`, reference);
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