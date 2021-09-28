module.exports = app => {
  const taches = require("../controllers/tache.controller");

  var router = require("express").Router();

  // Create a new tache
   router.post("/", taches.create);

  // Retrieve all taches
  router.get("/", taches.findAll);

  // Retrieve a single taches with id
  router.get("/:id", taches.findOne);

  // Update a taches with id
  router.put("/:id", taches.update);

  // Delete a taches with id
  router.delete("/:id", taches.delete);

  // Delete all taches
  router.delete("/", taches.deleteAll);
  

  app.use("/api/taches", router);
};
