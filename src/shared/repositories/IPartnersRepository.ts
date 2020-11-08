import { Partner } from "@entities/Partner";

export interface IPartnersRepository {
    listFilteredBySpecialities(filters: string[], limit: number, offset: number): Promise<Partner[]>;
    list(limit: number, offset: number): Promise<Partner[]>;
    create(payload: Partner): Promise<Partner>;
}