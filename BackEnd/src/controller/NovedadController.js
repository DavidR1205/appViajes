import { createNovedad, getAllNovedades, deleteNovedad } from "../models/NovedadModel.js";

const getAllN = async (req, res) => {

    try {
        const novedad = await getAllNovedades();
        res.json(novedad)
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

const addNovedad = async (req, res) => {

    try {
        await createNovedad(req.body)
        res.status(201).json({message: 'Datos Insertado Correctamente'})
    } catch (error) {
        console.error("Error al crear novedad:", error);
        res.status(500).json({message: error.message})
    }

}

const deleteNovedadD = async (req, res) => {

    try {
        await deleteNovedad(req.params)
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

export { getAllN, addNovedad, deleteNovedadD }