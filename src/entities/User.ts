export class User {
    public readonly user_id: number;

    public first_name: string;

    public last_name: string;

    public email: string;

    public password: string;

    public whatsapp: string;

    public document: string;

    public is_provider?: boolean;

    public birth_date: Date;

    public created_at?: Date;

    public updated_at?: Date;

    constructor(props: Omit<User, 'user_id'>, user_id?: number) {
        Object.assign(this, props);

        if (user_id) {
            this.user_id = user_id;
        }
    }
}