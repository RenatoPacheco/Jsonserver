const notifications = require('../../../validation/notifications')
const UserScop = require('../../userScop')

class PostScop {
    constructor() {
       this.userScop = new UserScop()
    }

    nameIsValid(value, reference, name = 'Value') {
        const results = this.userScop.nameIsValid(value, reference, name);
        results.validate(notifications.isRequerid(value, reference, reference));
        return results;
    }
    
    lastnameIsValid(value, reference, name = 'Value') {
        const results = this.userScop.lastnameIsValid(value, reference, name);
        results.validate(notifications.isRequerid(value, reference, reference));
        return results;
    }

    emailIsValid(value, reference, name = 'Value') {
        const results = this.userScop.emailIsValid(value, reference, name);
        results.validate(notifications.isRequerid(value, reference, reference));
        return results;
    }

    statusIsValid(value, reference, name = 'Value') {
        const results = this.userScop.statusIsValid(value, reference, name);
        results.validate(notifications.isRequerid(value, reference, reference));
        return results;
    }
}


module.exports = PostScop