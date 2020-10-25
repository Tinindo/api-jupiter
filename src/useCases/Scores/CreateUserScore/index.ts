import { PostgresUsersRepository } from '@repositories/implementations/PostgresUsersRepository';
import { PostgresUsersScoresRepository } from '@repositories/implementations/PostgresUsersScoresRepository';

import { CreateUserScoreUseCase } from './CreateUserScoreUseCase';
import { CreateUserScoreController } from './CreateUserScoreController';

import { connection } from '@database/connection';

const usersRepository = new PostgresUsersRepository(connection);
const usersScoresRepository = new PostgresUsersScoresRepository(connection);

const createUserScoreUseCase = new CreateUserScoreUseCase(usersRepository, usersScoresRepository);

const createUserScoreController = new CreateUserScoreController(createUserScoreUseCase);

export { createUserScoreUseCase, createUserScoreController };