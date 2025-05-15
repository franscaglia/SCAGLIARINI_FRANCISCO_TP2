import { JsonHandler } from "../utils/JsonHandler.js"

export class JsonRepository {
    constructor (model) {
        this.model = model
    }

    async getAll() {
        return await JsonHandler.read()
    }

    async getData() {
        return await JsonHandler.read()
    }
}