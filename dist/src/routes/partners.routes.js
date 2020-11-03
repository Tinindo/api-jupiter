"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partnersRoutes = void 0;
const express_1 = require("express");
const CreatePartner_1 = require("@useCases/Partners/CreatePartner");
const partnersRoutes = express_1.Router();
exports.partnersRoutes = partnersRoutes;
partnersRoutes.post('/', async (request, response) => CreatePartner_1.createPartnerController.handle(request, response));
