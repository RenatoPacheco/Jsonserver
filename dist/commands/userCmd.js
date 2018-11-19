"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateNotification_1 = require("../validation/validateNotification");
const postScop_1 = require("../scopes/command/userScops/postScop");
const putScop_1 = require("../scopes/command/userScops/putScop");
const patchScop_1 = require("../scopes/command/userScops/patchScop");
const deleteScop_1 = require("../scopes/command/userScops/deleteScop");
/**
 * Validate values to run post request
 * @param {object} data values to validate
 */
function postCmd(data) {
    const results = new validateNotification_1.ValidateNotification();
    const scop = new postScop_1.PostScop();
    results.concat(scop.nameIsValid(data.name, 'name', 'Name'));
    results.concat(scop.lastnameIsValid(data.lastname, 'lastname', 'Lastname'));
    results.concat(scop.emailIsValid(data.email, 'email', 'E-mail'));
    results.concat(scop.statusIsValid(data.status, 'status', 'Status'));
    return results;
}
exports.postCmd = postCmd;
/**
 * Validate values to run put request
 * @param {object} data values to validate
 */
function putCmd(data) {
    const results = new validateNotification_1.ValidateNotification();
    const scop = new putScop_1.PutScop();
    results.concat(scop.idIsValid(data.id, 'id', 'Id'));
    results.concat(scop.nameIsValid(data.name, 'name', 'Name'));
    results.concat(scop.lastnameIsValid(data.lastname, 'lastname', 'Lastname'));
    results.concat(scop.emailIsValid(data.email, 'email', 'E-mail'));
    results.concat(scop.statusIsValid(data.status, 'status', 'Status'));
    return results;
}
exports.putCmd = putCmd;
/**
 * Validate values to run patch request
 * @param {object} data values to validate
 */
function patchCmd(data) {
    const results = new validateNotification_1.ValidateNotification();
    const scop = new patchScop_1.PatchScop();
    results.concat(scop.idIsValid(data.id, 'id', 'Id'));
    results.concat(scop.nameIsValid(data.name, 'name', 'Name'));
    results.concat(scop.lastnameIsValid(data.lastname, 'lastname', 'Lastname'));
    results.concat(scop.emailIsValid(data.email, 'email', 'E-mail'));
    results.concat(scop.statusIsValid(data.status, 'status', 'Status'));
    return results;
}
exports.patchCmd = patchCmd;
/**
 * Validate values to run delete request
 * @param {object} data values to validate
 */
function deleteCmd(data) {
    const results = new validateNotification_1.ValidateNotification();
    const scop = new deleteScop_1.DeleteScop();
    results.concat(scop.idIsValid(data.id, 'id', 'Id'));
    return results;
}
exports.deleteCmd = deleteCmd;
