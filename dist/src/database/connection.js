"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const knex_1 = __importDefault(require("knex"));
require("dotenv/config");
const connection = knex_1.default({
    client: 'postgres',
    connection: {
        host: process.env.POSTGRES_HOST,
        user: process.env.POSTGRES_USERNAME,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        ssl: true,
    }
});
exports.connection = connection;
