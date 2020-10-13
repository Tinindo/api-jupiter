import { Request, Response, NextFunction } from 'express';
export function paginationHandler(request: Request, response: Response, next: NextFunction) {
    const { limit, offset } = request.query;

    let validatedLimit = parseInt(String(limit));
    let validatedOffset = parseInt(String(offset));

    validatedLimit = !validatedLimit || validatedLimit > 100 ? 20 : validatedLimit;
    validatedOffset = !validatedOffset ? 0 : validatedOffset;

    request.query.limit = validatedLimit;
    request.query.offset = validatedOffset;

    next();
}
