import { Router } from 'express';

import { createPartnerController } from '@useCases/Partners/CreatePartner';
import { listPartnersController } from '@useCases/Partners/ListPartners';

import { paginationHandler } from '@middlewares/paginationHandler';

import { ensureAuthentication } from '@middlewares/ensureAuthentication';

const partnersRoutes = Router();

partnersRoutes.get('/', ensureAuthentication, paginationHandler,
    async (request, response) => listPartnersController.handle(request, response)
);

partnersRoutes.post('/',
    async (request, response) => createPartnerController.handle(request, response)
);

export { partnersRoutes };
