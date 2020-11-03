import { connection } from '@database/connection';

import { PostgresPartnersRepository } from "@repositories/implementations/PostgresPartnersRepository";
import { PostgresPartnersSpecialtiesRepository } from '@repositories/implementations/PostgresPartnersSpecialtiesRepository';
import { PostgresUsersRepository } from "@repositories/implementations/PostgresUsersRepository";

import { CreatePartnerController } from './CreatePartnerController';
import { CreatePartnerUseCase } from './CreatePartnerUseCase';

const usersRepository = new PostgresUsersRepository(connection);
const partnersRepository = new PostgresPartnersRepository(connection);
const partnersSpecialtiesRepository = new PostgresPartnersSpecialtiesRepository(connection);

const createPartnerUseCase = new CreatePartnerUseCase(
    usersRepository,
    partnersRepository,
    partnersSpecialtiesRepository
);

const createPartnerController = new CreatePartnerController(createPartnerUseCase);

export { createPartnerUseCase, createPartnerController };