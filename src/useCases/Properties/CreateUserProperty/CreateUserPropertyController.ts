import { AppError } from '@helpers/AppError';
import { Request, Response } from 'express';
import { CreateUserPropertyUseCase } from './CreateUserPropertyUseCase';

export class CreateUserPropertyController {
    constructor(
        private createUserPropertyUseCase: CreateUserPropertyUseCase,
    ) { }

    async handle(request: Request, response: Response) {
        const tokenUserId = request.user.user_id;
        const { user_id } = request.params;

        if (tokenUserId !== user_id) {
            throw new AppError('Ops! Parece que você não está autorizado a fazer essa ação', 403);
        }

        const createdUserProperty = await this.createUserPropertyUseCase.execute(
            request.body,
            Number(user_id)
        );

        return response.status(201).json(createdUserProperty);
    }
}