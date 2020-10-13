export class UserProperty {
    public readonly property_id?: number;

    public user_id: number;

    public living_rooms_quantity: number;

    public bathrooms_quantity: number;

    public kitchens_quantity: number;

    public garages_quantity: number;

    public rooms_quantity: number;

    public postal_code: string;

    public number: string;

    public complement: string;

    public street: string;

    public neighborhood: string;

    public city: string;

    public state: string;

    public country: string;

    constructor(props: Omit<UserProperty, 'property_id'>, property_id?: number) {
        Object.assign(this, props);

        if (property_id) {
            this.user_id = property_id;
        }
    }
}