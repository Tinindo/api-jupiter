import { Request, Response } from 'express';
import database from '../database/connection';

import createUserService from '../services/CreateUserService';

class UsersController {
    async findOne(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const [user] = await database('users')
            .select('*')
            .where('users.id', '=', id);

        delete user.password;

        return response.json(user);
    }

    async create(request: Request, response: Response): Promise<Response> {

        //valida se o usuário já existe

        const createdUser = await createUserService.execute(request);

        return response.status(201).json(createdUser);
    }


    async list(request: Request, response: Response): Promise<Response> {
        const { limit, offset } = request.query;

        const users = await database('users')
            .select('id', 'first_name', 'last_name', 'email', 'whatsapp', 'document',
                'birth_date', 'is_provider', 'active', 'avatar', 'created_at', 'updated_at')
            .limit(limit)
            .offset(offset);

        return response.json(users);
    }
}

export default UsersController;