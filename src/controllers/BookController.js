import { BookJsonService } from "../services/BookJsonService.js"

export const BookController = {
    async getAll(req, res) {
        try{
            const libros = await BookJsonService.getAll()
            if(!libros){ return res.json({status: 404, msg: " -- sin libros por aqui"})}
            return res.json({status: 200, msg: " -- solicitud GET de todos los libros 📚📚", payload: libros}) 
        }catch(error){
            console.log(error)
        }
    }
}
