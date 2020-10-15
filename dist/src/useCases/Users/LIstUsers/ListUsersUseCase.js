"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUsersUseCase = void 0;
class ListUsersUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(limit, offset) {
        const users = await this.usersRepository.list(limit, offset);
        return users;
    }
}
exports.ListUsersUseCase = ListUsersUseCase;
