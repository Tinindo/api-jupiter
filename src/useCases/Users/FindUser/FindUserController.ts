import { Request, Response } from 'express';
import { FindUserUseCase } from './FindUserUseCase';

export class FindUserController {
    constructor(
        private findUserUseCase: FindUserUseCase
    ) { }

    async handle(request: Request, response: Response) {
        const { user_id } = request.params;

        const userDetails = this.findUserUseCase.execute(user_id);

        return response.json(userDetails);
    }
}