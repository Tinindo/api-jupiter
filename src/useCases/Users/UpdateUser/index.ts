import { PostgresUsersRepository } from "@repositories/implementations/PostgresUsersRepository";

import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

import { connection } from "@database/connection";

const usersRepository = new PostgresUsersRepository(connection);

const updateUserUseCase = new UpdateUserUseCase(usersRepository);

const updateUserController = new UpdateUserController(updateUserUseCase);

export { updateUserUseCase, updateUserController };