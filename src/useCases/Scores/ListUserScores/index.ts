import { PostgresUsersRepository } from "@repositories/implementations/PostgresUsersRepository";
import { PostgresUsersScoresRepository } from "@repositories/implementations/PostgresUsersScoresRepository";

import { ListUserScoresUseCase } from "./ListUserScoresUseCase";
import { ListUserScoresController } from './ListUserScoresController';

import { connection } from "@database/connection";

const usersRepository = new PostgresUsersRepository(connection);
const usersScoresRepository = new PostgresUsersScoresRepository(connection);

const listUserScoresUseCase = new ListUserScoresUseCase(usersRepository, usersScoresRepository);
const listUserScoresController = new ListUserScoresController(listUserScoresUseCase);

export { listUserScoresUseCase, listUserScoresController };