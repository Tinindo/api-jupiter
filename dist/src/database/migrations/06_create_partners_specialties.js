"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    await knex.schema.createTable('partners_specialties', (table) => {
        table.integer('partner_id').unsigned().notNullable();
        table.integer('specialty_id').unsigned().notNullable();
        table.primary(['partner_id', 'specialty_id']);
        table.foreign('specialty_id')
            .references('specialty_id')
            .inTable('specialties')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.foreign('partner_id')
            .references('partner_id')
            .inTable('partners')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.dateTime('created_at').defaultTo(knex.fn.now());
        table.dateTime('updated_at').defaultTo(knex.fn.now());
    });
}
exports.up = up;
async function down(knex) {
    await knex.schema.dropTable('partners_specialties');
}
exports.down = down;
