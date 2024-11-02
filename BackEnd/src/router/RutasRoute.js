import { getAllR, addRuta,DeleteRutaA} from "../controller/RutasController.js";
import express from 'express';

const router = express.Router();


router.get('/', getAllR);
router.post('/', addRuta);
router.delete('/:id_ruta', DeleteRutaA);

router.get('/', getAllR);


export default router;