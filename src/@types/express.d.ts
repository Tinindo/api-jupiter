declare namespace Express {
    export interface Request {
        query: {
            limit: number | string;
            offset: number | string;
        };
    }
}
