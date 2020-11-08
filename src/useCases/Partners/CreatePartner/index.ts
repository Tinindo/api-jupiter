import { connection } from '@database/connection';

import { PostgresPartnersRepository } from "@repositories/implementations/PostgresPartnersRepository";
import { PostgresUsersRepository } from "@repositories/implementations/PostgresUsersRepository";

import { CreatePartnerController } from './CreatePartnerController';
import { CreatePartnerUseCase } from './CreatePartnerUseCase';

const usersRepository = new PostgresUsersRepository(connection);
const partnersRepository = new PostgresPartnersRepository(connection);

const createPartnerUseCase = new CreatePartnerUseCase(usersRepository, partnersRepository);

const createPartnerController = new CreatePartnerController(createPartnerUseCase);

export { createPartnerUseCase, createPartnerController };