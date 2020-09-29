"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../database/connection"));
class IsUserCreated {
    async execute(userEmail) {
        const [user] = await connection_1.default('users')
            .select('*')
            .where('email', '=', userEmail);
        if (!user) {
            return false;
        }
        delete user.password;
        return user;
    }
}
exports.default = new IsUserCreated();
