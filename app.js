import express from 'express';
import { config } from "./src/config/config.js"
import { BookController } from "./src/controllers/BookController.js"
import { DataController } from "./src/controllers/DataController.js"

const app = express();
app.use(express.json())


app.get("/", (req, res) => {res.json({status: 200, msg: " -- server andando 🔥🔥"})})

app.get("/api/json_file", BookController.getAll)
app.get("/api/data_externa", DataController.getDataExterna) // no anda




app.use((req, res, next) => { res.status(404).send(" -- pagina no encontrada")})
app.listen(config.PORT, () => { console.log(` -- Servidor corriendo en el puerto ${config.PORT} 🚀🚀`)});


