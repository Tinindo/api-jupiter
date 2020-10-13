export class UserScore {
    public user_id: number;

    public readonly score_id?: number;

    public score: number;

    public additional_note: string;

    public created_at?: Date;

    public updated_at?: Date;

    constructor(props: Omit<UserScore, 'score_id'>, score_id?: number) {
        Object.assign(this, props);

        if (score_id) {
            this.score_id = this.score_id;
        }
    }
}