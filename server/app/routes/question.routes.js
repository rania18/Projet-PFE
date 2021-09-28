module.exports = app => {
  const questions = require("../controllers/question.controller");

  var router = require("express").Router();

  // Create a new questions
  router.post("/", questions.create);

  // Retrieve all questions
  router.get("/", questions.findAll);


  // Retrieve a single questions with id
  router.get("/:id", questions.findOne);

  // Update a questions with id
  router.put("/:id", questions.update);

  // Delete a questions with id
  router.delete("/:id", questions.delete);

  // Delete all questions
  router.delete("/", questions.deleteAll);

  app.use('/api/questions', router);
};
