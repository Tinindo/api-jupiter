import express from 'express';
import router from './routes';

import './database/connection';

import 'dotenv/config';

const app = express();
const PORT = process.env.APP_PORT || 3030;

app
    .use(express.json())
    .use(router);

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});