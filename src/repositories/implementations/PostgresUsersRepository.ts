import Knex from 'knex';
import { hash } from 'bcrypt';

import { User } from '../../entities/User';

export class PostgresUsersRepository {
    constructor(private connection: Knex) { }

    async findByEmail(email: string): Promise<User | false> {
        const [user] = await this.connection('users')
            .select('*')
            .where('email', '=', email);

        console.log('user by email => ', user);

        if (!user) {
            return false;
        }

        delete user.password;

        return user;
    }

    async create(userRequest: User): Promise<User> {
        const hashedPassword = await hash(userRequest.password, 10);
        userRequest.password = hashedPassword;

        const user = new User(userRequest);

        const [createdUser] = await this.connection('users')
            .insert(user)
            .returning('*');

        delete createdUser.password;

        return createdUser;
    }

    async list(limit: number, offset: number): Promise<User[]> {
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

        const users = await this.connection('users')
            .select(usersFieldsToReturn)
            .limit(limit)
            .offset(offset);

        return users;
    }

    async findById(user_id: number | string): Promise<User | null> {
        const [user] = await this.connection('users')
            .select('*')
            .where('user_id', '=', user_id);

        return user;
    }
}