import { ServiceSchedule } from "@entities/ServiceSchedule";
import { AppError } from "@helpers/AppError";
import { IServicesScheduleRepository } from "@repositories/IServicesSchedulesRepository";
import { ICreateServiceScheduleDTO } from "./ICreateServiceScheduleDTO";

export class CreateScheduleUseCase {
    constructor(
        private servicesSchedulesRepository: IServicesScheduleRepository
    ) { }

    async execute(serviceSchedulePayload: ICreateServiceScheduleDTO) {
        const isScheduleAvailable = await this.servicesSchedulesRepository.isScheduleAvailable(serviceSchedulePayload);

        if (!isScheduleAvailable) {
            throw new AppError('Que pena! Parece que esse horário não está disponível. Tente remarcar para outro horário');
        }

        const serviceSchedule = new ServiceSchedule(serviceSchedulePayload);

        const createdServiceSchedule = await this.servicesSchedulesRepository.create(serviceSchedule);

        return createdServiceSchedule;
    }
}