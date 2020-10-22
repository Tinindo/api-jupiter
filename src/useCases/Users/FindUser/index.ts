import { connection } from "@database/connection";

import { PostgresUsersRepository } from "@repositories/implementations/PostgresUsersRepository";

import { FindUserController } from "./FindUserController";
import { FindUserUseCase } from './FindUserUseCase';

const usersRepository = new PostgresUsersRepository(connection);

const findUserUseCase = new FindUserUseCase(usersRepository);

const findUserController = new FindUserController(findUserUseCase);

export { findUserUseCase, findUserController }