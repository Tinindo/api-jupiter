import { connection } from '@database/connection';
import { PostgresServicesSchedulesRepository } from '@repositories/implementations/PostgresServicesSchedulesRepository'
import { CreateScheduleUseCase } from './CreateServiceScheduleUseCase';
import { CreateServiceScheduleController } from './CreateServiceScheduleController';

const servicesSchedulesRepository = new PostgresServicesSchedulesRepository(connection);

const createScheduleUseCase = new CreateScheduleUseCase(servicesSchedulesRepository);

const createServiceScheduleController = new CreateServiceScheduleController(createScheduleUseCase);

export { createScheduleUseCase, createServiceScheduleController }