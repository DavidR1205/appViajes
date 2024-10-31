import { getAllViajes } from "../models/ViajesModel.js";

const getAllP = async (req, res) => {
    const viajes = await getAllViajes();
    res.json(viajes);
}

export {getAllP}