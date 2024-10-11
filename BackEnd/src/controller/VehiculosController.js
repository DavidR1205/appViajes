import { getAllVehiculos } from "../models/VehiculosModel.js";

const getAllV = async (req, res) =>{

    const vehiculos = await getAllVehiculos();
    res.json(vehiculos);
}

export {getAllV}