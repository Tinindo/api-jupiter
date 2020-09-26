import { Request, Response } from 'express';

import createUserProperty from '../services/UsersProperties/CreateUserPropertyService';

class UsersAddressesController {
    async create(request: Request, response: Response) {
        const createdUserProperty = await createUserProperty.execute(request);

        return response.status(201).json(createdUserProperty);
    }

    async listByUser(request: Request, response: Response) {
        const { id } = request.params;


    }
}

export default new UsersAddressesController();