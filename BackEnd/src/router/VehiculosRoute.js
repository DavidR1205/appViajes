import { getAllV, addVehiculos, deleteVehiculosD } from "../controller/VehiculosController.js";
import express from 'express';

const router = express.Router();

router.get('/', getAllV);
router.post('/', addVehiculos);
router.delete('/:id_vehiculo', deleteVehiculosD)

export default router;