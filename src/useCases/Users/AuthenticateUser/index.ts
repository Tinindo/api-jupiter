import { PostgresUsersRepository } from "@repositories/implementations/PostgresUsersRepository";

import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

import { connection } from "@database/connection";

const usersRepository = new PostgresUsersRepository(connection);

const authenticateUserUseCase = new AuthenticateUserUseCase(usersRepository);

const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase);

export { authenticateUserUseCase, authenticateUserController }