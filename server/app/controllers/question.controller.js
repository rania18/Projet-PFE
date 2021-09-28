const db = require("../models");
const Question = db.questions;
const Op = db.Sequelize.Op;

// Create and Save a new Question
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Question
  const question = {
    name: req.body.name,
    text: req.body.text,
    //published: req.body.published ? req.body.published : false
  };

  // Save question in the database
  Question.create(question)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Question."
      });
    });
};

// Retrieve all Questions from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Question.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving questions."
      });
    });
};

// Find a single question with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Question.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Question with id=" + id
      });
    });
};

// Update a Question by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Question.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Question was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Questions with id=${id}. Maybe Question was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Question with id=" + id
      });
    });
};

// Delete a Questions with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Question.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Question was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Question with id=${id}. Maybe question was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Question with id=" + id
      });
    });
};

// Delete all Questions from the database.
exports.deleteAll = (req, res) => {
  Question.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Questions were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Questions."
      });
    });
};


