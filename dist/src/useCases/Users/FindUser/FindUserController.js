"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUserController = void 0;
class FindUserController {
    constructor(findUserUseCase) {
        this.findUserUseCase = findUserUseCase;
    }
    async handle(request, response) {
        const { user_id } = request.params;
        const userDetails = await this.findUserUseCase.execute(user_id);
        return response.json(userDetails);
    }
}
exports.FindUserController = FindUserController;
