import express from 'express';
import {router} from "./routes";
import cors from 'cors';

const PORT = 3001;

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.urlencoded({extended: true}));
app.use(express.json({
    type: ['application/json', 'text/plain']
}));

app.use(router);

app.listen(PORT, (): void => {
    console.log(`server is listening on ${PORT}`);
});