"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = require("bcrypt");
const connection_1 = __importDefault(require("../../database/connection"));
class CreateUserService {
    async execute(request) {
        const { first_name, last_name, email, password, whatsapp, birth_date, is_provider, document, } = request.body;
        const [userAlreadyExists] = await connection_1.default('users')
            .select('*')
            .where('email', '=', email);
        if (userAlreadyExists) {
            throw new Error('Já existe um usuário com esse e-mail.');
        }
        // const parsedDate = moment(birth_date).format('YYYY-MM-DDTHH:mm:ss');
        const hashedPassword = await bcrypt_1.hash(password, 10);
        const [createdUser] = await connection_1.default('users')
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
exports.default = new CreateUserService();
