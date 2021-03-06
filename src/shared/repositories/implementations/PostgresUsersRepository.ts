import Knex from 'knex';
import { hash } from 'bcrypt';

import { IUsersRepository } from '@repositories/IUsersRepository';
import { User } from '@entities/User';

import { IUpdateUserDTO } from '@useCases/Users/UpdateUser/IUpdateUserDTO';

export class PostgresUsersRepository implements IUsersRepository {
    constructor(private connection: Knex) { }

    async findByEmail(email: string, returnPasswordHash = false): Promise<User | false> {
        const [user] = await this.connection('users')
            .select('*')
            .where('email', '=', email);

        if (!user) {
            return false;
        }

        if (!returnPasswordHash) {
            delete user.password;
        }

        return user;
    }

    async findActiveUserByEmail(email: string, returnPasswordHash = false) {
        const [user] = await this.connection('users')
            .select('*')
            .where('email', '=', email)
            .andWhere('active', '=', true);

        if (!user) {
            return false;
        }

        if (!returnPasswordHash) {
            delete user.password;
        }

        return user;
    }

    async create(userRequest: User): Promise<User> {
        userRequest.password = await hash(userRequest.password, 10);

        const user = new User(userRequest);

        const [createdUser] = await this.connection('users')
            .insert(user)
            .returning('*');

        delete createdUser.password;

        return createdUser;
    }

    async list(limit: number, offset: number): Promise<User[]> {
        const usersFieldsToReturn = [
            'users.user_id',
            'users.first_name',
            'users.last_name',
            'users.email',
            'users.whatsapp',
            'users.document',
            'users.birth_date',
            'users.is_provider',
            'users.active',
            'users.avatar',
            'users.created_at',
            'users.updated_at',
        ];

        // SELECT users.user_id, AVG(users_scores.score) as score
        // FROM users
        // LEFT JOIN users_scores
        // ON users.user_id = users_scores.user_id
        // GROUP BY users.user_id

        const users = await this.connection
            .select(usersFieldsToReturn)
            .avg({ score: 'users_scores.score' })
            .from('users')
            .leftJoin('users_scores', 'users.user_id', 'users_scores.user_id')
            .where('active', '=', 'true')
            .groupBy('users.user_id')
            .limit(limit)
            .offset(offset);

        return users;
    }

    async update(user_id: number | string, payload: IUpdateUserDTO): Promise<User> {
        const [updatedUser] = await this.connection('users')
            .update(payload)
            .where('user_id', '=', user_id)
            .returning('*');

        delete updatedUser.password;

        return updatedUser;
    }

    async findById(user_id: number | string): Promise<User | null> {
        const [user] = await this.connection('users')
            .select('*')
            .where('user_id', '=', user_id);

        return user;
    }

    async findDetails(user_id: number | string) {
        const usersFieldsToReturn = [
            'users.user_id',
            'users.first_name',
            'users.last_name',
            'users.email',
            'users.whatsapp',
            'users.document',
            'users.birth_date',
            'users.is_provider',
            'users.active',
            'users.avatar',
            'users.created_at',
            'users.updated_at',
        ];

        // SELECT users.user_id, users.first_name, users.last_name,
        // AVG(users_scores.score) as score
        // FROM users
        // LEFT JOIN users_scores ON users_scores.user_id = 1
        // WHERE users.user_id = 1
        // GROUP BY users.user_id

        const [user] = await this.connection
            .select(usersFieldsToReturn)
            .avg({ score: 'users_scores.score' })
            .from('users')
            .leftJoin('users_scores', 'users_scores.user_id', 'users.user_id')
            .where('users.user_id', '=', user_id)
            .groupBy('users.user_id');

        if (!user) {
            return false;
        }

        const userProperties = await this.connection('users_properties')
            .select('*')
            .where('user_id', '=', user_id);

        return {
            ...user,
            properties: userProperties
        };
    }
}