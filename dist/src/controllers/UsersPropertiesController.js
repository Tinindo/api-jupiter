"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateUserPropertyService_1 = __importDefault(require("../services/UsersProperties/CreateUserPropertyService"));
class UsersAddressesController {
    async create(request, response) {
        const createdUserProperty = await CreateUserPropertyService_1.default.execute(request);
        return response.status(201).json(createdUserProperty);
    }
    async listByUser(request, response) {
        const { id } = request.params;
    }
}
exports.default = new UsersAddressesController();
