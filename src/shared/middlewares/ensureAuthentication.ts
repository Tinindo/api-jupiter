import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import 'dotenv/config';

import { AppError } from '@helpers/AppError';

interface TokenPayload {
    iat: number;
    exp: number;
    sub: number;
}

export function ensureAuthentication(request: Request, response: Response, next: NextFunction) {
    const { authorization } = request.headers;

    if (!authorization) {
        throw new AppError('Token de autenticação não fornecido',);
    }

    const [, token] = authorization.split(' ');

    if (!token) {
        throw new AppError('Token de autenticação inválido', 401);
    }

    try {
        const decoded = verify(token, process.env.JWT_SECRET_KEY);
        console.log(decoded)

        const { sub } = decoded as TokenPayload;

        request.user = { user_id: sub };

        next();

    } catch (error) {
        throw new AppError('Token de autenticação inválido', 401);
    }
}