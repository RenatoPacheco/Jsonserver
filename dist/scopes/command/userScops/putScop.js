"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const notifications = __importStar(require("../../../validation/notifications"));
const userScop_1 = require("../../userScop");
class PutScop {
    constructor() {
        this.userScop = new userScop_1.UserScop();
    }
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
exports.PutScop = PutScop;
