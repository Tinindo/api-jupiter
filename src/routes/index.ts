import { Router } from "express";

import { usersRoutes } from "./users.routes";
import { partnersRoutes } from './partners.routes';
import { sessionsRouter } from './sessions.routes';
import { specialtiesRoutes } from './specialties.routes';
import { schedulesRoutes } from './schedules.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/partners', partnersRoutes);
router.use('/sessions', sessionsRouter);
router.use('/specialties', specialtiesRoutes);
router.use('/schedules', schedulesRoutes);

export { router }