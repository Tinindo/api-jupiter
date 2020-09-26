import { Request } from 'express';
import { hash } from 'bcrypt';

import database from '../../database/connection';

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

class CreateUserService {
    async execute(request: Request): Promise<CreatedUserResponse> {

        const {
            first_name,
            last_name,
            email,
            password,
            whatsapp,
            birth_date,
            is_provider,
            document,
        } = request.body;

        const [userAlreadyExists] = await database('users')
            .select('*')
            .where('email', '=', email);

        if (userAlreadyExists) {
            throw new Error('Já existe um usuário com esse e-mail.');
        }

        // const parsedDate = moment(birth_date).format('YYYY-MM-DDTHH:mm:ss');

        const hashedPassword = await hash(password, 10);

        const [createdUser] = await database('users')
            .insert({
                first_name,
                last_name,
                email,
                password: hashedPassword,
                whatsapp,
                is_provider,
                birth_date,
                document
            })
            .returning('*');

        delete createdUser.password;

        return createdUser;

    }
}

export default new CreateUserService();