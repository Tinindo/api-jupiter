"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPartnersController = void 0;
class ListPartnersController {
    constructor(listPartnersUseCase) {
        this.listPartnersUseCase = listPartnersUseCase;
    }
    async handle(request, response) {
        const { filters, limit, offset } = request.query;
        const partners = await this.listPartnersUseCase.execute(String(filters), Number(limit), Number(offset));
        return response.json(partners);
    }
}
exports.ListPartnersController = ListPartnersController;
