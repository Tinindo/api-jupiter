import { IUsersRepository } from "@repositories/IUsersRepository";

export class ListUsersUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ) { }

    async execute(limit: number, offset: number) {
        const users = await this.usersRepository.list(limit, offset);

        return users;
    }
}