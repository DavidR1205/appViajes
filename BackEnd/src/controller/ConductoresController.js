import { getAllConductores } from "../models/ConductoresModel.js";

const getAllC = async (req, res) =>{

    try {
        const conductores = await getAllConductores();
        res.json(conductores); 
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

export {getAllC}