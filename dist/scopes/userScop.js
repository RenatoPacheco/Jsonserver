"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const notifications = __importStar(require("../validation/notifications"));
const validateNotification_1 = require("../validation/validateNotification");
const status_1 = require("../valueObject/status");
class UserScop {
    constructor() { }
    idIsValid(value, reference, name = 'Value') {
        const results = new validateNotification_1.ValidateNotification();
        results.validate(notifications.isGuid(value, reference, name));
        return results;
    }
    nameIsValid(value, reference, name = 'Value') {
        const results = new validateNotification_1.ValidateNotification();
        results.validate(notifications.isMaxLength(value, 100, reference, name), notifications.isMinLength(value, 3, reference, name));
        return results;
    }
    lastNameIsValid(value, reference, name = 'Value') {
        const results = new validateNotification_1.ValidateNotification();
        results.validate(notifications.isMaxLength(value, 100, reference, name), notifications.isMinLength(value, 3, reference, name));
        return results;
    }
    emailIsValid(value, reference, name = 'Value') {
        const results = new validateNotification_1.ValidateNotification();
        results.validate(notifications.isMaxLength(value, 300, reference, name), notifications.isEmail(value, reference, name));
        return results;
    }
    statusIsValid(value, reference, name = 'Value') {
        const results = new validateNotification_1.ValidateNotification();
        results.validate(notifications.isEnum(value, status_1.status, reference, name));
        return results;
    }
}
exports.UserScop = UserScop;
