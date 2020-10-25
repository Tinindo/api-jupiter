export interface IUpdateUserDTO {
    first_name?: string;
    last_name?: string;
    whatsapp?: string;
    document?: string;
    birth_date?: Date;
    is_provider?: Boolean;
    active?: Boolean;
}