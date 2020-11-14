import { ServiceSchedule } from "@entities/ServiceSchedule";
import { AppError } from "@helpers/AppError";
import { validateFields } from '@helpers/validateFields';
import { IServicesScheduleRepository } from "@repositories/IServicesSchedulesRepository";
import { ICreateServiceScheduleDTO } from "./ICreateServiceScheduleDTO";

export class CreateScheduleUseCase {
    constructor(
        private servicesSchedulesRepository: IServicesScheduleRepository
    ) { }

    async execute(serviceSchedulePayload: ICreateServiceScheduleDTO) {
        const requiredFields = ['user_id', 'partner_id', 'user_property_id', 'price', 'start_at', 'finish_at'];

        validateFields(requiredFields, serviceSchedulePayload);

        const isScheduleAvailable = await this.servicesSchedulesRepository.isScheduleAvailable(serviceSchedulePayload);

        if (!isScheduleAvailable) {
            throw new AppError('Que pena! Parece que esse horário não está disponível. Tente remarcar para outro horário');
        }

        const serviceSchedule = new ServiceSchedule(serviceSchedulePayload);

        const createdServiceSchedule = await this.servicesSchedulesRepository.create(serviceSchedule);

        return createdServiceSchedule;
    }
}