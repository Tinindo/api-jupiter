import { AppError } from "@helpers/AppError";
import { IUsersRepository } from "@repositories/IUsersRepository";

export class FindUserUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ) { }

    async execute(user_id: number | string) {
        const userDetails = await this.usersRepository.findDetails(user_id);

        if (!userDetails) {
            throw new AppError('Ué, parece que esse usuário não existe');
        }

        return userDetails;
    }
}