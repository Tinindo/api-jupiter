import { Request } from 'express';

import database from '../database/connection';

interface CreateUserPropertyResponse {
    user_id: number;
    living_rooms_quantity: number;
    bathrooms_quantity: number;
    kitchens_quantity: number;
    garages_quantity: number;
    rooms_quantity: number;
    postal_code: string;
    number: string;
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
}

class CreateUserPropertyService {
    async execute(request: Request): Promise<CreateUserPropertyResponse> {

        const {
            living_rooms_quantity,
            bathrooms_quantity,
            kitchens_quantity,
            garages_quantity,
            rooms_quantity,
            postal_code,
            number,
            street,
            neighborhood,
            city,
            state,
            country,
        } = request.body;

        const { id: user_id } = request.params;

        const [createdProperty] = await database
            .insert({
                user_id,
                living_rooms_quantity,
                bathrooms_quantity,
                kitchens_quantity,
                garages_quantity,
                rooms_quantity,
                postal_code,
                number,
                street,
                neighborhood,
                city,
                state,
                country,
            })
            .returning('*');

        return createdProperty;

    }
}

export default new CreateUserPropertyService();