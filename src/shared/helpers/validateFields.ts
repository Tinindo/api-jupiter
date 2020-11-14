import { AppError } from "./AppError";

export function validateFields(requiredFields: string[], payload: any) {
    const missingReFields = [];

    requiredFields.forEach(field => {
        const fieldValue = payload[field];

        if (!fieldValue) {
            missingReFields.push(field);
        }
    });

    if (missingReFields.length) {
        throw new AppError(`Requisição inválida. Faltando campos obrigatórios: ${missingReFields.join(', ')}`, 400);
    }

    return true;
}