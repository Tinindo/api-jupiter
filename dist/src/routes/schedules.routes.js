"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schedulesRoutes = void 0;
const express_1 = require("express");
const CreateServiceSchedule_1 = require("@useCases/ServicesSchedules/CreateServiceSchedule");
const ensureAuthentication_1 = require("@shared/middlewares/ensureAuthentication");
const schedulesRoutes = express_1.Router();
exports.schedulesRoutes = schedulesRoutes;
schedulesRoutes.post('/', ensureAuthentication_1.ensureAuthentication, async (request, response) => CreateServiceSchedule_1.createServiceScheduleController.handle(request, response));
