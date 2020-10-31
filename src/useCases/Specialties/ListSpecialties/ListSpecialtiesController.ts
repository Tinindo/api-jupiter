import { Request, Response } from "express";
import { ListSpecialtiesUseCase } from "./ListSpecialtiesUseCase";

export class ListSpecialtiesController {
    constructor(
        private listSpecialtiesUseCase: ListSpecialtiesUseCase
    ) { }

    async handle(request: Request, response: Response) {
        const specialties = await this.listSpecialtiesUseCase.execute();

        return response.json(specialties);
    }
}