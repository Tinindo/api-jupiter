import { PostgresUsersPropertiesRepository } from "@repositories/implementations/PostgresUsersPropertiesRepository";
import { PostgresUsersRepository } from "@repositories/implementations/PostgresUsersRepository";

import { CreateUserPropertyController } from "./CreateUserPropertyController";
import { CreateUserPropertyUseCase } from "./CreateUserPropertyUseCase";

import { connection } from '@database/connection';

const usersPropertiesRepository = new PostgresUsersPropertiesRepository(connection);
const usersRepository = new PostgresUsersRepository(connection);

const createUserPropertyUseCase = new CreateUserPropertyUseCase(
    usersRepository,
    usersPropertiesRepository,
);

const createUserPropertyController = new CreateUserPropertyController(createUserPropertyUseCase);

export { createUserPropertyUseCase, createUserPropertyController }