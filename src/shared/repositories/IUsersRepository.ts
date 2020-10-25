import { User } from "@entities/User";

import { IUpdateUserDTO } from '@useCases/Users/UpdateUser/IUpdateUserDTO';

export interface IUsersRepository {
    list(limit: number, offset: number): Promise<User[]>;
    findByEmail(email: string, returnPasswordHash?: boolean): Promise<User | false>;
    findActiveUserByEmail(email: string, returnPasswordHash?: boolean): Promise<User>;
    findById(user_id: number | string): Promise<User>
    findDetails(user_id: number | string): Promise<User>;
    create(userRequest: User): Promise<User>;
    update(user_id: number | string, updateUserRequest: IUpdateUserDTO): Promise<User>;
}