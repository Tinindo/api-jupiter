"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePartnerController = void 0;
class CreatePartnerController {
    constructor(createPartnerUseCase) {
        this.createPartnerUseCase = createPartnerUseCase;
    }
    async handle(request, response) {
        const { user_id, first_name, last_name, email, password, whatsapp, document, birth_date, bio, value_per_day, accepts_mensal_proposals, is_corporate, specialties, } = request.body;
        const createdPartner = await this.createPartnerUseCase.execute({
            user_id,
            first_name,
            last_name,
            email,
            password,
            whatsapp,
            document,
            birth_date,
            bio,
            value_per_day,
            accepts_mensal_proposals,
            is_corporate,
            specialties,
        });
        return response.status(201).json(createdPartner);
    }
}
exports.CreatePartnerController = CreatePartnerController;
