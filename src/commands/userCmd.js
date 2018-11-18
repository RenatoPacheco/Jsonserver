const ValidateNotification = require('../validation/validateNotification')
const PostScop = require('../scopes/command/userScops/postScop');
const PutScop = require('../scopes/command/userScops/putScop');
const PatchScop = require('../scopes/command/userScops/patchScop');
const DeleteScop = require('../scopes/command/userScops/deleteScop');

/**
 * Validate values to run post request
 * @param {object} data values to validate
 */
const postCmd = function(data) {
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
const putCmd = function (data) {
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
const patchCmd = function (data) {
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
const deleteCmd = function(data) {
    const results = new ValidateNotification();
    const scop = new DeleteScop();

    results.concat(scop.idIsValid(data.id, 'id', 'Id'));

    return results;
}

module.exports = {
    post : postCmd,
    put : putCmd,
    patch: patchCmd,
    delete: deleteCmd
}