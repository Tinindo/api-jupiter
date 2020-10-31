import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('partners', (table) => {

        table.increments('partner_id').unsigned().primary();
        table.integer('user_id').unsigned().notNullable();
        table.string('bio', 500).nullable();
        table.float('value_per_day').notNullable().unsigned();
        table.boolean('accepts_mensal_proposals').defaultTo(false).notNullable();

        table.foreign('user_id')
            .references('user_id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.dateTime('created_at').defaultTo(knex.fn.now());
        table.dateTime('updated_at').defaultTo(knex.fn.now());

    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('partners');
}

