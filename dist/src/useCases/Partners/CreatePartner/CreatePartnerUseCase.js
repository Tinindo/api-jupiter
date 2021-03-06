"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePartnerUseCase = void 0;
const User_1 = require("@entities/User");
const Partner_1 = require("@entities/Partner");
const validateFields_1 = require("@helpers/validateFields");
const AppError_1 = require("@helpers/AppError");
class CreatePartnerUseCase {
    constructor(usersRepository, partnersRepository) {
        this.usersRepository = usersRepository;
        this.partnersRepository = partnersRepository;
    }
    async execute(partnerPayload) {
        const requiredFields = ['first_name', 'last_name', 'email', 'password', 'whatsapp', 'document', 'birth_date', 'value_per_day', 'is_corporate', 'specialties', 'accepts_mensal_proposals'];
        validateFields_1.validateFields(requiredFields, partnerPayload);
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
        const { bio, is_corporate, value_per_day, accepts_mensal_proposals, specialties } = partnerPayload;
        partnerPayload.specialties = partnerPayload.specialties.map(spec => ({
            specialty_name: spec.specialty_name.toLowerCase()
        }));
        const partner = new Partner_1.Partner({
            bio,
            is_corporate,
            value_per_day,
            accepts_mensal_proposals,
            user_id: createdUser.user_id,
            specialties,
        });
        const createdPartner = await this.partnersRepository.create(partner);
        return Object.assign(Object.assign({}, createdUser), createdPartner);
    }
}
exports.CreatePartnerUseCase = CreatePartnerUseCase;
