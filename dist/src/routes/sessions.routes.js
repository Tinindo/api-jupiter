"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionsRouter = void 0;
const express_1 = require("express");
const AuthenticateUser_1 = require("@useCases/Users/AuthenticateUser");
const sessionsRouter = express_1.Router();
exports.sessionsRouter = sessionsRouter;
sessionsRouter.post('/', (request, response) => AuthenticateUser_1.authenticateUserController.handle(request, response));
