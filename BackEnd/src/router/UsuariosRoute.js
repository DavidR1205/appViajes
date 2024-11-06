import {getAllU, addUsuario, deleteUsuarioD} from  "../controller/UsuariosController.js"
import { getAllRo } from "../controller/RolesController.js"
import  express from 'express';

const router = express.Router();
router.get('/', getAllU);
router.post('/', addUsuario);
router.delete('/:id_usuario', deleteUsuarioD);
router.get('/roles', getAllRo);

export default router;


