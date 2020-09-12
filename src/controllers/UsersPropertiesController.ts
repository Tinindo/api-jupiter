import { Request, Response } from 'express';

import createUserProperty from '../services/CreateUserPropertyService';

class UsersAddressesController {
    async create(request: Request, response: Response) {
        try {

            const createdUserProperty = await createUserProperty.execute(request);

            return response.status(201).json(createdUserProperty);

        } catch (error) {
            return response.status(400).json({ error: error.stack || error.message || error });
        }
    }
}

export default new UsersAddressesController();