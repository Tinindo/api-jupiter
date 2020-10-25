"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserScoreUseCase = void 0;
const AppError_1 = require("@helpers/AppError");
class CreateUserScoreUseCase {
    constructor(usersRepository, usersScoresRespository) {
        this.usersRepository = usersRepository;
        this.usersScoresRespository = usersScoresRespository;
    }
    async execute(user_id, userScorePayload) {
        const userExists = await this.usersRepository.findById(user_id);
        if (!userExists) {
            throw new AppError_1.AppError('Estranho... parece que esse usuário não existe. Verifique a requisição e tente novamente', 400);
        }
        const createdUserScore = await this.usersScoresRespository.create(Object.assign({ user_id }, userScorePayload));
        return createdUserScore;
    }
}
exports.CreateUserScoreUseCase = CreateUserScoreUseCase;
