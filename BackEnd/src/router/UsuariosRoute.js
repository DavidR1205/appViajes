import {getAllU} from  "../controller/UsuariosController.js"
import  express from 'express';

const router = express.Router();
router.get('/usuarios', getAllU);

export default router;


