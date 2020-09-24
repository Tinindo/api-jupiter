import { Request, Response } from 'express';
import database from '../database/connection';

import createUserService from '../services/CreateUserService';

class UsersController {
    async create(request: Request, response: Response): Promise<Response> {
        try {
            console.log(request.body);
            const createdUser = await createUserService.execute(request);

            return response.status(201).json(createdUser);

        } catch (error) {
            return response.status(400).json({ error: error.stack || error.message || error });
        }
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