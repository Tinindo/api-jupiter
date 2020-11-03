"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specialtiesRoutes = void 0;
const express_1 = require("express");
const ListSpecialties_1 = require("@useCases/Specialties/ListSpecialties");
const specialtiesRoutes = express_1.Router();
exports.specialtiesRoutes = specialtiesRoutes;
specialtiesRoutes.get('/', (request, response) => ListSpecialties_1.listSpecialtiesController.handle(request, response));
