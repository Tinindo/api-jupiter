import { IUpdateUserDTO } from "../useCases/Users/UpdateUser/IUpdateUserDTO";

export class UpdateUser implements IUpdateUserDTO {
    public first_name?: string;

    public last_name?: string;

    public whatsapp?: string;

    public document?: string;

    public birth_date?: Date;

    public is_provider?: Boolean;

    public active?: Boolean;

    constructor(props: UpdateUser) {
        Object.assign(this, props);
    }
}