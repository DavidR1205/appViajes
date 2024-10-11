import { getAllV } from "../controller/VehiculosController.js";
import express from 'express';

const router = express.Router();

router.get('/vehiculos', getAllV);

export default router;