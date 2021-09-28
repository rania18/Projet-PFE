module.exports = app => {
  const reponses = require("../controllers/reponse.controller");

  var router = require("express").Router();

  // Create a new reponses
  router.post("/", reponses.create);

  // Retrieve all reponses
  router.get("/", reponses.findAll);

  // // Retrieve all published reponses
  // router.get("/published", reponses.findAllPublished);

  // Retrieve a single reponses with id
  router.get("/:id", reponses.findOne);

  // Update a reponses with id
  router.put("/:id", reponses.update);

  // Delete a reponses with id
  router.delete("/:id", reponses.delete);

  // Delete all reponses
  router.delete("/", reponses.deleteAll);

  app.use('/api/reponses', router);
};
