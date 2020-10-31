import { Specialty } from '@entities/Specialty';

export interface ISpecialtiesRepository {
    list(): Promise<Specialty[]>;
}