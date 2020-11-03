"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresPartnersSpecialtiesRepository = void 0;
class PostgresPartnersSpecialtiesRepository {
    constructor(connection) {
        this.connection = connection;
    }
    async create(payload) {
        const [createdPartnerSpecialty] = await this.connection('partners_specialties')
            .insert(payload)
            .returning('*');
        return createdPartnerSpecialty;
    }
    async createMany(speacialtiesArray) {
        const createdPartnerSpecialties = await this.connection('partners_specialties')
            .insert(speacialtiesArray)
            .returning('*');
        return createdPartnerSpecialties;
    }
}
exports.PostgresPartnersSpecialtiesRepository = PostgresPartnersSpecialtiesRepository;
