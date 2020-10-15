"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthentication = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
require("dotenv/config");
const AppError_1 = require("@helpers/AppError");
function ensureAuthentication(request, response, next) {
    const { authorization } = request.headers;
    if (!authorization) {
        throw new AppError_1.AppError('Token de autenticação não fornecido');
    }
    const [, token] = authorization.split(' ');
    if (!token) {
        throw new AppError_1.AppError('Token de autenticação inválido', 401);
    }
    try {
        const decoded = jsonwebtoken_1.verify(token, process.env.JWT_SECRET_KEY);
        const { sub } = decoded;
        request.user = { user_id: sub };
        next();
    }
    catch (error) {
        throw new AppError_1.AppError('Token de autenticação inválido', 401);
    }
}
exports.ensureAuthentication = ensureAuthentication;
