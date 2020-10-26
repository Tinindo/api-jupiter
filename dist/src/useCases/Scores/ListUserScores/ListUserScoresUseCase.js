"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserScoresUseCase = void 0;
const AppError_1 = require("@helpers/AppError");
class ListUserScoresUseCase {
    constructor(usersRepository, userScoresRepository) {
        this.usersRepository = usersRepository;
        this.userScoresRepository = userScoresRepository;
    }
    async execute(user_id, limit, offset) {
        const userExists = await this.usersRepository.findById(user_id);
        if (!userExists) {
            throw new AppError_1.AppError('Ué, parece que esse usuário não existe ¯\_(ツ)_/¯');
        }
        const userScores = await this.userScoresRepository.list(user_id, limit, offset);
        return userScores;
    }
}
exports.ListUserScoresUseCase = ListUserScoresUseCase;
