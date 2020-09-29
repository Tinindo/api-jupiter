"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    await knex.schema.createTable('users_scores', (table) => {
        table.increments('score_id').unsigned().primary();
        table.integer('score', 1).unsigned().notNullable();
        table.string('additional_note');
        table.integer('user_id')
            .unsigned()
            .notNullable();
        table.foreign('user_id')
            .references('user_id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.dateTime('created_at').defaultTo(knex.fn.now());
        table.dateTime('updated_at').defaultTo(knex.fn.now());
    });
}
exports.up = up;
async function down(knex) {
    await knex.schema.dropTable('users_scores');
}
exports.down = down;
