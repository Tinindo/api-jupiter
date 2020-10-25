import { AppError } from "@helpers/AppError";
import { IUsersRepository } from "@repositories/IUsersRepository";
import { IUsersScoresRepository } from "@repositories/IUsersScoresRepository";
import { IUserScoreRequest } from './CreateUserScoreDTO';

export class CreateUserScoreUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private usersScoresRespository: IUsersScoresRepository,
    ) { }

    async execute(user_id: number, userScorePayload: IUserScoreRequest) {
        const userExists = await this.usersRepository.findById(user_id);

        if (!userExists) {
            throw new AppError('Estranho... parece que esse usuário não existe. Verifique a requisição e tente novamente', 400);
        }

        const createdUserScore = await this.usersScoresRespository.create({ user_id, ...userScorePayload });

        return createdUserScore;
    }
}