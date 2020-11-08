export interface IPartnerSpecialty {
    specialty_name: string;
}

export class Partner {
    public user_id: number;

    public partner_id?: number;

    public bio: string;

    public is_corporate: Boolean;

    public value_per_day: number;

    public accepts_mensal_proposals: Boolean;

    public specialties: IPartnerSpecialty[] | string; // Precisa ser convertido para string antes de ser inserido no Postgres

    constructor(props: Omit<Partner, 'partner_id'>) {
        props.specialties = props.specialties.map(spec => (
            {
                specialty_name: spec.specialty_name.toLowerCase()
            }
        ));

        Object.assign(this, props);
    }
}