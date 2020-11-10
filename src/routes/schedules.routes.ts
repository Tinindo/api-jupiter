import { Router } from 'express';

import { createServiceScheduleController } from '@useCases/ServicesSchedules/CreateServiceSchedule';

import { ensureAuthentication } from '@shared/middlewares/ensureAuthentication';

const schedulesRoutes = Router();

schedulesRoutes.post('/', ensureAuthentication,
    async (request, response) => createServiceScheduleController.handle(request, response)
);

export { schedulesRoutes }