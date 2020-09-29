"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../../database/connection"));
const AppError_1 = __importDefault(require("../../helpers/AppError"));
class CreateUserScoreService {
    async execute(scorePayload, userId) {
        if (!userId) {
            throw new AppError_1.default('Missing required property ID at request params', 400);
        }
        const { score, additional_note, } = scorePayload;
        const [createdScore] = await connection_1.default('users_scores')
            .insert({
            user_id: userId,
            additional_note,
            score,
        })
            .returning('*');
        return createdScore;
    }
}
exports.default = new CreateUserScoreService();
