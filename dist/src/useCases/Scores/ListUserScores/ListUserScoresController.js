"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserScoresController = void 0;
class ListUserScoresController {
    constructor(listUserScoresUseCase) {
        this.listUserScoresUseCase = listUserScoresUseCase;
    }
    async handle(request, response) {
        const { user_id } = request.params;
        const { limit, offset } = request.query;
        const userScores = await this.listUserScoresUseCase.execute(Number(user_id), Number(limit), Number(offset));
        return response.json(userScores);
    }
}
exports.ListUserScoresController = ListUserScoresController;
