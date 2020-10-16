"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationHandler = void 0;
function paginationHandler(request, response, next) {
    const { limit, offset } = request.query;
    let validatedLimit = parseInt(String(limit));
    let validatedOffset = parseInt(String(offset));
    validatedLimit = !validatedLimit || validatedLimit > 100 ? 20 : validatedLimit;
    validatedOffset = !validatedOffset ? 0 : validatedOffset;
    request.query.limit = String(validatedLimit);
    request.query.offset = String(validatedOffset);
    next();
}
exports.paginationHandler = paginationHandler;
