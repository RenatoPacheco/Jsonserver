const notifications = require('../../../validation/notifications')
const UserScop = require('../../userScop')

class DeleteScop {
    constructor() {
       this.userScop = new UserScop()
    }

    idIsValid(value, reference, name = 'Value') {
        const results = this.userScop.idIsValid(value, reference, name);
        results.validate(notifications.isRequerid(value, reference, reference));
        return results;
    }
}


module.exports = DeleteScop