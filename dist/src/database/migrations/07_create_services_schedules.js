"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    await knex.schema.createTable('services_schedules', (table) => {
        table.increments('service_schedule_id').unsigned().primary();
        table.integer('partner_id').unsigned().notNullable();
        table.integer('user_id').unsigned().notNullable();
        table.float('price', 10, 2).notNullable();
        table.dateTime('start_at').notNullable();
        table.dateTime('finish_at').notNullable();
        table.string('status').defaultTo('Criado').notNullable();
        table.integer('user_property_id').notNullable();
        table.foreign('partner_id')
            .references('partner_id')
            .inTable('partners')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.foreign('user_id')
            .references('user_id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.foreign('user_property_id')
            .references('property_id')
            .inTable('users_properties')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.dateTime('created_at').defaultTo(knex.fn.now());
        table.dateTime('updated_at').defaultTo(knex.fn.now());
    });
}
exports.up = up;
async function down(knex) {
    await knex.schema.dropTable('services_schedules');
}
exports.down = down;
