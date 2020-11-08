import { PostgresSpecialtiesRepository } from "@repositories/implementations/PostgresSpecialtiesRepository";
import { ListSpecialtiesController } from "./ListSpecialtiesController";
import { ListSpecialtiesUseCase } from "./ListSpecialtiesUseCase";

import { connection } from '@database/connection';

const specialtiesRepository = new PostgresSpecialtiesRepository(connection);

const listSpecialtiesUseCase = new ListSpecialtiesUseCase(specialtiesRepository);
const listSpecialtiesController = new ListSpecialtiesController(listSpecialtiesUseCase);

export { listSpecialtiesUseCase, listSpecialtiesController };