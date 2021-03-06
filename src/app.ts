import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import errorHandler from '@middlewares/errorHandler';
import { router } from './routes/index';
import '@database/connection';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);

export { app };