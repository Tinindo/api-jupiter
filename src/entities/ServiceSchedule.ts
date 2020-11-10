export class ServiceSchedule {
    public service_schedule_id?: number;

    public user_id: number;

    public partner_id: number;

    public user_property_id: number;

    public price: number;

    public start_at: Date;

    public finish_at: Date;

    public status?: string;

    constructor(props: Omit<ServiceSchedule, 'service_schedule_id, status'>, service_schedule_id?: number) {
        Object.assign(this, props);

        if (service_schedule_id) {
            this.service_schedule_id = service_schedule_id;
        }
    }
}