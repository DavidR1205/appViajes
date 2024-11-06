import { getAllViajes, createViaje, deleteViaje } from "../models/ViajesModel.js";

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

export {getAllP, addViaje, deleteViajeD}