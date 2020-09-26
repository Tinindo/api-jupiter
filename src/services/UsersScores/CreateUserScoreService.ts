import database from '../../database/connection';

import AppError from '../../helpers/AppError';

interface CreateScoreRequest {
    additional_note: string;
    score: number;
}

interface CreatedScore {
    additional_note: string;
    score: number;
    user_id: number;
    score_id: number;
    created_at: Date;
    updated_at: Date;
}

class CreateUserScoreService {
    async execute(scorePayload: CreateScoreRequest, userId: number): Promise<CreatedScore> {
        if (!userId) {
            throw new AppError('Missing required property ID at request params', 400);
        }

        const {
            score,
            additional_note,
        } = scorePayload;

        const [createdScore] = await database('users_scores')
            .insert({
                user_id: userId,
                additional_note,
                score,
            })
            .returning('*');

        return createdScore;
    }
}

export default new CreateUserScoreService();