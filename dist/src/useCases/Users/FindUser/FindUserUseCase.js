"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUserUseCase = void 0;
const AppError_1 = require("@helpers/AppError");
class FindUserUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(user_id) {
        const userDetails = await this.usersRepository.findDetails(user_id);
        if (!userDetails) {
            throw new AppError_1.AppError('Ué, parece que esse usuário não existe');
        }
        return userDetails;
    }
}
exports.FindUserUseCase = FindUserUseCase;
