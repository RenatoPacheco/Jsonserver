import { ValidateNotification } from '../validation/validateNotification';
import { PostScop } from '../scopes/command/userScops/postScop';
import { PutScop } from '../scopes/command/userScops/putScop';
import { PatchScop } from '../scopes/command/userScops/patchScop';
import { DeleteScop } from '../scopes/command/userScops/deleteScop';

/**
 * Validate values to run post request
 * @param {object} data values to validate
 */
export function postCmd(data) {
    const results = new ValidateNotification();
    const scop = new PostScop();

    results.concat(scop.nameIsValid(data.name, 'name', 'Name'));
    results.concat(scop.lastnameIsValid(data.lastname, 'lastname', 'Lastname'));
    results.concat(scop.emailIsValid(data.email, 'email', 'E-mail'));
    results.concat(scop.statusIsValid(data.status, 'status', 'Status'));

    return results;
}

/**
 * Validate values to run put request
 * @param {object} data values to validate
 */
export function putCmd(data) {
    const results = new ValidateNotification();
    const scop = new PutScop();

    results.concat(scop.idIsValid(data.id, 'id', 'Id'));
    results.concat(scop.nameIsValid(data.name, 'name', 'Name'));
    results.concat(scop.lastnameIsValid(data.lastname, 'lastname', 'Lastname'));
    results.concat(scop.emailIsValid(data.email, 'email', 'E-mail'));
    results.concat(scop.statusIsValid(data.status, 'status', 'Status'));

    return results;
}

/**
 * Validate values to run patch request
 * @param {object} data values to validate
 */
export function patchCmd (data) {
    const results = new ValidateNotification();
    const scop = new PatchScop();

    results.concat(scop.idIsValid(data.id, 'id', 'Id'));
    results.concat(scop.nameIsValid(data.name, 'name', 'Name'));
    results.concat(scop.lastnameIsValid(data.lastname, 'lastname', 'Lastname'));
    results.concat(scop.emailIsValid(data.email, 'email', 'E-mail'));
    results.concat(scop.statusIsValid(data.status, 'status', 'Status'));

    return results;
}

/**
 * Validate values to run delete request
 * @param {object} data values to validate
 */
export function deleteCmd(data) {
    const results = new ValidateNotification();
    const scop = new DeleteScop();

    results.concat(scop.idIsValid(data.id, 'id', 'Id'));

    return results;
}