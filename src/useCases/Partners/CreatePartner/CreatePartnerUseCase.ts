import { User } from '@entities/User';
import { Partner } from '@entities/Partner';

import { IUsersRepository } from "@repositories/IUsersRepository";
import { IPartnersRepository } from "@repositories/IPartnersRepository";

import { ICreatePartnerDTO } from "./ICreatePartnerDTO";

import { validateFields } from '@helpers/validateFields';
import { AppError } from "@helpers/AppError";

export class CreatePartnerUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private partnersRepository: IPartnersRepository,
    ) { }

    async execute(partnerPayload: ICreatePartnerDTO) {
        const requiredFields = ['first_name', 'last_name', 'email', 'password', 'whatsapp', 'document', 'birth_date', 'value_per_day', 'is_corporate', 'specialties', 'accepts_mensal_proposals'];

        validateFields(requiredFields, partnerPayload);

        const userExists = await this.usersRepository.findByEmail(partnerPayload.email);

        if (userExists) {
            throw new AppError('Parece que já existe um usuário com esse e-mail');
        }

        const {
            first_name,
            last_name,
            document,
            whatsapp,
            email,
            password,
            birth_date
        } = partnerPayload;

        const user = new User({
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

        const {
            bio,
            is_corporate,
            value_per_day,
            accepts_mensal_proposals,
            specialties
        } = partnerPayload;

        partnerPayload.specialties = partnerPayload.specialties.map(spec => ({
            specialty_name: spec.specialty_name.toLowerCase()
        }));

        const partner = new Partner({
            bio,
            is_corporate,
            value_per_day,
            accepts_mensal_proposals,
            user_id: createdUser.user_id,
            specialties,
        });

        const createdPartner = await this.partnersRepository.create(partner);

        return {
            ...createdUser,
            ...createdPartner,
        };
    }
}
