const { taches } = require("../models");
const db = require("../models");
const Tache = db.taches;
const Vehicule = db.vehicules;

const Op = db.Sequelize.Op;

// Create and Save a new tache
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.nom) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return ;
  // }

  // Create a Client
  const tache = {
    name: req.body.name,
    description: req.body.description,
  };

  // Save Client in the database
  Tache.create(tache)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the tache."
      });
    });
};



// Retrieve all Tachess from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Tache.findAll({ where: condition, include: { model: Vehicule, as: 'vehicule' } ,})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Taches."
      });
    });
};

// Find a single tache with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tache.findByPk(id,{include: {  model: Vehicule, as: 'vehicule' }})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tache with id=" + id
      });
    });
};

// Update a Tache by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tache.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tache was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tache with id=${id}. Maybe tache was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tache with id=" + id
      });
    });
};

// Delete a Tache with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tache.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tache was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tache with id=${id}. Maybe Tache was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tache with id=" + id
      });
    });
};

// Delete all Taches from the database.
exports.deleteAll = (req, res) => {
  Tache.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Taches were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Taches."
      });
    });
};

// Find a taches for a given tache id
exports.findById = (id) => {
  return Tache.findByPk(id, {
    include: [
      {
        model: Tache,
        as: "taches",
        attributes: ["id", "title", "description","photo"],
        through: {
          attributes: [],
        }
      },
    ],
  })
    .then((tache) => {
      return tache;
    })
    .catch((err) => {
      console.log(">> Error while finding tache: ", err);
    });
};

// Add a taches to a taches
exports.addTache = (tacheeId, tacheId) => {
  return Tache.findByPk(tacheId)
    .then((tache) => {
      if (!tache) {
        console.log("tache not found!");
        return null;
      }
      return Tache.findByPk(tacheId).then((tache) => {
        if (!tache) {
          console.log("tache not found!");
          return null;
        }

        tache.addTache(tache);
        console.log(`>> added tache id=${tache.id} to Tag id=${tache.id}`);
        return tag;
      });
    })
    .catch((err) => {
      console.log(">> Error while adding tache to Tag: ", err);
    });
};


// Get the vehicules for a given clients
exports.findTacheById = (TacheId) => {
  return Tache.findByPk(TacheId, { include: ["tache"] })
    .then((tache) => {
      return tache;
    })
    .catch((err) => {
      console.log(">> Error while finding tache: ", err);
    });
};

