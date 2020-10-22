import { PostgresUsersRepository } from "@repositories/implementations/PostgresUsersRepository";

export class FindUserUseCase {
    constructor(
        private usersRepository: PostgresUsersRepository
    ) { }

    async execute(user_id: number | string) {
        const userDetails = await this.usersRepository.findDetails(user_id);

        return userDetails;
    }
}