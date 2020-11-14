import { AppError } from "@helpers/AppError";
import { Request, Response } from "express";
import { CreateScheduleUseCase } from "./CreateServiceScheduleUseCase";

export class CreateServiceScheduleController {
    constructor(
        private createServiceScheduleUseCase: CreateScheduleUseCase
    ) { }

    async handle(request: Request, response: Response) {
        const tokenUserId = request.user.user_id;

        const {
            user_id,
            partner_id,
            user_property_id,
            price,
            start_at,
            finish_at,
        } = request.body;

        if (user_id != tokenUserId) {
            throw new AppError('Parece que você não tem permissão para realizar essa ação', 403);
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