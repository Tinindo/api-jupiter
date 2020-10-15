"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProperty = void 0;
class UserProperty {
    constructor(props, property_id) {
        Object.assign(this, props);
        if (property_id) {
            this.user_id = property_id;
        }
    }
}
exports.UserProperty = UserProperty;
