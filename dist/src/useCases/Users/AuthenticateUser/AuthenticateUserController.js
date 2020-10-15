"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserController = void 0;
class AuthenticateUserController {
    constructor(authenticateUserUseCase) {
        this.authenticateUserUseCase = authenticateUserUseCase;
    }
    async handle(request, response) {
        const { email, password } = request.body;
        const authenticatedUser = await this.authenticateUserUseCase.execute({
            email,
            password,
        });
        return response.json(authenticatedUser);
    }
}
exports.AuthenticateUserController = AuthenticateUserController;
