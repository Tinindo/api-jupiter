import { PostgresPartnersRepository } from "@repositories/implementations/PostgresPartnersRepository";

import { ListPartnersController } from './ListPartnersController';
import { ListPartnersUseCase } from './ListPartnersUseCase';

import { connection } from "@database/connection";

const partnersRepository = new PostgresPartnersRepository(connection);

const listPartnersUseCase = new ListPartnersUseCase(partnersRepository);

const listPartnersController = new ListPartnersController(listPartnersUseCase);

export { listPartnersUseCase, listPartnersController }