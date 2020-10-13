import express from 'express';
import 'express-async-errors';

import errorHandler from '@middlewares/errorHandler';
import { router } from './routes/index';
import '@database/connection';

const app = express();

app.use(express.json());
app.use(router);
app.use(errorHandler);

export { app };