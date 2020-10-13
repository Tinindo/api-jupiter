import { UserProperty } from "@entities/UserProperty";

export interface IUsersPropertiesRepository {
    create(userPropertyRequest: UserProperty): Promise<UserProperty>;
}