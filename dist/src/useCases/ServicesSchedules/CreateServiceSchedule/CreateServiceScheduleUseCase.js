"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateScheduleUseCase = void 0;
const ServiceSchedule_1 = require("@entities/ServiceSchedule");
const AppError_1 = require("@helpers/AppError");
const validateFields_1 = require("@helpers/validateFields");
class CreateScheduleUseCase {
    constructor(servicesSchedulesRepository) {
        this.servicesSchedulesRepository = servicesSchedulesRepository;
    }
    async execute(serviceSchedulePayload) {
        const requiredFields = ['user_id', 'partner_id', 'user_property_id', 'price', 'start_at', 'finish_at'];
        validateFields_1.validateFields(requiredFields, serviceSchedulePayload);
        const isScheduleAvailable = await this.servicesSchedulesRepository.isScheduleAvailable(serviceSchedulePayload);
        if (!isScheduleAvailable) {
            throw new AppError_1.AppError('Que pena! Parece que esse horário não está disponível. Tente remarcar para outro horário');
        }
        const serviceSchedule = new ServiceSchedule_1.ServiceSchedule(serviceSchedulePayload);
        const createdServiceSchedule = await this.servicesSchedulesRepository.create(serviceSchedule);
        return createdServiceSchedule;
    }
}
exports.CreateScheduleUseCase = CreateScheduleUseCase;
