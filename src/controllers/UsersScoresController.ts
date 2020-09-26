import { Request, Response } from 'express';

import createUserScoreService from '../services/UsersScores/CreateUserScoreService';

class UsersScoresController {
    async create(request: Request, response: Response) {
        const { id } = request.params;

        const createdScore = createUserScoreService.execute(request.body, Number(id));

        return response.status(201).json(createdScore);
    }
}

export default new UsersScoresController();