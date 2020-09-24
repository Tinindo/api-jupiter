import express from 'express';
import 'dotenv/config';

import router from './routes';
import './database/connection';

const PORT = Number(process.env.APP_PORT) || 3030;
const HOST = process.env.APP_HOST || '0.0.0.0';

const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, HOST, () => {
    console.log(`Server running at port ${PORT}`);
});