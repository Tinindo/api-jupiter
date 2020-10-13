import { PostgresUsersRepository } from "@repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { connection } from '@database/connection';

const usersRepository = new PostgresUsersRepository(connection);

const createUserUseCase = new CreateUserUseCase(usersRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };