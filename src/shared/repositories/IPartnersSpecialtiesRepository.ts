import { PartnerSpecialty } from "@entities/PartnerSpecialty";

export interface IPartnersSpecialtiesRepository {
    create(payload: PartnerSpecialty): Promise<PartnerSpecialty>;
    createMany(specialtiesArray: PartnerSpecialty[]): Promise<PartnerSpecialty[]>
}