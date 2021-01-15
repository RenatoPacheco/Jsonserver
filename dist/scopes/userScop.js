"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserScop = void 0;
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
