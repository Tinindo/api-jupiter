"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const postgres_updated_at_function_1 = require("../triggers/postgres_updated_at_function");
async function up(knex) {
    await knex.raw(postgres_updated_at_function_1.onUpdateFunction());
    const usersOnUpdateTimestampFunction = postgres_updated_at_function_1.onUpdateTrigger('users');
    await knex.raw(usersOnUpdateTimestampFunction);
    const usersPropertiesOnUpdateTimestampFunction = postgres_updated_at_function_1.onUpdateTrigger('users_properties');
    await knex.raw(usersPropertiesOnUpdateTimestampFunction);
    const usersScoresOnUpdateTimestampFunction = postgres_updated_at_function_1.onUpdateTrigger('users_scores');
    await knex.raw(usersScoresOnUpdateTimestampFunction);
    const partnersOnUpdateTimestampFunction = postgres_updated_at_function_1.onUpdateTrigger('partners');
    await knex.raw(partnersOnUpdateTimestampFunction);
    const specialtiesOnUpdateTimestampFunction = postgres_updated_at_function_1.onUpdateTrigger('specialties');
    await knex.raw(specialtiesOnUpdateTimestampFunction);
    const servicesSchedulesOnUpdateTimestampFunction = postgres_updated_at_function_1.onUpdateTrigger('services_schedules');
    await knex.raw(servicesSchedulesOnUpdateTimestampFunction);
}
exports.up = up;
async function down(knex) {
    const dropUsersOnUpdateTrigger = postgres_updated_at_function_1.dropOnUpdateTrigger('users');
    await knex.raw(dropUsersOnUpdateTrigger);
    const dropUsersPropertiesOnUpdateTrigger = postgres_updated_at_function_1.dropOnUpdateTrigger('users_properties');
    await knex.raw(dropUsersPropertiesOnUpdateTrigger);
    const dropUsersScoresOnUpdateTrigger = postgres_updated_at_function_1.dropOnUpdateTrigger('users_scores');
    await knex.raw(dropUsersScoresOnUpdateTrigger);
    const dropPartnersOnUpdateTrigger = postgres_updated_at_function_1.dropOnUpdateTrigger('partners');
    await knex.raw(dropPartnersOnUpdateTrigger);
    const dropSpecialtiesOnUpdateTrigger = postgres_updated_at_function_1.dropOnUpdateTrigger('specialties');
    await knex.raw(dropSpecialtiesOnUpdateTrigger);
    const dropServicesSchedulesOnUpdateTrigger = postgres_updated_at_function_1.dropOnUpdateTrigger('services_schedules');
    await knex.raw(dropServicesSchedulesOnUpdateTrigger);
    const DROP_ON_UPDATE_TIMESTAMP_FUNCTION = postgres_updated_at_function_1.deleteOnUpdateFunction();
    await knex.raw(DROP_ON_UPDATE_TIMESTAMP_FUNCTION);
}
exports.down = down;
