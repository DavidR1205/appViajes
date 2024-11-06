import { getAllP, addViaje, deleteViajeD, finalizarViajeC } from "../controller/ViajesController.js";
import express from 'express'

const router =  express.Router();

router.get('/', getAllP);
router.post('/', addViaje);
router.delete('/:id_viaje', deleteViajeD);
router.put('/:id_viaje', finalizarViajeC)

export default router;