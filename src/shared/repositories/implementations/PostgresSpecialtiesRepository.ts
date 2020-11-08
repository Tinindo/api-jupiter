import { ISpecialtiesRepository } from '@repositories/ISpecialtiesRepository';
import Knex from 'knex';

export class PostgresSpecialtiesRepository implements ISpecialtiesRepository {
    constructor(
        private connection: Knex
    ) { }

    async list() {
        const specialtiesFields = ['specialty_id', 'specialty_name', 'description']

        const specialties = await this.connection
            .select(specialtiesFields)
            .from('specialties');

        return specialties;
    }
} 