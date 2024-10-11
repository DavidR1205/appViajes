import express from 'express';
import cors from 'cors';
import router from '../src/router/VehiculosRoute.js'
import { sql, getConnetion } from './config/connetion.js';

const app = express();

app.use(cors());
app.use(express.json());
app.get('/vehiculos', router);

app.listen(process.env.PORT, ()=> { 
    getConnetion();
    console.log(`Conectado en el puerto: ${process.env.PORT}`)
})