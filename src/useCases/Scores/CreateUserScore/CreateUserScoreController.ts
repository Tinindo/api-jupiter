import { Request, Response } from 'express';
import { CreateUserScoreUseCase } from "./CreateUserScoreUseCase";


export class CreateUserScoreController {
    constructor(
        private createUserScoreUseCase: CreateUserScoreUseCase
    ) { }

    async handle(request: Request, response: Response) {
        const { user_id } = request.params;

        const { score, additional_note } = request.body;

        const createdUserScore = await this.createUserScoreUseCase.execute(
            Number(user_id),
            { score, additional_note }
        );

        return response.status(201).json(createdUserScore);
    }
}