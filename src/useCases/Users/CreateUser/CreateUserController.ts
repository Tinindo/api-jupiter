import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ) { }

    async handle(request: Request, response: Response) {
        const {
            first_name,
            last_name,
            email,
            password,
            whatsapp,
            document,
            avatar,
            birth_date
        } = request.body;

        const createdUser = await this.createUserUseCase.execute({
            first_name,
            last_name,
            email,
            password,
            whatsapp,
            document,
            avatar,
            birth_date
        });

        return response.status(201).json(createdUser);
    }
}