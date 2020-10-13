import { Router } from "express";
import { app } from "../app";
import { usersRoutes } from "./usersRoutes";

const router = Router();

router.use('/users', usersRoutes);

export { router }