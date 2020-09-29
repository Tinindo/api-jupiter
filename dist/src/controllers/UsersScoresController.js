"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateUserScoreService_1 = __importDefault(require("../services/UsersScores/CreateUserScoreService"));
class UsersScoresController {
    async create(request, response) {
        const { id } = request.params;
        const createdScore = CreateUserScoreService_1.default.execute(request.body, Number(id));
        return response.status(201).json(createdScore);
    }
}
exports.default = new UsersScoresController();
