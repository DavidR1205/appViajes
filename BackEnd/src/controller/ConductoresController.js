
import { getAllConductores, CreateConductores, DeleteConductores } from "../models/ConductoresModel.js";

const getAllC = async (req, res) => {
    try {
        const conductores = await getAllConductores();
        res.json(conductores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addConductor = async (req, res) => {
    try {
        await CreateConductores(req.body);
        res.status(201).json({ message: 'Conductor agregado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteConductor = async (req, res) => {
    try {
        await DeleteConductores(req.params.id); 
        res.status(200).json({ message: 'Conductor eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getAllC, addConductor, deleteConductor };
