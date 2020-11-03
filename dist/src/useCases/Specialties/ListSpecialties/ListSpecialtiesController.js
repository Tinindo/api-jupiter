"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSpecialtiesController = void 0;
class ListSpecialtiesController {
    constructor(listSpecialtiesUseCase) {
        this.listSpecialtiesUseCase = listSpecialtiesUseCase;
    }
    async handle(request, response) {
        const specialties = await this.listSpecialtiesUseCase.execute();
        return response.json(specialties);
    }
}
exports.ListSpecialtiesController = ListSpecialtiesController;
