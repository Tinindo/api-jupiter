"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresUsersPropertiesRepository = void 0;
const UserProperty_1 = require("@entities/UserProperty");
class PostgresUsersPropertiesRepository {
    constructor(connection) {
        this.connection = connection;
    }
    async create(userPropertyRequest) {
        const createdUserProperty = new UserProperty_1.UserProperty(userPropertyRequest);
        const [createdProperty] = await this.connection('users_properties')
            .insert(createdUserProperty)
            .returning('*');
        return createdProperty;
    }
}
exports.PostgresUsersPropertiesRepository = PostgresUsersPropertiesRepository;
