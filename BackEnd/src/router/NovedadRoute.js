import { addNovedad, deleteNovedadD, getAllN } from "../controller/NovedadController.js";
import express from "express";

const router = express.Router();

router.get('/', getAllN);
router.post('/', addNovedad);
router.delete('/:id_novedad', deleteNovedadD)

export default router;