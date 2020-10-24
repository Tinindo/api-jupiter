"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresUsersRepository = void 0;
const bcrypt_1 = require("bcrypt");
const User_1 = require("@entities/User");
class PostgresUsersRepository {
    constructor(connection) {
        this.connection = connection;
    }
    async findByEmail(email, returnPasswordHash = false) {
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
    async create(userRequest) {
        const hashedPassword = await bcrypt_1.hash(userRequest.password, 10);
        userRequest.password = hashedPassword;
        const user = new User_1.User(userRequest);
        const [createdUser] = await this.connection('users')
            .insert(user)
            .returning('*');
        delete createdUser.password;
        return createdUser;
    }
    async list(limit, offset) {
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
    async findById(user_id) {
        const [user] = await this.connection('users')
            .select('*')
            .where('user_id', '=', user_id);
        return user;
    }
    async findDetails(user_id) {
        const userProperties = await this.connection('users_properties')
            .select('*')
            .where('user_id', '=', user_id);
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
        return Object.assign(Object.assign({}, user), { properties: userProperties });
    }
}
exports.PostgresUsersRepository = PostgresUsersRepository;
