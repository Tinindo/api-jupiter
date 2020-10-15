"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsersController_1 = __importDefault(require("./controllers/UsersController"));
const UsersScoresController_1 = __importDefault(require("./controllers/UsersScoresController"));
const UsersPropertiesController_1 = __importDefault(require("./controllers/UsersPropertiesController"));
const paginationHandler_1 = require("@middlewares/paginationHandler");
const routes = express_1.Router();
const usersController = new UsersController_1.default();
routes.get('/', (request, response) => {
    return response.json({ success: true });
});
routes.get('/users', paginationHandler_1.paginationHandler, usersController.list);
routes.get('/users/:id', usersController.findOne);
routes.post('/users', usersController.create);
routes.post('/users/:id/score', UsersScoresController_1.default.create);
routes.post('/users/:id/properties', UsersPropertiesController_1.default.create);
routes.get('/users/:id/properties', UsersPropertiesController_1.default.listByUser);
exports.default = routes;
