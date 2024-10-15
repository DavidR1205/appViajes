import { getCredenciales } from "../controller/UsuariosController.js";
import express from 'express';

const router = express.Router();
router.get('/login', getCredenciales);

export default router;