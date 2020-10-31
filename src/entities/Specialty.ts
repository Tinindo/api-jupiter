export class Specialty {
    public specialty_id?: number;

    public description: string;

    public speacialty_name: string;

    constructor(props: Omit<Specialty, 'speacialty_id'>, specialty_id?: number) {
        Object.assign(this, props);

        if (specialty_id) {
            this.specialty_id = specialty_id;
        }
    }
}