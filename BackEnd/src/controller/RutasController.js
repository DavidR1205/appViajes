import { getAllRutas, createRuta,DeleteRuta} from "../models/RutasModel.js";

const getAllR = async (req, res) =>{

    try {

        const rutas = await getAllRutas()
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

const actualizarRuta = async (req, res) => {
    try {
        const id = req.params.id;
        const ruta  = req.body;
        ruta.id_ruta = id;
        await updateRuta(ruta);
        res.send('Ruta actualizada con exito');
    } catch (error) {
        res.status(500).send(error.message);
        
    }
}

const obtenerRuta = async (req,res) => {
    try {
        const id = req.params.id;
        const ruta = await getRutaById(id);
        if (ruta){
            res.json(ruta);
        }else{
            res.status(404).json({ message: 'Ruta no encontrada'});
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export {getAllR, addRuta, DeleteRutaA,actualizarRuta,obtenerRuta}