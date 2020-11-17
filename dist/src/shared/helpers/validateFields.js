"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFields = void 0;
const AppError_1 = require("./AppError");
function validateFields(requiredFields, payload) {
    const missingReFields = [];
    requiredFields.forEach(field => {
        const fieldValue = payload[field];
        if (!fieldValue) {
            missingReFields.push(field);
        }
    });
    if (missingReFields.length) {
        throw new AppError_1.AppError(`Requisição inválida. Faltando campos obrigatórios: ${missingReFields.join(', ')}`, 400);
    }
    return true;
}
exports.validateFields = validateFields;
