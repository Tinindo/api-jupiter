import 'module-alias/register';
import 'dotenv/config';
import { app } from './app';

const PORT = Number(process.env.PORT) || 3030;

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});