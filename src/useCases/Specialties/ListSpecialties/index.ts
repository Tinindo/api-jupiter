import { PostgresSpecialtiesRepository } from "@repositories/implementations/PostgresSpecialtiesRepository";
import { ListSpecialtiesController } from "./ListSpecialtiesController";
import { ListSpecialtiesUseCase } from "./ListSpecialtiesUseCase";

const specialtiesRepository = new PostgresSpecialtiesRepository();

const listSpecialtiesUseCase = new ListSpecialtiesUseCase(specialtiesRepository);
const listSpecialtiesController = new ListSpecialtiesController(listSpecialtiesUseCase);

export { listSpecialtiesUseCase, listSpecialtiesController };