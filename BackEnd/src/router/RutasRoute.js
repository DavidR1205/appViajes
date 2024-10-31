import { getAllR } from "../controller/RutasController.js";
import express from 'express';

const router = express.Router();

router.get('/', getAllR);

export default router;