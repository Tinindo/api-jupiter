"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const validateFields_1 = require("@helpers/validateFields");
const AppError_1 = require("@helpers/AppError");
const User_1 = require("@entities/User");
class CreateUserUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(data) {
        const requiredFields = ['first_name', 'last_name', 'email', 'password', 'whatsapp', 'document', 'birth_date'];
        validateFields_1.validateFields(requiredFields, data);
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);
        if (userAlreadyExists) {
            throw new AppError_1.AppError('Hmmm, parece que existe um usuário com esse e-mail', 400);
        }
        const user = new User_1.User(data);
        const createdUser = await this.usersRepository.create(user);
        return createdUser;
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
