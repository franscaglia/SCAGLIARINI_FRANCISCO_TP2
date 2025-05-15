import { DataService } from "../services/DataService.js"

export const DataController = {
    async getDataExterna(req, res) {
        try {       
            const csv = await DataService.descargarCsv()
            if(!csv){ return res.json({status: 404, msg: " -- sin libros por aqui"})}
            return res.json({status: 200, msg: " -- solicitud exitosa", payload: csv})
        } catch (error) {
            console.log(error)
        }
    }
}
