declare namespace Express {
    export interface Request {
        query: {
            limit: string;
            offset: string;
        };
    }
}
