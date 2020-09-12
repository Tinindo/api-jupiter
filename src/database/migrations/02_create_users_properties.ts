import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('users_properties', (table) => {

        table.increments('address_id').primary();

        table.string('postal_code').notNullable();
        table.string('number', 20).notNullable();
        table.string('street', 200).notNullable();
        table.string('neighborhood', 200).notNullable();
        table.string('city', 50).notNullable();
        table.string('state', 5).notNullable();
        table.string('country', 50).notNullable().defaultTo('BR');

        table.integer('rooms_quantity').unsigned().notNullable();
        table.integer('bathrooms_quantity').unsigned().notNullable();
        table.integer('living_rooms_quantity').unsigned().notNullable();
        table.integer('kitchens_quantity').unsigned().notNullable();
        table.integer('garages_quantity').unsigned().notNullable();

        table.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('users_properties');
}
