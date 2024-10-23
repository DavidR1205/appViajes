import { getAllR } from "../controller/RutasController.js";
import express from 'express';

const router = express.Router();

router.get('/rutasA', getAllR);

export default router;