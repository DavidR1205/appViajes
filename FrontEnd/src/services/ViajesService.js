import axios from "axios";

const api = 'http://localhost:8082/programar'

export const getAllViajes = async()=>{

    const respuesta = await axios.get(api)
    return respuesta.data

}

export const finalizarViaje = async (id_viaje, hora_fin, duracion) => {
    try {
        const respuesta = await axios.put(`http://localhost:8082/programar/${id_viaje}`, {
            hora_fin,
            duracion,
        });
        return respuesta.data;
    } catch (error) {
        throw error;
    }
}