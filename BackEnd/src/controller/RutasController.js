import { getAllRutas, createRuta,DeleteRuta} from "../models/RutasModel.js";

const getAllR = async (req, res) =>{

    try {

        const rutas = await getAllR()
        res.json(rutas)
        
    } catch (error) {
        res.status(500).json({message : error.message})
        
    }
}

const addRuta = async(req, res) =>{
    try {

        await createRuta(req.body)
        res.status(201).json({message : 'Datos insertados correctamente'})
        
    } catch (error) {
        res.status(500).json({message : error.message})
        
    }
}

const DeleteRutaA = async (req, res) => {
    try {

        await DeleteRuta(req.params)
        
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

export {getAllR, addRuta, DeleteRutaA}