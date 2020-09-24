import express from 'express';
import 'express-async-errors';
import 'dotenv/config';

import errorHandler from './middlewares/errorHandler';
import router from './routes';
import './database/connection';

const PORT = Number(process.env.PORT) || 3030;

const app = express();

app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});