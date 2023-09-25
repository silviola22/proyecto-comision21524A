const express = require('express')
const app = express()

// Middlewares 
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

// Importacion de las rutas
app.use (require("./routes/users.routes"))

app.listen(9000, console.log("Servidor corriendo en puerto 9000"))