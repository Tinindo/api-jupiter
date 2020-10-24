"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserUseCase = void 0;
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const auth_1 = __importDefault(require("@config/auth"));
const AppError_1 = require("@helpers/AppError");
class AuthenticateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute({ email, password }) {
        const user = await this.userRepository.findByEmail(email, true);
        if (!user) {
            throw new AppError_1.AppError('Combinação de usuário/senha inválida', 401);
        }
        const passwordMatched = await bcrypt_1.compare(password, user.password);
        delete user.password;
        if (!passwordMatched) {
            throw new AppError_1.AppError('Combinação de usuário/senha inválida', 401);
        }
        const token = jsonwebtoken_1.sign({ is_provider: user.is_provider }, process.env.JWT_SECRET_KEY, Object.assign({ subject: String(user.user_id) }, auth_1.default.jwt));
        return { user, token };
    }
}
exports.AuthenticateUserUseCase = AuthenticateUserUseCase;
