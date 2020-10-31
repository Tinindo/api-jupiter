import { ISpecialtiesRepository } from "@repositories/ISpecialtiesRepository";

export class ListSpecialtiesUseCase {
    constructor(
        private specialtiesRepository: ISpecialtiesRepository
    ) { }

    async execute() {
        const specialties = await this.specialtiesRepository.list();

        return specialties;
    }
}
