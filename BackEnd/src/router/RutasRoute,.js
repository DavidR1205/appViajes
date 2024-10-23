import { getAllR } from "../controller/RutasController";
import express from 'express';

const router = express.Router();

router.get('/rutas', getAllR);

export default router;