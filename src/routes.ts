import { Router } from 'express';

import UsersController from './controllers/UsersController';

import paginationHandler from './middlewares/paginationHandler';

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.get('/users', paginationHandler, usersController.list);
usersRoutes.post('/users', usersController.create);

export default usersRoutes;