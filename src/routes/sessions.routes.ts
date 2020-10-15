import { Router } from 'express';

import { authenticateUserController } from '@useCases/Users/AuthenticateUser';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
    return authenticateUserController.handle(request, response);
});

export { sessionsRouter };