import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
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

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('partners_specialties');
}

