import knex from 'knex';
import 'dotenv/config';

const database = knex({
    client: 'postgres',
    connection: {
        host: process.env.POSTGRES_HOST,
        user: process.env.POSTGRES_USERNAME,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        ssl: true,
    }
});

export default database;