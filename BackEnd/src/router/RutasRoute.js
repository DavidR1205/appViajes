import { getAllR, addRuta,DeleteRutaA, actualizarRuta, obternerRuta} from "../controller/RutasController.js";
import express from 'express';

const router = express.Router();



router.get('/rutasA', getAllR);
router.post('/rutasA', addRuta);
router.delete('/rutasA/:id_ruta', DeleteRutaA);
router.get('/rutasA/:id', obternerRuta);
router.put('/rutasA/:id', actualizarRuta);

router.get('/', getAllR);
router.post('/', addRuta);
router.delete('/:id_ruta', DeleteRutaA);

export default router;