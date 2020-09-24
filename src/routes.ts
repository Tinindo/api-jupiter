import { Router } from 'express';

import UsersController from './controllers/UsersController';

import paginationHandler from './middlewares/paginationHandler';

const routes = Router();

const usersController = new UsersController();

routes.get('/', (request, response) => {
    return response.json({ success: true });
});

routes.get('/users', paginationHandler, usersController.list);
routes.get('/users/:id', usersController.findOne);
routes.post('/users', usersController.create);

export default routes;