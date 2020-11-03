export interface IPartnerSpecialties {
    specialty_id: number;
    partner_id: number;
    specialty_name: string;
    description: string;
}

export interface ICreatePartnerDTO {
    user_id: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    whatsapp: string;
    document: string;
    birth_date: Date;
    bio: string;
    value_per_day: number;
    accepts_mensal_proposals: Boolean;
    is_corporate: Boolean;
    specialties: IPartnerSpecialties[];
}