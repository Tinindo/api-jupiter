"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const ensureAuthentication_1 = require("@shared/middlewares/ensureAuthentication");
const paginationHandler_1 = require("@middlewares/paginationHandler");
const CreateUser_1 = require("@useCases/Users/CreateUser");
const LIstUsers_1 = require("@useCases/Users/LIstUsers");
const CreateUserScore_1 = require("@useCases/Users/Scores/CreateUserScore");
const CreateUserProperty_1 = require("@useCases/Users/Properties/CreateUserProperty");
const usersRoutes = express_1.Router();
exports.usersRoutes = usersRoutes;
usersRoutes.post('/', (request, response) => {
    return CreateUser_1.createUserController.handle(request, response);
});
usersRoutes.get('/', ensureAuthentication_1.ensureAuthentication, paginationHandler_1.paginationHandler, (request, response) => {
    return LIstUsers_1.listUsersController.handle(request, response);
});
usersRoutes.post('/:user_id/properties', ensureAuthentication_1.ensureAuthentication, (request, response) => {
    return CreateUserProperty_1.createUserPropertyController.handle(request, response);
});
usersRoutes.post('/:user_id/scores', ensureAuthentication_1.ensureAuthentication, (request, response) => {
    return CreateUserScore_1.createUserScoreController.handle(request, response);
});
