const db = require("../models");
const Enquete = db.enquetes;
const Question = db.questions;
const Op = db.Sequelize.Op;

// Create and Save new Reponses
exports.createQuestion = (question) => {
  return Question.create({
    title: question.title,
    description: question.description,
  })
    .then((question) => {
      console.log(">> Created question: " + JSON.stringify(question, null, 4));
      return question;
    })
    .catch((err) => {
      console.log(">> Error while creating question: ", err);
    });
};

// Create and Save new  Enquetes
exports.createEnquete = (questionId, enquete) => {
  return Enquete.create({
    name: enquete.name,
    text: enquete.text,
    questionId: questionId,
  })
    .then((enquete) => {
      console.log(">> Created enquete: " + JSON.stringify(enquete, null, 4));
      return enquete;
    })
    .catch((err) => {
      console.log(">> Error while creating enquete: ", err);
    });
};

// Get the enquetes for a given question
exports.findQuestionById = (questionId) => {
  return Question.findByPk(questionId, { include: ["enquetes"] })
    .then((question) => {
      return question;
    })
    .catch((err) => {
      console.log(">> Error while finding question: ", err);
    });
};

// Get the enquete for a given reponse id
exports.findEnqueteById = (id) => {
  return Enquete.findByPk(id, { include: ["question"] })
    .then((enquete) => {
      return enquete;
    })
    .catch((err) => {
      console.log(">> Error while finding enquete: ", err);
    });
};

// Get all Question include enquetes
exports.findAll = () => {
  return Question.findAll({
    include: ["enquetes"],
  }).then((questions) => {
    return questions;
  });
};

//------CRUD-------


// Create and Save a new Enquete
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Enquete
  const enquete = {
    title: req.body.title,
    description: req.body.description,
    //published: req.body.published ? req.body.published : false
  };

  // Save Enquete in the database
  Enquete.create(enquete)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Enquete."
      });
    });
};

// Retrieve all Enquete from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Enquete.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving enquetes."
      });
    });
};

// Find a single Enquete with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Enquete.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Enquete with id=" + id
      });
    });
};

// Update a Enquete by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Enquete.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Enqute was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Enquete with id=${id}. Maybe Enquete was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Enquete with id=" + id
      });
    });
};

// Delete a Enquete with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Enquete.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Enquete was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Enquete with id=${id}. Maybe Enquete was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Enquete with id=" + id
      });
    });
};

// Delete all enquete from the database.
exports.deleteAll = (req, res) => {
  Enquete.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} enquetes were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all enquete."
      });
    });
};

// find all published enquete
exports.findAllPublished = (req, res) => {
  Enquete.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving enquete."
      });
    });
};

