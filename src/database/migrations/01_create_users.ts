import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('users', (table) => {

        table.increments('id').unsigned().primary();
        table.string('first_name', 50).notNullable();
        table.string('last_name', 200).notNullable();
        table.string('email', 200).notNullable();
        table.string('password', 300).notNullable();
        table.string('whatsapp', 30).notNullable();
        table.string('document', 20).notNullable();
        table.date('birth_date');
        table.boolean('is_provider');
        table.boolean('active').defaultTo(true);
        table.string('avatar', 300);
        table.dateTime('created_at').defaultTo(knex.fn.now());
        table.dateTime('updated_at').defaultTo(knex.fn.now());

    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('users');
}
