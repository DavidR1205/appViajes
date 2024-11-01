import { getAllP } from "../controller/ViajesController.js";
import express from 'express'

const router =  express.Router();

router.get('/', getAllP);

export default router;