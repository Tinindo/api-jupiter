"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPartnersUseCase = void 0;
class ListPartnersUseCase {
    constructor(partnersRepository) {
        this.partnersRepository = partnersRepository;
    }
    async execute(filters, limit, offset) {
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
exports.ListPartnersUseCase = ListPartnersUseCase;
