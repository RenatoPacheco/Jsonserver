import * as notifications from '../validation/notifications';
import { ValidateNotification } from '../validation/validateNotification';
import { status } from '../valueObject/status';

export class UserScop {
    
    constructor() { }
    
    idIsValid(value, reference, name = 'Value') {
        const results = new ValidateNotification();
        results.validate(
            notifications.isGuid(value, reference, name)
        );
        return results;
    }

    nameIsValid(value, reference, name = 'Value') {
        const results = new ValidateNotification();
        results.validate(
            notifications.isMaxLength(value, 100, reference, name),
            notifications.isMinLength(value, 3, reference, name)
        );
        return results;
    }

    lastNameIsValid(value, reference, name = 'Value') {
        const results = new ValidateNotification();
        results.validate(
            notifications.isMaxLength(value, 100, reference, name),
            notifications.isMinLength(value, 3, reference, name)
        );
        return results;
    }

    emailIsValid(value, reference, name = 'Value') {
        const results = new ValidateNotification();
        results.validate(
            notifications.isMaxLength(value, 300, reference, name),
            notifications.isEmail(value, reference, name)
        );
        return results;
    }

    statusIsValid(value, reference, name = 'Value') {
        const results = new ValidateNotification();
        results.validate(
            notifications.isEnum(value, status, reference, name)
        );
        return results;
    }
}