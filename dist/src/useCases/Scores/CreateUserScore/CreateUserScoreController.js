"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserScoreController = void 0;
class CreateUserScoreController {
    constructor(createUserScoreUseCase) {
        this.createUserScoreUseCase = createUserScoreUseCase;
    }
    async handle(request, response) {
        const { user_id } = request.params;
        const { score, additional_note } = request.body;
        const createdUserScore = await this.createUserScoreUseCase.execute(Number(user_id), { score, additional_note });
        return response.status(201).json(createdUserScore);
    }
}
exports.CreateUserScoreController = CreateUserScoreController;
