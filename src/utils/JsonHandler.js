import fs from "node:fs/promises"
import { config } from "../config/config.js"

const {DB_PATH: dbPath} = config

export const JsonHandler = {
    async read() {
        try{
            const data = await fs.readFile(dbPath, { encoding: "utf8"})
            return JSON.parse(data || {})
        }catch(error){
            console.log(" -- sin libros por aca (JSONHANDLER)")
            return {}
        }
    }
}