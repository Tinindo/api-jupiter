"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSpecialtiesUseCase = void 0;
class ListSpecialtiesUseCase {
    constructor(specialtiesRepository) {
        this.specialtiesRepository = specialtiesRepository;
    }
    async execute() {
        const specialties = await this.specialtiesRepository.list();
        return specialties;
    }
}
exports.ListSpecialtiesUseCase = ListSpecialtiesUseCase;
