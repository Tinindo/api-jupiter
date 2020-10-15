"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = require("@helpers/AppError");
function errorHandler(error, request, response, next) {
    if (error instanceof AppError_1.AppError) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message
        });
    }
    console.error(error);
    return response.status(500).json({
        status: 'error',
        message: 'Ooops! Erro interno no servidor :(',
        internalMessage: error.message,
        stack: error.stack,
    });
}
exports.default = errorHandler;
