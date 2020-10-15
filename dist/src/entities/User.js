"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(props, user_id) {
        Object.assign(this, props);
        if (user_id) {
            this.user_id = user_id;
        }
    }
}
exports.User = User;
