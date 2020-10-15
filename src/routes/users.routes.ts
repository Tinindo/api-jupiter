import { Router } from 'express';
import { ensureAuthentication } from '@shared/middlewares/ensureAuthentication';
import { paginationHandler } from '@middlewares/paginationHandler';

import { createUserController } from '@useCases/Users/CreateUser';
import { listUsersController } from '@useCases/Users/LIstUsers';
import { createUserScoreController } from '@useCases/Users/Scores/CreateUserScore';
import { createUserPropertyController } from '@useCases/Users/Properties/CreateUserProperty';


const usersRoutes = Router();

usersRoutes.post('/', (request, response) => {
    return createUserController.handle(request, response);
});

usersRoutes.get('/', ensureAuthentication, paginationHandler, (request, response) => {
    return listUsersController.handle(request, response);
});

usersRoutes.post('/:user_id/properties', ensureAuthentication, (request, response) => {
    return createUserPropertyController.handle(request, response);
});

usersRoutes.post('/:user_id/scores', ensureAuthentication, (request, response) => {
    return createUserScoreController.handle(request, response);
});

export { usersRoutes };