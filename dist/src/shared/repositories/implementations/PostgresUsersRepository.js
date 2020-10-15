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
    async findById(user_id) {
        const [user] = await this.connection('users')
            .select('*')
            .where('user_id', '=', user_id);
        return user;
    }
}
exports.PostgresUsersRepository = PostgresUsersRepository;
