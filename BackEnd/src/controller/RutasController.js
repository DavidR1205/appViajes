import { getAllRutas } from "../models/RutasModel";

const getAllR = async (req, res) =>{

    const rutas = await getAllRutas();
    res.json(rutas);
}

export {getAllR}