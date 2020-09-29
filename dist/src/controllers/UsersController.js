"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../database/connection"));
const CreateUserService_1 = __importDefault(require("../services/Users/CreateUserService"));
const FindUserDetailsByIdService_1 = __importDefault(require("../services/Users/FindUserDetailsByIdService"));
const AppError_1 = __importDefault(require("../helpers/AppError"));
const isUserCreated_1 = __importDefault(require("../helpers/isUserCreated"));
class UsersController {
    async findOne(request, response) {
        const { id } = request.params;
        const user = await FindUserDetailsByIdService_1.default.execute(id);
        return response.json(user);
    }
    async create(request, response) {
        const { email } = request.body;
        const userAlreadyExists = await isUserCreated_1.default.execute(email);
        if (userAlreadyExists) {
            throw new AppError_1.default('Já existe um usuário com esse e-mail', 400);
        }
        const createdUser = await CreateUserService_1.default.execute(request);
        return response.status(201).json(createdUser);
    }
    async list(request, response) {
        const { limit, offset } = request.query;
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
        const users = await connection_1.default('users')
            .select(usersFieldsToReturn)
            .limit(Number(limit))
            .offset(Number(offset));
        return response.json(users);
    }
}
exports.default = UsersController;
