const path = require('path');
require('dotenv/config');

module.exports = {
    client: 'postgres',
    connection: {
        host: process.env.POSTGRES_HOST,
        user: process.env.POSTGRES_USERNAME,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        ssl: { rejectUnauthorized: false }
    },
    seeds: {
        directory: './src/database/seeds'
    },
    migrations: {
        directory: path.join(__dirname, 'src', 'database', 'migrations')
    },
    useNullAsDefault: true,
};