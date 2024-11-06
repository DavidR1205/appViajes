import { getAllRoles } from "../models/RolesModel.js";

const getAllRo = async (req, res) => {

    try {
        
        const roles = await getAllRoles()
        res.json(roles)

    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

export {getAllRo}