module.exports = app => {
  const reparateurs = require("../controllers/reparateur.controller");

  var router = require("express").Router();

  // Create a new reparateurs
  router.post("/", reparateurs.create);

  // Retrieve all reparateurs
  router.get("/", reparateurs.findAll);

  // Retrieve a single reparateurs with id
  router.get("/:id", reparateurs.findOne);

  // Retrieve all status reparateurs
  router.get("/status", reparateurs.findAllStatus);

  // Update a reparateurs with id
  router.put("/:id", reparateurs.update);

  // Delete a reparateurs with id
  router.delete("/:id", reparateurs.delete);

  // Delete all reparateurs
  router.delete("/", reparateurs.deleteAll);

  app.use('/api/reparateurs', router);
};
