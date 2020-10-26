import { request, Router } from 'express';
import { ensureAuthentication } from '@shared/middlewares/ensureAuthentication';
import { paginationHandler } from '@middlewares/paginationHandler';

import { findUserController } from '@useCases/Users/FindUser';
import { listUsersController } from '@useCases/Users/LIstUsers';
import { createUserController } from '@useCases/Users/CreateUser';
import { updateUserController } from '@useCases/Users/UpdateUser'

import { createUserScoreController } from '@useCases/Scores/CreateUserScore';
import { listUserScoresController } from '@useCases/Scores/ListUserScores';

import { createUserPropertyController } from '@useCases/Properties/CreateUserProperty';


const usersRoutes = Router();

usersRoutes.post('/', (request, response) => createUserController.handle(request, response));

usersRoutes.get('/', ensureAuthentication, paginationHandler,
    (request, response) => listUsersController.handle(request, response)
);

usersRoutes.get('/:user_id', ensureAuthentication,
    (request, response) => findUserController.handle(request, response)
);

usersRoutes.put('/:user_id', ensureAuthentication,
    (request, response) => updateUserController.handle(request, response)
);

usersRoutes.post('/:user_id/properties', ensureAuthentication,
    (request, response) => createUserPropertyController.handle(request, response)
);

usersRoutes.post('/:user_id/scores', ensureAuthentication,
    (request, response) => createUserScoreController.handle(request, response)
);

usersRoutes.get('/:user_id/scores', ensureAuthentication, paginationHandler,
    async (request, response) => listUserScoresController.handle(request, response)
);

export { usersRoutes };