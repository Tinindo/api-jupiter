import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('specialties').del();

    const specialties = [{
        specialty_id: 1,
        specialty_name: 'Faxineira',
        description: null
    }, {
        specialty_id: 2,
        specialty_name: 'Passadeira',
        description: null
    },
    {
        specialty_id: 3,
        specialty_name: 'Lavadeira',
        description: null
    },
    {
        specialty_id: 4,
        specialty_name: 'Cozinheira',
        description: null
    },
    {
        specialty_id: 5,
        specialty_name: 'Marido de aluguel',
        description: 'Serviços domésticos de manutenção e pequenos reparos'
    }];

    // Inserts seed entries
    await knex('specialties').insert(specialties);
};
