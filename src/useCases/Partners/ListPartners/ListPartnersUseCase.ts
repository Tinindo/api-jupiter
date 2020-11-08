import { IPartnersRepository } from "@repositories/IPartnersRepository";

export class ListPartnersUseCase {
    constructor(
        private partnersRepository: IPartnersRepository,
    ) { }

    async execute(filters: string, limit: number, offset: number) {

        // let partners;
        // if (filters) {
        // const filters = filters.split(',').forEach(filter => filter.toLowerCase().trim());

        // partners = await this.partnersRepository.listFilteredBySpecialities(filters, limit, offset);

        // } else {
        // listagem sem filtros
        // partners = await this.partnersRepository.list(treatedFilters, limit, offset);
        // }

        // return partners;

        const partners = await this.partnersRepository.list(limit, offset);

        return partners;
    }
}