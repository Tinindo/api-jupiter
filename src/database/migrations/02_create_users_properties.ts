import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('users_properties', (table) => {

        table.increments('property_id').primary();

        table.string('postal_code').notNullable();
        table.string('number', 20).notNullable();
        table.string('complement', 50);
        table.string('street', 200).notNullable();
        table.string('neighborhood', 200).notNullable();
        table.string('city', 50).notNullable();
        table.string('state', 5).notNullable();
        table.string('country', 50).notNullable().defaultTo('BR');
        table.decimal('latitude', 10, 8).notNullable();
        table.decimal('longitude', 11, 8).notNullable();

        table.integer('rooms_quantity').unsigned();
        table.integer('bathrooms_quantity').unsigned();
        table.integer('living_rooms_quantity').unsigned();
        table.integer('kitchens_quantity').unsigned();
        table.integer('garages_quantity').unsigned();

        table.integer('user_id')
            .unsigned()
            .notNullable()

        table.foreign('user_id')
            .references('user_id')
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
