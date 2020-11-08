import Knex from 'knex';

import { IPartnersSpecialtiesRepository } from "@repositories/IPartnersSpecialtiesRepository";
import { PartnerSpecialty } from "@entities/PartnerSpecialty";

export class PostgresPartnersSpecialtiesRepository implements IPartnersSpecialtiesRepository {
    constructor(
        private connection: Knex
    ) { }

    async create(payload: PartnerSpecialty): Promise<PartnerSpecialty> {
        const [createdPartnerSpecialty] = await this.connection('partners_specialties')
            .insert(payload)
            .returning('*');

        return createdPartnerSpecialty;
    }

    async createMany(speacialtiesArray: PartnerSpecialty[]): Promise<PartnerSpecialty[]> {
        const createdPartnerSpecialties = await this.connection('partners_specialties')
            .insert(speacialtiesArray)
            .returning('specialty_id, created_at');

        return createdPartnerSpecialties;
    }
}