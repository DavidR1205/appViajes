import { getAllUsuarios, getUsuarioByCredenciales, createUsuario, deleteUsuario } from "../models/UsuariosModel.js";

const getCredenciales = async (req, res) => {
    const { correo, contrasena } = req.query;

    try {
        const credenciales = await getUsuarioByCredenciales(correo, contrasena);
        res.json(credenciales);
    } catch (error) {
        res.status(500).json({ message: "Error en el Servidor" });
    }
}

export { getCredenciales }

const getAllU = async (req, res) => {
    try {
        const usuarios = await getAllUsuarios();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

const addUsuario = async (req, res) => {
    
    try {
        await createUsuario(req.body)
        res.status(201).json({message: 'Datos Insertados Correctamente'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

const deleteUsuarioD = async (req, res) => {

    try {
        await deleteUsuario(req.params)
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

export { getAllU, addUsuario, deleteUsuarioD }

