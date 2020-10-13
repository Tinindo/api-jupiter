import { app } from './app';
import 'dotenv/config';

const PORT = Number(process.env.PORT) || 3030;

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});