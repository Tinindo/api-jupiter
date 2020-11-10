import { ServiceSchedule } from '@entities/ServiceSchedule';
import { ICreateServiceScheduleDTO, IValidateServiceAvailabilityDTO } from '@useCases/ServicesSchedules/CreateServiceSchedule/ICreateServiceScheduleDTO';

export interface IServicesScheduleRepository {
    create(payload: ICreateServiceScheduleDTO): Promise<ServiceSchedule>;
    isScheduleAvailable(payload: IValidateServiceAvailabilityDTO): Promise<boolean>;
    listByUser(user_id: number, limit: number, offset: number): Promise<ServiceSchedule[]>
    listByPartner(partner_id: number, limit: number, offset: number): Promise<ServiceSchedule[]>
}