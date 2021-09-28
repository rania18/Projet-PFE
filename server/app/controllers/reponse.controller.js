const db = require("../models");
const Reponse = db.reponses;
const Question = db.questions;
const Op = db.Sequelize.Op;

// Create and Save new Reponses
exports.createReponse = (reponse) => {
  return Reponse.create({
    title: reponse.title,
    description: reponse.description,
  })
    .then((reponse) => {
      console.log(">> Created reponse: " + JSON.stringify(reponse, null, 4));
      return reponse;
    })
    .catch((err) => {
      console.log(">> Error while creating reponse: ", err);
    });
};

// Create and Save new Questions
exports.createQuestion = (reponseId, question) => {
  return Question.create({
    name: question.name,
    text: question.text,
    reponseId: reponseId,
  })
    .then((question) => {
      console.log(">> Created question: " + JSON.stringify(question, null, 4));
      return question;
    })
    .catch((err) => {
      console.log(">> Error while creating question: ", err);
    });
};

// Get the questions for a given reponse
exports.findReponseById = (reponseId) => {
  return Reponse.findByPk(reponseId, { include: ["questions"] })
    .then((reponse) => {
      return reponse;
    })
    .catch((err) => {
      console.log(">> Error while finding reponse: ", err);
    });
};

// Get the question for a given question id
exports.findQuestionById = (id) => {
  return Question.findByPk(id, { include: ["reponse"] })
    .then((question) => {
      return question;
    })
    .catch((err) => {
      console.log(">> Error while finding question: ", err);
    });
};

// Get all Reponses include questions
exports.findAll = () => {
  return Reponse.findAll({
    include: ["questions"],
  }).then((reponses) => {
    return reponses;
  });
};

//-----CRUD------



// Create and Save a new Reponse
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.title) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }
console.log(req.body.title)
  // Create a Reponse
  const reponse = {
    //title: req.body.title,
    description: req.body.title.description,
    questionId: req.body.title.questionId,
    clientId: req.body.title.clientId,



    //published: req.body.published ? req.body.published : false
  };

  // Save Reponse in the database
  Reponse.create(reponse)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Reponse."
      });
    });
};

// Retrieve all Reponses from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Reponse.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Reponses."
      });
    });
};

// Find a single Reponse with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Reponse.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Reponse with id=" + id
      });
    });
};

// Update a Reponse by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Reponse.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Reponse was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Reponse with id=${id}. Maybe Reponse was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Reponse with id=" + id
      });
    });
};

// Delete a Reponse with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Reponse.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Reponse was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Reponse with id=${id}. Maybe Reponse was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Reponse with id=" + id
      });
    });
};

// Delete all Reponse from the database.
exports.deleteAll = (req, res) => {
  Reponse.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Reponses were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Reponses."
      });
    });
};




