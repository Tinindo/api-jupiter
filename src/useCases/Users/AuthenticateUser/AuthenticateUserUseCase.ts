import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import authConfig from '@config/auth'

import { AppError } from "@helpers/AppError";

import { PostgresUsersRepository } from "@repositories/implementations/PostgresUsersRepository";

import { IAuthenticateUserRequest } from "./AuthenticateUserDTO";

import { User } from '@entities/User';

interface IAuthenticateUserResponse {
    user: User,
    token: string,
}

export class AuthenticateUserUseCase {
    constructor(
        private userRepository: PostgresUsersRepository
    ) { }

    async execute({ email, password }: IAuthenticateUserRequest): Promise<IAuthenticateUserResponse> {
        const user = await this.userRepository.findByEmail(email, true);

        if (!user) {
            throw new AppError('Combinação de usuário/senha inválida', 401);
        }

        const passwordMatched = await compare(password, user.password);

        if (!passwordMatched) {
            throw new AppError('Combinação de usuário/senha inválida', 401);
        }

        const token = sign(user, process.env.JWT_SECRET_KEY, {
            subject: String(user.user_id),
            ...authConfig.jwt
        });

        return { user, token };
    }
}