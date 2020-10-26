import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import authConfig from '@config/auth'

import { AppError } from "@helpers/AppError";

import { IUsersRepository } from '@repositories/IUsersRepository';

import { IAuthenticateUserRequest } from "./AuthenticateUserDTO";

import { User } from '@entities/User';

interface IAuthenticateUserResponse {
    user: User,
    token: string,
}

export class AuthenticateUserUseCase {
    constructor(
        private userRepository: IUsersRepository
    ) { }

    async execute({ email, password }: IAuthenticateUserRequest): Promise<IAuthenticateUserResponse> {
        const user = await this.userRepository.findActiveUserByEmail(email, true);

        if (!user) {
            throw new AppError('Combinação de usuário/senha inválida', 401);
        }

        const passwordMatched = await compare(password, user.password);
        delete user.password;

        if (!passwordMatched) {
            throw new AppError('Combinação de usuário/senha inválida', 401);
        }

        const token = sign({ is_provider: user.is_provider }, process.env.JWT_SECRET_KEY, {
            subject: String(user.user_id),
            ...authConfig.jwt
        });

        return { user, token };
    }
}