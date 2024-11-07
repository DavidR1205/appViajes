import express from 'express';
import cors from 'cors';
import router from '../src/router/VehiculosRoute.js'
import routerLogin from "../src/router/LoginRoute.js"
import routerRutas from "../src/router/RutasRoute.js"
import routerUsuarios from './router/UsuariosRoute.js';
import routerConductores from './router/ConductoresRoute.js';
import routerViajes from './router/ViajesRoute.js'
import routerNovedad from './router/NovedadRoute.js';


const app = express();

app.use(cors());
app.use(express.json());

app.use('/vehiculos', router);
app.use('/login', routerLogin);
app.use('/rutasA', routerRutas);
app.use('/usuarios',routerUsuarios);
app.use('/conductores',routerConductores);
app.use('/programar', routerViajes);
app.use('/novedades', routerNovedad);


app.listen(process.env.PORT, ()=> { 
    console.log(`Conectado en el puerto: ${process.env.PORT}`)
})