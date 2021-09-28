const db = require("../models");
const Reparateur = db.reparateurs;
const Panne = db.pannes;
const Op = db.Sequelize.Op;

// Create and Save new Reparateurs
exports.createReparateur = (reparateur) => {
  return Reparateur.create({
    nom: reparateur.nom,
    prenom: reparateur.prenom,
    email: reparateur.email,
    password: reparateur.password,
    tel: reparateur.tel,
    //status: reparateur.status,
    status: reparateur.status ? reparateur.status : false


  })
    .then((reparateur) => {
      console.log(">> Created reparateur: " + JSON.stringify(reparateur, null, 4));
      return reparateur;
    })
    .catch((err) => {
      console.log(">> Error while creating reparateur: ", err);
    });
};

// Create and Save new pannes
exports.createPanne = ( reparateurId , panne) => {
  return Panne.create({
    name: panne.name,
    text: panne.text,
    reparateurId: reparateurId,
  })
    .then((panne) => {
      console.log(">> Created panne: " + JSON.stringify(panne, null, 4));
      return panne;
    })
    .catch((err) => {
      console.log(">> Error while creating panne: ", err);
    });
};

// Get the comments for a given reparateur
exports.findReparateurById = (reparateurId) => {
  return Reparateur.findByPk(reparateurId, { include: ["pannes"] })
    .then((reparateur) => {
      return reparateur;
    })
    .catch((err) => {
      console.log(">> Error while finding reparateur: ", err);
    });
};

// Get the pannes for a given panne id
exports.findPanneById = (id) => {
  return Panne.findByPk(id, { include: ["reparateur"] })
    .then((panne) => {
      return panne;
    })
    .catch((err) => {
      console.log(">> Error while finding panne: ", err);
    });
};

// Get all reparateurs include pannes
exports.findAll = () => {
  return Reparateur.findAll({
    include: ["pannes"],
  }).then((reparateurs) => {
    return reparateurs;
  });
};


//-----CRUD------



// Create and Save a new reparateur
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.nom) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }

  // Create a reparateur
  const reparateur = {
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
    password: req.body.password,
    tel: req.body.tel,
    status:true,
    //  ? req.body.status : false
  };

  // Save reparateur in the database
  Reparateur.create(reparateur)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the reparateur."
      });
    });
};

// Retrieve all reparateurs from the database.
exports.findAll = (req, res) => {
  const nom = req.query.nom;
  var condition = nom ? { nom: { [Op.like]: `%${nom}%` } } : null;

  Reparateur.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving reparateurs."
      });
    });
};

// Find a single reparateur with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Reparateur.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving reparateur with id=" + id
      });
    });
};

// Update a reparateur by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Reparateur.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "reparateur was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update reparateur with id=${id}. Maybe reparateur was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating reparateur with id=" + id
      });
    });
};

// Delete a reparateur with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Reparateur.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Reparateur was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete reparateur with id=${id}. Maybe reparateur was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete reparateur with id=" + id
      });
    });
};

// Delete all reparateurs from the database.
exports.deleteAll = (req, res) => {
  Reparateur.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} reparateurs were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all reparateurs."
      });
    });
};

// find all status Panne
exports.findAllStatus = (req, res) => {
  Reparateur.findAll({ where: { status: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Reparateur."
      });
    });
};


