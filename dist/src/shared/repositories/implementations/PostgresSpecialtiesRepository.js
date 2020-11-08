"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresSpecialtiesRepository = void 0;
class PostgresSpecialtiesRepository {
    constructor(connection) {
        this.connection = connection;
    }
    async list() {
        const specialtiesFields = ['specialty_id', 'specialty_name', 'description'];
        const specialties = await this.connection
            .select(specialtiesFields)
            .from('specialties');
        return specialties;
    }
}
exports.PostgresSpecialtiesRepository = PostgresSpecialtiesRepository;
