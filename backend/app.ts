import express from 'express';
import { router } from '../backend/routes/routes';
import cors from 'cors';

const app = express();

app.listen('3000', () => {
    console.log('Servidor rodando na porta 3000');
})

app.use(express.json());
app.use(cors());
app.use(router);

