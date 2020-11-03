import Knex from 'knex';

import { IUsersScoresRepository } from '@repositories/IUsersScoresRepository';
import { UserScore } from '@entities/UserScore'

export class PostgresUsersScoresRepository implements IUsersScoresRepository {
    constructor(
        private connection: Knex
    ) { }

    async create(data: UserScore) {
        const userScore = new UserScore(data);

        const [createdUserScore] = await this.connection('users_scores')
            .insert(userScore)
            .returning('*');

        return createdUserScore;
    }

    async list(user_id: number, limit: number, offset: number) {
        const userScores = await this.connection('users_scores')
            .select('*')
            .where('user_id', '=', user_id)
            .limit(limit)
            .offset(offset);

        return userScores;
    }
}