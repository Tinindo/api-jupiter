"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../../database/connection"));
class CreateUserPropertyService {
    async execute(request) {
        const { living_rooms_quantity, bathrooms_quantity, kitchens_quantity, garages_quantity, rooms_quantity, postal_code, number, street, neighborhood, city, state, country, } = request.body;
        const { id: user_id } = request.params;
        const [createdProperty] = await connection_1.default
            .insert({
            user_id,
            living_rooms_quantity,
            bathrooms_quantity,
            kitchens_quantity,
            garages_quantity,
            rooms_quantity,
            postal_code,
            number,
            street,
            neighborhood,
            city,
            state,
            country,
        })
            .returning('*');
        return createdProperty;
    }
}
exports.default = new CreateUserPropertyService();
