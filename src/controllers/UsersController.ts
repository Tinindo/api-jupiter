import { Request, Response } from 'express';
import database from '../database/connection';

import createUser from '../services/Users/CreateUserService';
import findUserDetails from '../services/Users/FindUserDetailsByIdService';

import AppError from '../helpers/AppError';
import isUserCreated from '../helpers/isUserCreated';

class UsersController {
    async findOne(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const user = await findUserDetails.execute(id);

        return response.json(user);
    }

    async create(request: Request, response: Response): Promise<Response> {
        const { email } = request.body;

        const userAlreadyExists = await isUserCreated.execute(email);

        if (userAlreadyExists) {
            throw new AppError('Já existe um usuário com esse e-mail', 400);
        }

        const createdUser = await createUser.execute(request);

        return response.status(201).json(createdUser);
    }

    async list(request: Request, response: Response): Promise<Response> {
        const { limit, offset } = request.query;

        const usersFieldsToReturn = [
            'user_id',
            'first_name',
            'last_name',
            'email',
            'whatsapp',
            'document',
            'birth_date',
            'is_provider',
            'active',
            'avatar',
            'created_at',
            'updated_at'
        ];

        const users = await database('users')
            .select(usersFieldsToReturn)
            .limit(Number(limit))
            .offset(Number(offset));

        return response.json(users);
    }
}

export default UsersController;