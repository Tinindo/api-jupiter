import { UpdateUser } from '@entities/UpdateUser';

import { AppError } from "@helpers/AppError";

import { PostgresUsersRepository } from "@repositories/implementations/PostgresUsersRepository";

import { IUpdateUserDTO } from './IUpdateUserDTO';

export class UpdateUserUseCase {
    constructor(private usersRepository: PostgresUsersRepository) { }

    async execute(user_id: number | string, data: IUpdateUserDTO) {
        const userExists = await this.usersRepository.findById(user_id);

        if (!userExists) {
            throw new AppError('Estranho... Parece que esse usuário não existe :/');
        }

        const userPayload = new UpdateUser(data);

        const updatedUser = await this.usersRepository.update(user_id, userPayload);

        return updatedUser;
    }
}