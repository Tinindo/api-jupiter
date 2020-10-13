import { Request, Response, NextFunction } from 'express';
import { AppError } from '../helpers/AppError';

function errorHandler(error: Error, request: Request, response: Response, next: NextFunction): Response {
    if (error instanceof AppError) {
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

export default errorHandler;