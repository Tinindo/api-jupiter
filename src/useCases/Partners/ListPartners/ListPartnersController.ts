import { Request, Response } from "express";
import { ListPartnersUseCase } from "./ListPartnersUseCase";

export class ListPartnersController {
    constructor(
        private listPartnersUseCase: ListPartnersUseCase
    ) { }

    async handle(request: Request, response: Response) {
        const { filters, limit, offset } = request.query;

        const partners = await this.listPartnersUseCase.execute(
            String(filters),
            Number(limit),
            Number(offset)
        );

        return response.json(partners);
    }
}