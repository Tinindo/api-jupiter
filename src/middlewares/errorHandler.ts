import { Request, Response, NextFunction } from 'express';
import AppError from '../helpers/AppError';

function errorHandler(error: Error, request: Request, response: Response, next: NextFunction): Response {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message
        });
    }

    console.log(error);

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
    });
}

export default errorHandler;