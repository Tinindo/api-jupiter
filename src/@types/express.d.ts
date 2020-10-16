declare namespace Express {
    export interface Request {
        user: {
            user_id: number | string
        };
    }
}