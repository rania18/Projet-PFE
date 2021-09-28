module.exports = app => {
  const typepannes = require("../controllers/typepanne.controller");

  var router = require("express").Router();

  // Create a new typepannes
  router.post("/", typepannes.create);

  // Retrieve all typepannes
  router.get("/", typepannes.findAll);

  // Retrieve a single typepannes with id
  router.get("/:id", typepannes.findOne);

  // Update a typepannes with id
  router.put("/:id", typepannes.update);

  // Delete a typepannes with id
  router.delete("/:id", typepannes.delete);

  // Delete all typepannes
  router.delete("/", typepannes.deleteAll);

  app.use("/api/typepannes", router);
};
