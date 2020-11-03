"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresSpecialtiesRepository = void 0;
const connection_1 = require("@database/connection");
class PostgresSpecialtiesRepository {
    async list() {
        const specialtiesFields = ['specialty_id', 'specialty_name', 'description'];
        const specialties = await connection_1.connection
            .select(specialtiesFields)
            .from('specialties');
        return specialties;
    }
}
exports.PostgresSpecialtiesRepository = PostgresSpecialtiesRepository;
