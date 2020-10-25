"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserController = void 0;
const AppError_1 = require("@helpers/AppError");
class UpdateUserController {
    constructor(updateUserUseCase) {
        this.updateUserUseCase = updateUserUseCase;
    }
    async handle(request, response) {
        const { user_id } = request.params;
        const requestCallerId = request.user.user_id;
        if (user_id !== requestCallerId) {
            throw new AppError_1.AppError('Parece que você não tem autorização para realizar essa ação', 403);
        }
        const { first_name, last_name, whatsapp, document, birth_date, is_provider, active, } = request.body;
        const updatedUser = await this.updateUserUseCase.execute(user_id, {
            first_name,
            last_name,
            whatsapp,
            document,
            birth_date,
            is_provider,
            active,
        });
        return response.json(updatedUser);
    }
}
exports.UpdateUserController = UpdateUserController;
