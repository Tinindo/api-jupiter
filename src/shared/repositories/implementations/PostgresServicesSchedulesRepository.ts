import Knex from 'knex';
import { ServiceSchedule } from '@entities/ServiceSchedule';
import { IServicesScheduleRepository } from '../IServicesSchedulesRepository';
import { ICreateServiceScheduleDTO, IValidateServiceAvailabilityDTO } from '@useCases/ServicesSchedules/CreateServiceSchedule/ICreateServiceScheduleDTO';


export class PostgresServicesSchedulesRepository implements IServicesScheduleRepository {
    constructor(
        private connection: Knex
    ) { }

    async listByUser(user_id: number, limit: number, offset: number): Promise<ServiceSchedule[]> {
        const partnerSchedules = await this.connection('services_schedules')
            .select('*')
            .where('user_id', '=', user_id)
            .orderBy('start_at', 'desc')
            .limit(limit)
            .offset(offset);

        return partnerSchedules;
    }

    async listByPartner(partner_id: number, limit: number, offset: number): Promise<ServiceSchedule[]> {
        const partnerSchedules = await this.connection('services_schedules')
            .select('*')
            .where('partner_id', '=', partner_id)
            .orderBy('start_at', 'desc')
            .limit(limit)
            .offset(offset);

        return partnerSchedules;
    }

    async isScheduleAvailable(payload: IValidateServiceAvailabilityDTO): Promise<boolean> {
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

    async create(serviceSchedulePayload: ICreateServiceScheduleDTO): Promise<ServiceSchedule> {
        const [createdServiceSchedule] = await this.connection('services_schedules')
            .insert(serviceSchedulePayload)
            .returning('*');

        return createdServiceSchedule;
    }
}