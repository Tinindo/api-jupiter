import database from '../../database/connection';

class FindUserById {
    async execute(userId: string): Promise<any> {
        const userPromise = database
            .select('*')
            .from('users')
            .leftJoin('users_properties', 'user_id', '=', userId)

        const userScorePromise = database('users_scores')
            .select('score')
            .where('user_id', '=', userId)
            .groupBy('score')
            .avg('score');

        const [user] = await Promise.resolve(userPromise);
        const [userScore] = await Promise.resolve(userScorePromise);

        const userDetails = {
            ...user,
            score: userScore,
        };

        return userDetails;
    }
}

export default new FindUserById();