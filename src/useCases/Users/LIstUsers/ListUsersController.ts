import { Request, Response } from 'express'
import { connection } from "../../../database/connection";
import { ListUsersUseCase } from "./ListUsersUseCase";

export class ListUsersController {
    constructor(
        private listUsersUseCase: ListUsersUseCase
    ) { }

    async handle(request: Request, response: Response) {
        const { limit, offset } = request.query;

        const users = await this.listUsersUseCase.execute(Number(limit), Number(offset));

        return response.json(users);
    }
}