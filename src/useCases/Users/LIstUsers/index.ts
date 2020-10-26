import { ListUsersUseCase } from './ListUsersUseCase';
import { ListUsersController } from './ListUsersController';

import { PostgresUsersRepository } from '@repositories/implementations/PostgresUsersRepository';

import { connection } from '@database/connection';

const usersRepository = new PostgresUsersRepository(connection);

const listUsersUseCase = new ListUsersUseCase(usersRepository);

const listUsersController = new ListUsersController(listUsersUseCase);

export { listUsersUseCase, listUsersController };