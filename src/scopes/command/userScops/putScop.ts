import * as notifications from '../../../validation/notifications';
import { UserScop } from '../../userScop';

export class PutScop {
    
    constructor() { }

    private userScop = new UserScop();

    idIsValid(value, reference, name = 'Value') {
        const results = this.userScop.idIsValid(value, reference, name);
        results.validate(notifications.isRequired(value, reference, reference));
        return results;
    }

    nameIsValid(value, reference, name = 'Value') {
        const results = this.userScop.nameIsValid(value, reference, name);
        results.validate(notifications.isRequired(value, reference, reference));
        return results;
    }

    lastNameIsValid(value, reference, name = 'Value') {
        const results = this.userScop.lastNameIsValid(value, reference, name);
        results.validate(notifications.isRequired(value, reference, reference));
        return results;
    }

    emailIsValid(value, reference, name = 'Value') {
        const results = this.userScop.emailIsValid(value, reference, name);
        results.validate(notifications.isRequired(value, reference, reference));
        return results;
    }

    statusIsValid(value, reference, name = 'Value') {
        const results = this.userScop.statusIsValid(value, reference, name);
        results.validate(notifications.isRequired(value, reference, reference));
        return results;
    }
}