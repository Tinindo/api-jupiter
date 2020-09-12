import { Request, Response } from 'express';

import createUserService from '../services/CreateUserService';

interface CreatedUserResponse {
    first_name: string;
    last_name: string;
    email: string;
    whatsapp: string;
    document: string;
    is_provider: boolean;
    birth_date: Date;
    created_at: Date;
    updated_at: Date;
}

class UsersController {

    async create(request: Request, response: Response): Promise<Response> {
        try {
            console.log(request.body);
            const createdUser = await createUserService.execute(request);

            return response.status(201).json(createdUser);

        } catch (error) {
            return response.status(400).json({ error: error.stack || error.message || error })
        }
    }


    list() {

    }


}

export default UsersController;