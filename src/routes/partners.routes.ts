import { Router } from 'express';

import { createPartnerController } from '@useCases/Partners/CreatePartner';

const partnersRoutes = Router();

partnersRoutes.post('/',
    async (request, response) => createPartnerController.handle(request, response)
);

export { partnersRoutes };
