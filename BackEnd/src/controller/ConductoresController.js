import { getAllConductores } from "../models/ConductoresModel.js";

const getAllC = async (req, res) =>{

    const conductores = await getAllConductores();
    res.json(conductores);
}

export {getAllC}