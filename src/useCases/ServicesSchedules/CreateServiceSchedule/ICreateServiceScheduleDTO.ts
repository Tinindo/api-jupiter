export interface ICreateServiceScheduleDTO {
    user_id: number;
    partner_id: number;
    status?: string;
    user_property_id: number;
    price: number;
    start_at: Date;
    finish_at: Date;
}

export interface IValidateServiceAvailabilityDTO {
    user_id: number;
    partner_id: number;
    start_at: Date;
    finish_at: Date;
}