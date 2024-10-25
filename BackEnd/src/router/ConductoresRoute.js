import { getAllC } from "../controller/ConductoresController.js";
import express from 'express';

const router = express.Router();

router.get('/conductores', getAllC);

export default router;