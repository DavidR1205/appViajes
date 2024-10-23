import { getAllRutas } from "../models/RutasModel.js";

const getAllR = async (req, res) =>{

    const rutas = await getAllRutas();
    res.json(rutas);
}

export {getAllR}