import { ISpecialtiesRepository } from '@repositories/ISpecialtiesRepository';

import { connection } from '@database/connection';

export class PostgresSpecialtiesRepository implements ISpecialtiesRepository {
    async list() {
        const specialtiesFields = ['specialty_id', 'specialty_name', 'description']

        const specialties = await connection
            .select(specialtiesFields)
            .from('specialties');

        return specialties;
    }
} 