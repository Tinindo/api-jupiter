"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresUsersScoresRepository = void 0;
const UserScore_1 = require("@entities/UserScore");
class PostgresUsersScoresRepository {
    constructor(connection) {
        this.connection = connection;
    }
    async create(data) {
        const userScore = new UserScore_1.UserScore(data);
        const [createdUserScore] = await this.connection('users_scores')
            .insert(userScore)
            .returning('*');
        return createdUserScore;
    }
    async list(user_id, limit, offset) {
        const userScores = await this.connection('users_scores')
            .select('*')
            .where('user_id', '=', user_id)
            .limit(limit)
            .offset(offset);
        return userScores;
    }
}
exports.PostgresUsersScoresRepository = PostgresUsersScoresRepository;
