"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(request, response, next) {
    const { limit, offset } = request.query;
    let validatedLimit = parseInt(limit);
    let validatedOffset = parseInt(offset);
    validatedLimit = !validatedLimit || validatedLimit > 100 ? 20 : validatedLimit;
    validatedOffset = !validatedOffset ? 0 : validatedOffset;
    request.query.limit = String(validatedLimit);
    request.query.offset = String(validatedOffset);
    next();
}
exports.default = default_1;
