import { getAllUsuarios, getUsuarioByCredenciales } from "../models/UsuariosModel.js";

const getCredenciales = async(req, res) => {
    const { correo, contrasena } = req.query;
    
    try {
        const credenciales =  await getUsuarioByCredenciales(correo, contrasena);
        res.json(credenciales);
    } catch (error) {
        res.status(500).json({ message: "Error en el Servidor"});
    }
}

export {getCredenciales}

const getAllU = async (req, res) =>{

    const usuarios = await getAllUsuarios();
    res.json(usuarios);
}

export {getAllU}