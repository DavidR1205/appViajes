import { getAllC, addConductor, deleteConductor } from "../controller/ConductoresController.js";
import express from 'express';

const router = express.Router();

router.get('/', getAllC);
router.post('/', addConductor);
router.delete('/:id_empleado', deleteConductor);

export default router;
