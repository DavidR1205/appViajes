import { getCredenciales } from "../controller/UsuariosController.js";
import express from 'express';

const router = express.Router();
router.get('/', getCredenciales);

export default router;