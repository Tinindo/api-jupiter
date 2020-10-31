import { request, response, Router } from 'express';

import { listSpecialtiesController } from '@useCases/Specialties/ListSpecialties';

const specialtiesRoutes = Router();

specialtiesRoutes.get('/',
    (request, response) => listSpecialtiesController.handle(request, response)
);

export { specialtiesRoutes }