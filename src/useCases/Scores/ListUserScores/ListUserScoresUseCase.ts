import { AppError } from "@helpers/AppError";
import { IUsersRepository } from "@repositories/IUsersRepository";
import { IUsersScoresRepository } from "@repositories/IUsersScoresRepository";

export class ListUserScoresUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private userScoresRepository: IUsersScoresRepository
    ) { }

    async execute(user_id: number, limit: number, offset: number) {
        const userExists = await this.usersRepository.findById(user_id);

        if (!userExists) {
            throw new AppError('Ué, parece que esse usuário não existe ¯\_(ツ)_/¯');
        }

        const userScores = await this.userScoresRepository.list(user_id, limit, offset);

        return userScores;
    }
}