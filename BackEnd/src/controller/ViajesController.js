import { getAllViajes, createViaje, deleteViaje, finalizarViaje } from "../models/ViajesModel.js";

const getAllP = async (req, res) => {
    
    try {
        const viajes = await getAllViajes();
        res.json(viajes); 
    } catch (error) {
        res.status(500).json({message: error.message})
    }

    
}

const addViaje = async (req, res) => {

    try {
        
        await createViaje(req.body)
        res.status(201).json({message: 'Datos Insertados Correctamente'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

const deleteViajeD = async (req, res) => {
    
    try {
        await deleteViaje(req.params)
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}


const finalizarViajeC = async (req, res) => {

    const { id_viaje } = req.params;
    const { hora_fin, duracion } = req.body;

    try {
        await finalizarViaje(id_viaje, hora_fin, duracion);
        res.status(200).json({ message: 'Viaje finalizado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export {getAllP, addViaje, deleteViajeD, finalizarViajeC}