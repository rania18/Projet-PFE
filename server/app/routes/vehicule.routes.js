module.exports = app => {
  const vehicules = require("../controllers/vehicule.controller");

  var router = require("express").Router();

  // Create a new Vehicule
  router.post("/", vehicules.create);

  // Retrieve all vehicules
  router.get("/", vehicules.findAll);



  // Retrieve a single vehicules with id
  router.get("/:id", vehicules.findOne);

  // Update a vehicule with id
  router.put("/:id", vehicules.update);

  // Delete a vehicule with id
  router.delete("/:id", vehicules.delete);

  // Delete all vehicules
  router.delete("/", vehicules.deleteAll);

  app.use('/api/vehicules', router);
};
