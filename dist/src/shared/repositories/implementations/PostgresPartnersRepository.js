"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresPartnersRepository = void 0;
class PostgresPartnersRepository {
    constructor(connection) {
        this.connection = connection;
    }
    async listFilteredBySpecialities(filters, limit, offset) {
        // SELECT partners.bio, partners.is_corporate, partners.value_per_day, partners.accepts_mensal_proposals, partners.partner_id, partners.specialties,
        // users.*, AVG(users_scores.score)
        // FROM partners
        // LEFT JOIN users ON users.user_id = partners.user_id
        // LEFT JOIN users_scores ON users_scores.user_id = partners.user_id
        // WHERE(partners.specialties:: jsonb) ->> 'specialty_name' IN('marido de aluguel')
        // GROUP BY partners.partner_id,
        // users_scores.user_id,
        // users.user_id;
        const fieldsToReturn = [
            'users.user_id',
            'partners.partner_id',
            'users.first_name',
            'users.last_name',
            'partners.bio',
            'partners.value_per_day',
            'partners.accepts_mensal_proposals',
            'partners.is_corporate',
            'partners.specialties',
            'users.email',
            'users.whatsapp',
            'users.document',
            'users.birth_date',
            'users.is_provider',
            'users.active',
            'users.avatar',
            'users.created_at',
            'users.updated_at',
        ];
        const partners = await this.connection
            .select(fieldsToReturn)
            .avg({ score: 'users_scores.score' })
            .from('partners')
            .leftJoin('users', 'partners.user_id', 'users.user_id')
            .leftJoin('users_scores', 'partners.user_id', 'users_scores.user_id')
            .groupBy('partners.partner_id', 'users_scores.user_id', 'users.user_id')
            .limit(limit)
            .offset(offset);
        return partners;
    }
    async list(limit, offset) {
        const fieldsToReturn = [
            'users.user_id',
            'partners.partner_id',
            'users.first_name',
            'users.last_name',
            'partners.bio',
            'partners.value_per_day',
            'partners.accepts_mensal_proposals',
            'partners.is_corporate',
            'partners.specialties',
            'users.email',
            'users.whatsapp',
            'users.document',
            'users.birth_date',
            'users.is_provider',
            'users.active',
            'users.avatar',
            'users.created_at',
            'users.updated_at',
        ];
        const partners = await this.connection
            .select(fieldsToReturn)
            .avg({ score: 'users_scores.score' })
            .from('partners')
            .leftJoin('users', 'partners.user_id', 'users.user_id')
            .leftJoin('users_scores', 'partners.user_id', 'users_scores.user_id')
            .groupBy('partners.partner_id', 'users_scores.user_id', 'users.user_id')
            .limit(limit)
            .offset(offset);
        return partners;
    }
    async create(payload) {
        payload.specialties = JSON.stringify(payload.specialties);
        const [createdPartner] = await this.connection('partners')
            .insert(payload)
            .returning('*');
        return createdPartner;
    }
}
exports.PostgresPartnersRepository = PostgresPartnersRepository;
