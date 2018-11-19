"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidateNotification {
    constructor() {
        this.errors = [];
    }
    /**
     * Return true is not exist errors
     */
    isValid() {
        return this.errors.length === 0;
    }
    /**
     * Concat errors validateNotification in between objects
     * @param {ValidateNotification} validateNotification value to concat errors
     */
    concat(validateNotification) {
        const length = validateNotification.errors.length;
        for (let i = 0; i < length; i++) {
            this.errors.push(validateNotification.errors[i]);
        }
    }
    /**
     * Validate notifications
     * @param  {...any} notifications values to validete
     */
    validate(...notifications) {
        const result = [];
        const length = notifications.length;
        for (let i = 0; i < length; i++) {
            if (notifications[i] !== undefined) {
                result.push(notifications[i]);
            }
        }
        this.errors = this.errors.concat(result);
        return result.length === 0;
    }
    /**
     * Clear all errors
     */
    clear() {
        this.errors = [];
    }
}
exports.ValidateNotification = ValidateNotification;
