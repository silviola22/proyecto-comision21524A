const express = require('express');
const path = require ("path");
require ("ejs");

const app = express()

// Middlewares 
app.use(express.json())  //Para que el servidor comprenda datos en formaro json
app.use(express.urlencoded({ extended: false}))

app.set ("view engine", "ejs")

// Archivos estáticos - (carpeta pública)
app.use (express.static("public"))

// Importacion de las rutas
app.use (require("./routes/users.routes"))
app.use (require ("./routes/blog.routes"));

app.listen(9000, console.log("Servidor corriendo en puerto 9000"))