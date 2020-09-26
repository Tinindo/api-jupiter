import { Router } from 'express';

import UsersController from './controllers/UsersController';
import UsersScoresController from './controllers/UsersScoresController';
import UsersPropertiesController from './controllers/UsersPropertiesController';

import paginationHandler from './middlewares/paginationHandler';

const routes = Router();

const usersController = new UsersController();

routes.get('/', (request, response) => {
    return response.json({ success: true });
});

routes.get('/users', paginationHandler, usersController.list);
routes.get('/users/:id', usersController.findOne);
routes.post('/users', usersController.create);

routes.post('/users/:id/score', UsersScoresController.create);

routes.post('/users/:id/properties', UsersPropertiesController.create);
routes.get('/users/:id/properties', UsersPropertiesController.listByUser);

export default routes;