import { Router } from 'express';

import { authenticateUserController } from '@useCases/Users/AuthenticateUser';

const sessionsRouter = Router();

sessionsRouter.post('/',
    (request, response) => authenticateUserController.handle(request, response)
);

export { sessionsRouter };