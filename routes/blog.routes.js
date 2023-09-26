const router = require ("express").Router();





  router.get('/otra-ruta', function (req, res) {
    res.render ("home");
  })

  router.get('/ruta-protegida',  (req, res)  => {
    res.send( { name: "Silvia"});
  })

  module.exports = router;