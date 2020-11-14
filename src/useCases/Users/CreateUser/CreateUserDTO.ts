export interface ICreateUserRequest {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    whatsapp: string;
    document: string;
    avatar?: string;
    birth_date: Date;
}