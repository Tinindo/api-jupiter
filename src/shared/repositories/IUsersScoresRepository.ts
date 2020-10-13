import { UserScore } from "@entities/UserScore";

export interface IUsersScoresRepository {
    create(data: UserScore): Promise<UserScore>
    list(user_id: number, limit: number, offset: number): Promise<UserScore[]>
}