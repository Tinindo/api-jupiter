"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserController = exports.findUserUseCase = void 0;
const connection_1 = require("@database/connection");
const PostgresUsersRepository_1 = require("@repositories/implementations/PostgresUsersRepository");
const FindUserController_1 = require("./FindUserController");
const FindUserUseCase_1 = require("./FindUserUseCase");
const usersRepository = new PostgresUsersRepository_1.PostgresUsersRepository(connection_1.connection);
const findUserUseCase = new FindUserUseCase_1.FindUserUseCase(usersRepository);
exports.findUserUseCase = findUserUseCase;
const findUserController = new FindUserController_1.FindUserController(findUserUseCase);
exports.findUserController = findUserController;