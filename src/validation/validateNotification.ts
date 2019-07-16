import { IErrorMessage } from "./errorMessage";

export class ValidateNotification {
    
    constructor () { }

    errors: IErrorMessage[] = [];

    /**
     * Return true is not exist errors
     */
    isValid (): boolean {
        return this.errors.length === 0;
    }

    /**
     * Concat errors validateNotification in between objects 
     * @param {ValidateNotification} validateNotification value to concat errors
     */
    concat (validateNotification: ValidateNotification): void {
        const length = validateNotification.errors.length;
        for (let i = 0; i < length; i++) {
            this.errors.push(validateNotification.errors[i]);
        }
    }

    /**
     * Validate notifications
     * @param  {...any} notifications values to validate
     */
    validate (...notifications: IErrorMessage[]): boolean {
        const result: IErrorMessage[] = [];
        const length: number = notifications.length;
        for (let i: number = 0; i < length; i++) {
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
    clear (): void {
        this.errors = [];
    }
}