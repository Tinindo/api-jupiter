import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('users_scores', (table) => {

        table.increments('score_id').unsigned().primary();
        table.integer('score', 1).unsigned().notNullable();
        table.string('additional_note');

        table.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.dateTime('created_at').defaultTo(knex.fn.now());
        table.dateTime('updated_at').defaultTo(knex.fn.now());

    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('users_scores');
}

