"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresPartnersRepository = void 0;
class PostgresPartnersRepository {
    constructor(connection) {
        this.connection = connection;
    }
    async list(limit, offset) {
        const partners = await this.connection('partners')
            .select('*')
            .limit(limit)
            .offset(offset);
        return partners;
    }
    async create(payload) {
        const [createdPartner] = await this.connection('partners')
            .insert(payload)
            .returning('*');
        return createdPartner;
    }
}
exports.PostgresPartnersRepository = PostgresPartnersRepository;
