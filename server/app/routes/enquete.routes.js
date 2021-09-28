module.exports = app => {
  const enquetes = require("../controllers/enquete.controller");

  var router = require("express").Router();

  // Create a new enquete
  router.post("/", enquetes.create);

  // Retrieve all enquetes
  router.get("/", enquetes.findAll);

  // Retrieve a single enquete with id
  router.get("/:id", enquetes.findOne);

  // Update a enquete with id
  router.put("/:id", enquetes.update);

  // Delete a enquete with id
  router.delete("/:id", enquetes.delete);

  // Delete all enquetes
  router.delete("/", enquetes.deleteAll);

  app.use('/api/enquetes', router);
};
