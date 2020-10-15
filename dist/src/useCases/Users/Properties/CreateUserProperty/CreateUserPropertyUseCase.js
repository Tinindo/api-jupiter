"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserPropertyUseCase = void 0;
const AppError_1 = require("@helpers/AppError");
class CreateUserPropertyUseCase {
    constructor(userRepository, userPropertyRepository) {
        this.userRepository = userRepository;
        this.userPropertyRepository = userPropertyRepository;
    }
    async execute(data, user_id) {
        const userExists = await this.userRepository.findById(user_id);
        if (!userExists) {
            throw new AppError_1.AppError('Estranho... parece que esse usuário não existe. Verifique a requisição e tente novamente', 400);
        }
        const createdUserProperty = await this.userPropertyRepository.create(Object.assign({ user_id }, data));
        return createdUserProperty;
    }
}
exports.CreateUserPropertyUseCase = CreateUserPropertyUseCase;
