import { getAllR, addRuta,DeleteRutaA} from "../controller/RutasController.js";
import express from 'express';

const router = express.Router();

router.get('/rutasA', getAllR);
router.post('/rutasA', addRuta);
router.delete('/rutasA/:id_ruta', DeleteRutaA);

export default router;