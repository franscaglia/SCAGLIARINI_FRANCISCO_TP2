import { Book } from "../models/Book.js"
import { JsonRepository } from "../repositories/JsonRepository.js"
import { randomUUID} from "crypto"

const bookJsonRepository = new JsonRepository(Book)

export const BookJsonService = {
    async getAll(){
        const books = await bookJsonRepository.getAll()
        return books
    }
}