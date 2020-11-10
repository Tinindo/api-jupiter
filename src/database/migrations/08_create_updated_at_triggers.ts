import {
    onUpdateFunction,
    onUpdateTrigger,
    deleteOnUpdateFunction,
    dropOnUpdateTrigger
} from '../triggers/postgres_updated_at_function';

import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    await knex.raw(onUpdateFunction());

    const usersOnUpdateTimestampFunction = onUpdateTrigger('users');
    await knex.raw(usersOnUpdateTimestampFunction);

    const usersPropertiesOnUpdateTimestampFunction = onUpdateTrigger('users_properties');
    await knex.raw(usersPropertiesOnUpdateTimestampFunction);

    const usersScoresOnUpdateTimestampFunction = onUpdateTrigger('users_scores');
    await knex.raw(usersScoresOnUpdateTimestampFunction);

    const partnersOnUpdateTimestampFunction = onUpdateTrigger('partners');
    await knex.raw(partnersOnUpdateTimestampFunction);

    const specialtiesOnUpdateTimestampFunction = onUpdateTrigger('specialties');
    await knex.raw(specialtiesOnUpdateTimestampFunction);

    const servicesSchedulesOnUpdateTimestampFunction = onUpdateTrigger('services_schedules');
    await knex.raw(servicesSchedulesOnUpdateTimestampFunction);
}

export async function down(knex: Knex): Promise<void> {
    const dropUsersOnUpdateTrigger = dropOnUpdateTrigger('users');
    await knex.raw(dropUsersOnUpdateTrigger);

    const dropUsersPropertiesOnUpdateTrigger = dropOnUpdateTrigger('users_properties');
    await knex.raw(dropUsersPropertiesOnUpdateTrigger);

    const dropUsersScoresOnUpdateTrigger = dropOnUpdateTrigger('users_scores');
    await knex.raw(dropUsersScoresOnUpdateTrigger);

    const dropPartnersOnUpdateTrigger = dropOnUpdateTrigger('partners');
    await knex.raw(dropPartnersOnUpdateTrigger);

    const dropSpecialtiesOnUpdateTrigger = dropOnUpdateTrigger('specialties');
    await knex.raw(dropSpecialtiesOnUpdateTrigger);

    const dropServicesSchedulesOnUpdateTrigger = dropOnUpdateTrigger('services_schedules');
    await knex.raw(dropServicesSchedulesOnUpdateTrigger);

    const DROP_ON_UPDATE_TIMESTAMP_FUNCTION = deleteOnUpdateFunction();
    await knex.raw(DROP_ON_UPDATE_TIMESTAMP_FUNCTION);
}

