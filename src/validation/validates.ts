/**
 * Check if value not is null, undefined or empty
 * @param {any} value value to check 
 */
export function isRequired(value: any): boolean {
    return value !== null && value !== undefined;
}

/**
 * Check if value not is number
 * @param {any} value value to check
 */
export function isNumber(value): boolean {
    return !isRequired(value) || /^[0-9]$/.test(value);
}

/**
 * Check if value not is guid
 * @param {any} value value value to check
 */
export function isGuid(value): boolean {
    return !isRequired(value) || /^\w{8}-(\w{4}-){3}\w{12}$/.test(value);
}

/**
 * Check if value contains max limit characters
 * @param {any} value value value to check
 * @param {number} max limit max than characters
 */
export function isMaxLength(value, max): boolean {
    return !isRequired(value) || value.length <= max;
}

/**
 * Check if value contains less limit characters
 * @param {any} value value value to check
 * @param {number} min limit less than characters
 */
export function isMinLength(value, min): boolean {
    return !isRequired(value) || value.length >= min;
}

/**
 * Check if value is e-mail
 * @param {any} value value value to check
 */
export function isEmail(value): boolean {
    return !isRequired(value) || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
}

/**
 * Check is value exist in list options
 * @param {any} value value value to check
 * @param {Array} options options to check
 */
export function isEnum(value, options): boolean {
    let result: boolean = !isRequired(value);
    if (!result) {
        let keys: string[] = Object.keys(options);
        let length: number = keys.length;
        for(let i: number = 0; i < length; i++) {
            if (value === options[keys[i]]) {
                result = true;
                break;
            }
        }
    }
    return result;
}
