"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../../database/connection"));
class FindUserById {
    async execute(userId) {
        const userPromise = connection_1.default
            .select('*')
            .from('users')
            .leftJoin('users_properties', 'user_id', '=', userId);
        const userScorePromise = connection_1.default('users_scores')
            .select('score')
            .where('user_id', '=', userId)
            .groupBy('score')
            .avg('score');
        const [user] = await Promise.resolve(userPromise);
        const [userScore] = await Promise.resolve(userScorePromise);
        const userDetails = Object.assign(Object.assign({}, user), { score: userScore });
        return userDetails;
    }
}
exports.default = new FindUserById();
