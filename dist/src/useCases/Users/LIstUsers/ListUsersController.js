"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUsersController = void 0;
class ListUsersController {
    constructor(listUsersUseCase) {
        this.listUsersUseCase = listUsersUseCase;
    }
    async handle(request, response) {
        const { limit, offset } = request.query;
        const users = await this.listUsersUseCase.execute(Number(limit), Number(offset));
        return response.json(users);
    }
}
exports.ListUsersController = ListUsersController;
