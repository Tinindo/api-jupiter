import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('specialties', (table) => {

        table.increments('specialty_id').unsigned().primary();
        table.string('specialty_name', 50).notNullable();
        table.string('description', 100);

        table.dateTime('created_at').defaultTo(knex.fn.now());
        table.dateTime('updated_at').defaultTo(knex.fn.now());

    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('specialties');
}

