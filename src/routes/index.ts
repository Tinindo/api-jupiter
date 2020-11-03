import { Router } from "express";

import { usersRoutes } from "./users.routes";
import { partnersRoutes } from './partners.routes';
import { sessionsRouter } from './sessions.routes';
import { specialtiesRoutes } from './specialties.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/partners', partnersRoutes);
router.use('/sessions', sessionsRouter);
router.use('/specialties', specialtiesRoutes);

export { router }