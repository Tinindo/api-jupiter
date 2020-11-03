import { Request, Response } from "express";
import { CreatePartnerUseCase } from "./CreatePartnerUseCase";

export class CreatePartnerController {
    constructor(
        private createPartnerUseCase: CreatePartnerUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const {
            user_id,
            first_name,
            last_name,
            email,
            password,
            whatsapp,
            document,
            birth_date,
            bio,
            value_per_day,
            accepts_mensal_proposals,
            is_corporate,
            specialties,
        } = request.body;

        const createdPartner = await this.createPartnerUseCase.execute({
            user_id,
            first_name,
            last_name,
            email,
            password,
            whatsapp,
            document,
            birth_date,
            bio,
            value_per_day,
            accepts_mensal_proposals,
            is_corporate,
            specialties,
        });

        return response.status(201).json(createdPartner);
    }
}