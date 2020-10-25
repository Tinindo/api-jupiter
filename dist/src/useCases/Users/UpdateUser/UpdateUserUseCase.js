"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserUseCase = void 0;
const UpdateUser_1 = require("@entities/UpdateUser");
const AppError_1 = require("@helpers/AppError");
class UpdateUserUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(user_id, data) {
        const userExists = await this.usersRepository.findById(user_id);
        if (!userExists) {
            throw new AppError_1.AppError('Estranho... Parece que esse usuário não existe :/');
        }
        const userPayload = new UpdateUser_1.UpdateUser(data);
        const updatedUser = await this.usersRepository.update(user_id, userPayload);
        return updatedUser;
    }
}
exports.UpdateUserUseCase = UpdateUserUseCase;
