"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateServiceScheduleController = void 0;
const AppError_1 = require("@helpers/AppError");
class CreateServiceScheduleController {
    constructor(createServiceScheduleUseCase) {
        this.createServiceScheduleUseCase = createServiceScheduleUseCase;
    }
    async handle(request, response) {
        const tokenUserId = request.user.user_id;
        const { user_id, partner_id, user_property_id, price, start_at, finish_at, } = request.body;
        if (user_id != tokenUserId) {
            throw new AppError_1.AppError('Parece que você não tem permissão para realizar essa ação', 403);
        }
        const createdServiceSchedule = await this.createServiceScheduleUseCase.execute({
            user_id,
            partner_id,
            user_property_id,
            price,
            start_at,
            finish_at,
        });
        return response.status(201).json(createdServiceSchedule);
    }
}
exports.CreateServiceScheduleController = CreateServiceScheduleController;
