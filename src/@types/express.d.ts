import { query } from 'express';

declare namespace Express {
    export interface Request {
        user: {
            user_id: number | string
        };
        query: {
            query,
            limit: number | string;
            offset: number | string;
        }
    }
}