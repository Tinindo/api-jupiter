export class Partner {
    public user_id: number;

    public partner_id?: number;

    public bio: string;

    public is_corporate: Boolean;

    public value_per_day: number;

    public accepts_mensal_proposals: Boolean;

    constructor(props: Omit<Partner, 'partner_id'>) {
        Object.assign(this, props);
    }
}