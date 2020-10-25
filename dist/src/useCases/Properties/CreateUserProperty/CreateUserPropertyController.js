"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserPropertyController = void 0;
const AppError_1 = require("@helpers/AppError");
class CreateUserPropertyController {
    constructor(createUserPropertyUseCase) {
        this.createUserPropertyUseCase = createUserPropertyUseCase;
    }
    async handle(request, response) {
        const tokenUserId = request.user.user_id;
        const { user_id } = request.params;
        if (tokenUserId !== user_id) {
            throw new AppError_1.AppError('Ops! Parece que você não está autorizado a fazer essa ação', 403);
        }
        const createdUserProperty = await this.createUserPropertyUseCase.execute(request.body, Number(user_id));
        return response.status(201).json(createdUserProperty);
    }
}
exports.CreateUserPropertyController = CreateUserPropertyController;
