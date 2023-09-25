
//Se importa la clase para crear rutas
const {Router}  = require ("express");

const router = Router ()

const users = [{
    id: 1,
    name: "John",
    lastname: "Wick"
}

]

router.get('/users', function (req, res) {
    res.send(users);
  })

  // Recibir informacion en el servidor
  router.post("/users", (req, res) => {

   
    // Cuerpo de la peticion
    res.json(req.body)


    // Parametros

    // Query params

    res.send ("Consulta recibida")

  })

  // Exportación de la constante que contiene las rutas
  module.exports = router;

