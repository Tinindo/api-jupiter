import { User } from "@entities/User";

export interface IUsersRepository {
    findByEmail(email: string): Promise<User | false>;
    create(userRequest: User): Promise<User>;
    list(limit: number, offset: number): Promise<User[]>;
    findById(user_id: number | string): Promise<User>
}