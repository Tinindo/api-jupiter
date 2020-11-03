import { Partner } from "@entities/Partner";

export interface IPartnersRepository {
    list(limit: number | string, offset: number | string): Promise<Partner[]>;
    create(payload: Partner): Promise<Partner>;
}