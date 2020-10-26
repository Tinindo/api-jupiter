"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
class CreateUserController {
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    async handle(request, response) {
        const { first_name, last_name, email, password, whatsapp, document, avatar, birth_date } = request.body;
        const createdUser = await this.createUserUseCase.execute({
            first_name,
            last_name,
            email,
            password,
            whatsapp,
            document,
            avatar,
            birth_date
        });
        return response.status(201).json(createdUser);
    }
}
exports.CreateUserController = CreateUserController;
