const notifications = require('../../../validation/notifications')
const UserScop = require('../../userScop')

class PatchScop {
    constructor() {
       this.userScop = new UserScop()
    }

    idIsValid(value, reference, name = 'Value') {
        const results = this.userScop.idIsValid(value, reference, name);
        results.validate(notifications.isRequerid(value, reference, reference));
        return results;
    }

    nameIsValid(value, reference, name = 'Value') {
        const results = this.userScop.nameIsValid(value, reference, name);
        return results;
    }

    lastnameIsValid(value, reference, name = 'Value') {
        const results = this.userScop.lastnameIsValid(value, reference, name);
        return results;
    }

    emailIsValid(value, reference, name = 'Value') {
        const results = this.userScop.emailIsValid(value, reference, name);
        return results;
    }

    statusIsValid(value, reference, name = 'Value') {
        const results = this.userScop.statusIsValid(value, reference, name);
        return results;
    }
}


module.exports = PatchScop