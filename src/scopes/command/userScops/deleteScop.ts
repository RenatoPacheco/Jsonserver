import * as notifications from '../../../validation/notifications';
import { UserScop } from '../../userScop';

export class DeleteScop {
    
    constructor() { }

    private userScop = new UserScop();

    idIsValid(value, reference, name = 'Value') {
        const results = this.userScop.idIsValid(value, reference, name);
        results.validate(notifications.isRequerid(value, reference, reference));
        return results;
    }
}
