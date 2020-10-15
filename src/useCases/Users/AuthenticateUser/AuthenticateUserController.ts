import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';
import { Request, Response } from 'express';

export class AuthenticateUserController {
    constructor(
        private authenticateUserUseCase: AuthenticateUserUseCase
    ) { }

    async handle(request: Request, response: Response) {
        const { email, password } = request.body;

        const authenticatedUser = await this.authenticateUserUseCase.execute({
            email,
            password,
        });

        return response.json(authenticatedUser);
    }
}