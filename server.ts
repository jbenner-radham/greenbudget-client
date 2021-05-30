import express from 'express';
import getExpenses from './lib/get-expenses';

const app = express();
const port = process.env.GREENBUDGET_PORT ?? 3000;

app.get('/', (req, res) => {
    res.send(getExpenses());
});

app.listen(port, () => {
    console.log(`Greenbudget is listening at http://localhost:${port}`);
});