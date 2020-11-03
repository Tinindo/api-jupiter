"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePartnerUseCase = void 0;
const User_1 = require("@entities/User");
const Partner_1 = require("@entities/Partner");
const AppError_1 = require("@helpers/AppError");
class CreatePartnerUseCase {
    constructor(usersRepository, partnersRepository, partnersSpecialtiesRepository) {
        this.usersRepository = usersRepository;
        this.partnersRepository = partnersRepository;
        this.partnersSpecialtiesRepository = partnersSpecialtiesRepository;
    }
    async execute(partnerPayload) {
        const userExists = await this.usersRepository.findByEmail(partnerPayload.email);
        if (userExists) {
            throw new AppError_1.AppError('Parece que já existe um usuário com esse e-mail');
        }
        const { first_name, last_name, document, whatsapp, email, password, birth_date } = partnerPayload;
        const user = new User_1.User({
            first_name,
            last_name,
            document,
            whatsapp,
            email,
            password,
            birth_date,
            is_provider: true
        });
        const createdUser = await this.usersRepository.create(user);
        const { bio, is_corporate, value_per_day, accepts_mensal_proposals } = partnerPayload;
        const partner = new Partner_1.Partner({
            bio,
            is_corporate,
            value_per_day,
            accepts_mensal_proposals,
            user_id: createdUser.user_id,
        });
        const createdPartner = await this.partnersRepository.create(partner);
        const { partner_id } = createdPartner;
        const specialties = partnerPayload.specialties.map(spec => ({
            partner_id,
            specialty_id: spec.specialty_id,
        }));
        const createdSpecialties = await this.partnersSpecialtiesRepository.createMany(specialties);
        return Object.assign(Object.assign(Object.assign({}, createdUser), createdPartner), { specialties: createdSpecialties });
    }
}
exports.CreatePartnerUseCase = CreatePartnerUseCase;
