import express from 'express';
import cors from 'cors';
import router from '../src/router/VehiculosRoute.js'
import routerLogin from "../src/router/LoginRoute.js"
import routerRutas from "../src/router/RutasRoute.js"
import routerUsuarios from './router/UsuariosRoute.js';
import routerConductores from './router/ConductoresRoute.js';
import routerViajes from './router/ViajesRoute.js'
import { sql, getConnetion } from './config/connetion.js';


const app = express();

app.use(cors());
app.use(express.json());
app.get('/vehiculos', router);
app.get('/login', routerLogin);
app.get('/rutasA', routerRutas);
app.get('/usuarios',routerUsuarios);
app.get('/conductores',routerConductores);
app.get('/programar', routerViajes);


app.listen(process.env.PORT, ()=> { 
    getConnetion();
    console.log(`Conectado en el puerto: ${process.env.PORT}`)
})