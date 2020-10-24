"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUserUseCase = void 0;
class FindUserUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(user_id) {
        const userDetails = await this.usersRepository.findDetails(user_id);
        return userDetails;
    }
}
exports.FindUserUseCase = FindUserUseCase;
