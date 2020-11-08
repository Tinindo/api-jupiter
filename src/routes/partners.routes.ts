import { Router } from 'express';

import { createPartnerController } from '@useCases/Partners/CreatePartner';
import { listPartnersController } from '@useCases/Partners/ListPartners';

import { paginationHandler } from '@middlewares/paginationHandler';

const partnersRoutes = Router();

partnersRoutes.get('/', paginationHandler,
    async (request, response) => listPartnersController.handle(request, response)
);

partnersRoutes.post('/',
    async (request, response) => createPartnerController.handle(request, response)
);

export { partnersRoutes };
