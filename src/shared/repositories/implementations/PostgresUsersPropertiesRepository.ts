import Knex from 'knex';
import { IUsersPropertiesRepository } from '@repositories/IUsersPropertiesRepository';

import { UserProperty } from '@entities/UserProperty';

export class PostgresUsersPropertiesRepository implements IUsersPropertiesRepository {
    constructor(
        private connection: Knex
    ) { }

    async create(userPropertyRequest: UserProperty): Promise<UserProperty> {
        const createdUserProperty = new UserProperty(userPropertyRequest);

        const [createdProperty] = await this.connection('users_properties')
            .insert(createdUserProperty)
            .returning('*');

        return createdProperty;
    }
}