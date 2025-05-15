import { DataRepository } from "../repositories/DataRepository.js"

export const DataService = {
    async descargarCsv() {
        const csv = await DataRepository.descargarCsvRepo()
        return csv
    }
}

