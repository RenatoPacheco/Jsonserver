const notifications = require('../validation/notifications')
const ValidateNotification = require('../validation/validateNotification')
const status = require('../valueObject/status')

class UserScop {
    
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
            notifications.isMaxlength(value, 100, reference, name),
            notifications.isMinlength(value, 3, reference, name)
        );
        return results;
    }

    lastnameIsValid(value, reference, name = 'Value') {
        const results = new ValidateNotification();
        results.validate(
            notifications.isMaxlength(value, 100, reference, name),
            notifications.isMinlength(value, 3, reference, name)
        );
        return results;
    }

    emailIsValid(value, reference, name = 'Value') {
        const results = new ValidateNotification();
        results.validate(
            notifications.isMaxlength(value, 300, reference, name),
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

module.exports = UserScop