import { IUsersRepository } from '@repositories/IUsersRepository'
import { ICreateUserRequest } from './CreateUserDTO';
import { validateFields } from '@helpers/validateFields';
import { AppError } from '@helpers/AppError';
import { User } from '@entities/User';

export class CreateUserUseCase {
    constructor(private usersRepository: IUsersRepository) { }

    async execute(data: ICreateUserRequest): Promise<User> {
        const requiredFields = ['first_name', 'last_name', 'email', 'password', 'whatsapp', 'document', 'birth_date'];

        validateFields(requiredFields, data);

        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

        if (userAlreadyExists) {
            throw new AppError('Hmmm, parece que existe um usuário com esse e-mail', 400);
        }

        const user = new User(data);

        const createdUser = await this.usersRepository.create(user);

        return createdUser;
    }
}