import { Request, Response, NextFunction } from 'express';
export default function (request: Request, response: Response, next: NextFunction) {
    const { limit, offset } = request.query;

    let validatedLimit = parseInt(limit);
    let validatedOffset = parseInt(offset);

    validatedLimit = !validatedLimit || validatedLimit > 100 ? 20 : validatedLimit;
    validatedOffset = !validatedOffset ? 0 : validatedOffset;

    request.query.limit = String(validatedLimit);
    request.query.offset = String(validatedOffset);

    next();
}
