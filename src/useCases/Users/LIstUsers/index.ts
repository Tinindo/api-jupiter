import { connection } from '@database/connection';
import { PostgresUsersRepository } from '@repositories/implementations/PostgresUsersRepository';
import { ListUsersUseCase } from './ListUsersUseCase';
import { ListUsersController } from './ListUsersController';

const usersRepository = new PostgresUsersRepository(connection);

const listUsersUseCase = new ListUsersUseCase(usersRepository);

const listUsersController = new ListUsersController(listUsersUseCase);

export { listUsersUseCase, listUsersController };