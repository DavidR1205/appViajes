import { getAllVehiculos, createVehiculos, deleteVehiculos } from "../models/VehiculosModel.js";

const getAllV = async (req, res) =>{

    try {
        const vehiculos = await getAllVehiculos()
        res.json(vehiculos)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const addVehiculos = async (req, res) => {
    
    try {
        await createVehiculos(req.body)
        res.status(201).json({message: 'Datos Insertados Correctamente'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

const deleteVehiculosD = async (req, res) => {
    
    try {
        await deleteVehiculos(req.params)
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}


export {getAllV, addVehiculos, deleteVehiculosD}