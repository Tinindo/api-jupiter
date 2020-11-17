"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresServicesSchedulesRepository = void 0;
class PostgresServicesSchedulesRepository {
    constructor(connection) {
        this.connection = connection;
    }
    async listByUser(user_id, limit, offset) {
        const partnerSchedules = await this.connection('services_schedules')
            .select('*')
            .where('user_id', '=', user_id)
            .orderBy('start_at', 'desc')
            .limit(limit)
            .offset(offset);
        return partnerSchedules;
    }
    async listByPartner(partner_id, limit, offset) {
        const partnerSchedules = await this.connection('services_schedules')
            .select('*')
            .where('partner_id', '=', partner_id)
            .orderBy('start_at', 'desc')
            .limit(limit)
            .offset(offset);
        return partnerSchedules;
    }
    async isScheduleAvailable(payload) {
        const { start_at, finish_at, partner_id, user_id } = payload;
        const hasAlreadyBeenScheduled = await this.connection('services_schedules')
            .select(['service_schedule_id', 'start_at', 'finish_at', 'user_id', 'partner_id'])
            .whereRaw(`(user_id = ${user_id} OR partner_id = ${partner_id}) 
                AND (
                    start_at BETWEEN '${start_at}' AND '${finish_at}'
                    OR finish_at BETWEEN '${start_at}' AND '${finish_at}'
                )`);
        return !hasAlreadyBeenScheduled.length;
    }
    async create(serviceSchedulePayload) {
        const [createdServiceSchedule] = await this.connection('services_schedules')
            .insert(serviceSchedulePayload)
            .returning('*');
        return createdServiceSchedule;
    }
}
exports.PostgresServicesSchedulesRepository = PostgresServicesSchedulesRepository;
