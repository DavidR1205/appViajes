import { getAllP, addViaje, deleteViajeD } from "../controller/ViajesController.js";
import express from 'express'

const router =  express.Router();

router.get('/', getAllP);
router.post('/', addViaje);
router.delete('/:id_viaje', deleteViajeD);

export default router;