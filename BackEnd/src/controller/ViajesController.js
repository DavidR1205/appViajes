import { getAllViajes } from "../models/ViajesModel.js";

const getAllP = async (req, res) => {
    
    try {
        const viajes = await getAllViajes();
        res.json(viajes); 
    } catch (error) {
        res.status(500).json({message: error.message})
    }

    
}

export {getAllP}