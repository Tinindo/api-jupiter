import { Request, Response } from 'express';

import { AppError } from '@helpers/AppError';

import { UpdateUserUseCase } from './UpdateUserUseCase';

export class UpdateUserController {
    constructor(private updateUserUseCase: UpdateUserUseCase) { }

    async handle(request: Request, response: Response) {
        const { user_id } = request.params;
        const requestCallerId = request.user.user_id;

        if (user_id !== requestCallerId) {
            throw new AppError('Parece que você não tem autorização para realizar essa ação', 403);
        }

        const {
            first_name,
            last_name,
            whatsapp,
            document,
            birth_date,
            is_provider,
            active,
        } = request.body;

        const updatedUser = await this.updateUserUseCase.execute(user_id, {
            first_name,
            last_name,
            whatsapp,
            document,
            birth_date,
            is_provider,
            active,
        });

        return response.json(updatedUser);
    }
}

