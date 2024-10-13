import axios from 'axios'

const api = 'http://localhost:8082/vehiculos'

export const getAllVehiculos = async()=>{ 

    const respuesta = await axios.get(api)
    return respuesta.data

}