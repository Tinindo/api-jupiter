import Knex from 'knex';

import { IPartnersRepository } from '@repositories/IPartnersRepository';
import { Partner } from '@entities/Partner';

export class PostgresPartnersRepository implements IPartnersRepository {
    constructor(
        private connection: Knex
    ) { }

    async list(limit: number, offset: number): Promise<Partner[]> {
        const partners = await this.connection('partners')
            .select('*')
            .limit(limit)
            .offset(offset);

        return partners;
    }

    async create(payload: Partner): Promise<Partner> {
        const [createdPartner] = await this.connection('partners')
            .insert(payload)
            .returning('*');

        return createdPartner;
    }
}