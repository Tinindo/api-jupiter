"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserPropertyController = void 0;
class CreateUserPropertyController {
    constructor(createUserPropertyUseCase) {
        this.createUserPropertyUseCase = createUserPropertyUseCase;
    }
    async handle(request, response) {
        const { user_id } = request.params;
        const createdUserProperty = await this.createUserPropertyUseCase.execute(request.body, Number(user_id));
        return response.status(201).json(createdUserProperty);
    }
}
exports.CreateUserPropertyController = CreateUserPropertyController;
