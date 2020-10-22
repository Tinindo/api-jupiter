import Knex, { Raw } from 'knex';
import { hash } from 'bcrypt';

import { User } from '@entities/User';

export class PostgresUsersRepository {
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
            .groupBy('users.user_id')
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

    async findDetails(user_id: number | string) {
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

        const [userDetails] = await this.connection
            .select(usersFieldsToReturn)
            .avg({ score: 'users_scores.score' })
            .from('users')
            .where('user_id', '=', user_id)
            .leftJoin('users_properties', 'users_properties.user_id', String(user_id))
            .leftJoin('users_scores', 'users_scores.user_id', String(user_id))

        return userDetails;
    }
}