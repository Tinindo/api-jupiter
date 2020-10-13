import { UserProperty } from "@entities/UserProperty";
import { AppError } from "@helpers/AppError";
import { IUsersPropertiesRepository } from "@repositories/IUsersPropertiesRepository";
import { IUsersRepository } from "@repositories/IUsersRepository";
import { ICreateUserPropertyRequest } from "./CreateUserPropertyDTO";

export class CreateUserPropertyUseCase {
    constructor(
        private userRepository: IUsersRepository,
        private userPropertyRepository: IUsersPropertiesRepository,
    ) { }

    async execute(data: ICreateUserPropertyRequest, user_id: number): Promise<UserProperty> {
        const userExists = await this.userRepository.findById(user_id);

        if (!userExists) {
            throw new AppError('Estranho... parece que esse usuário não existe. Verifique a requisição e tente novamente', 400);
        }

        const createdUserProperty = await this.userPropertyRepository.create({
            user_id,
            ...data,
        });

        return createdUserProperty;
    }
}