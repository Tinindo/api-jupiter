"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    await knex.schema.createTable('specialties', (table) => {
        table.increments('specialty_id').unsigned().primary();
        table.string('specialty_name', 50).notNullable();
        table.string('description', 100);
        table.dateTime('created_at').defaultTo(knex.fn.now());
        table.dateTime('updated_at').defaultTo(knex.fn.now());
    });
}
exports.up = up;
async function down(knex) {
    await knex.schema.dropTable('specialties');
}
exports.down = down;
