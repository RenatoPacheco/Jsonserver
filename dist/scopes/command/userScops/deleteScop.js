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
class DeleteScop {
    constructor() {
        this.userScop = new userScop_1.UserScop();
    }
    idIsValid(value, reference, name = 'Value') {
        const results = this.userScop.idIsValid(value, reference, name);
        results.validate(notifications.isRequerid(value, reference, reference));
        return results;
    }
}
exports.DeleteScop = DeleteScop;
