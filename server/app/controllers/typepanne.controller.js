const { typepannes } = require("../models");
const db = require("../models");
const Typepanne = db.typepannes;
const Op = db.Sequelize.Op;

// Create and Save a new TypePanne
exports.create = (req, res) => {
  // // Validate request
  // if (!req.body.name) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }

  // Create a typePanne
  const typepanne = {
    name: req.body.name,
    description: req.body.description,
    // panneId:  req.body.panneId,
    // photo: req.body.photo,
  };

  // Save typepanne in the database
  Typepanne.create(typepanne)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the TypePanne."
      });
    });
};

// Retrieve all TypePannes from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Typepanne.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving TypePannes."
      });
    });
};

// Find a single Panne with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Typepanne.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving TypePanne with id=" + id
      });
    });
};

// Update a TypePanne by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Typepanne.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Panne was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update TypePanne with id=${id}. Maybe Typepanne was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating TypePanne with id=" + id
      });
    });
};

// Delete a TypePanne with the specified id in the request






exports.delete = (req, res) => {
  const id = req.params.id;

  Typepanne.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "TypePanne was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete typepanne with id=${id}. Maybe typepanne was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete TypePanne with id=" + id
      });
    });
};

// Delete all TypePannes from the database.
exports.deleteAll = (req, res) => {
  Typepanne.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} TypePannes were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Typepannes."
      });
    });
};


