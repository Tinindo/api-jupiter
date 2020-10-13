import { Request, Response } from 'express';
import { CreateUserPropertyUseCase } from './CreateUserPropertyUseCase';

export class CreateUserPropertyController {
    constructor(
        private createUserPropertyUseCase: CreateUserPropertyUseCase,
    ) { }

    async handle(request: Request, response: Response) {
        const { user_id } = request.params;

        const createdUserProperty = await this.createUserPropertyUseCase.execute(
            request.body,
            Number(user_id)
        );

        return response.status(201).json(createdUserProperty);
    }
}