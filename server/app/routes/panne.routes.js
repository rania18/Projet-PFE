module.exports = app => {
  const pannes = require("../controllers/panne.controller");

  var router = require("express").Router();

  // Create a new Panne
  router.post("/", pannes.create);

  // Retrieve all pannes
  router.get("/", pannes.findAll);

  // Retrieve a single pannes with id
  router.get("/:id", pannes.findOne);

  // Update a pannes with id
  router.put("/:id", pannes.update);

  // Delete a pannes with id
  router.delete("/:id", pannes.delete);

  // Delete all pannes
  router.delete("/", pannes.deleteAll);

  // // Add a taches to a pannes
  // router.get("/", pannes.addTache);

  app.use("/api/pannes", router);
};
