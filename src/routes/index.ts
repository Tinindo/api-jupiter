import { Router } from "express";

import { usersRoutes } from "./users.routes";
import { sessionsRouter } from './sessions.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/sessions', sessionsRouter);

export { router }