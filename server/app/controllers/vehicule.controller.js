const db = require("../models");
const Vehicule = db.vehicules;
const Panne = db.pannes;
const Client = db.clients;

// Create and Save new vehicule
exports.createVehicule = (vehicule) => {
  return Vehicule.create({
    immatricule: vehicule.immatricule,
    marque: vehicule.marque,
    modele: vehicule.modele,
    Kilometrage: vehicule.Kilometrage,
    carburant: vehicule.carburant,
    PropreteInt: vehicule.PropreteInt,
    PropreteTapis: vehicule.PropreteTapis,
    LeveVitre: vehicule.LeveVitre,
    HuileM: vehicule.HuileM,
    liquideR: vehicule.liquideR,
    liquideF: vehicule.liquideF,
    etatB: vehicule.etatB,
    assurance : vehicule.assurance ,
    clientId:vehicule.clientId,
  })
    .then((vehicule) => {
      console.log(">> Created vehicule: " + JSON.stringify(vehicule, null, 4));
      return vehicule;
    })
    .catch((err) => {
      console.log(">> Error while creating vehicule: ", err);
    });
};

// Create and Save new pannes
exports.createPanne = (panneId, panne) => {
  return Panne.create({
    name: panne.name,
    text: panne.text,
    panneId: panneId,
  })
    .then((panne) => {
      console.log(">> Created panne: " + JSON.stringify(panne, null, 4));
      return panne;
    })
    .catch((err) => {
      console.log(">> Error while creating panne: ", err);
    });
};

// Get the pannes for a given vehicule
exports.findVehiculeById = (vehiculeId) => {
  return Vehicule.findByPk(vehiculeId, { include: ["pannes"] })
    .then((vehicule) => {
      return vehicule;
    })
    .catch((err) => {
      console.log(">> Error while finding vehicule: ", err);
    });
};

// Get the pannes for a given panne id
exports.findPanneById = (id) => {
  return Panne.findByPk(id, { include: ["vehicule"] })
    .then((panne) => {
      return panne;
    })
    .catch((err) => {
      console.log(">> Error while finding panne: ", err);
    });
};

// Get all Vehicules include pannes
// exports.findAll = () => {
//   return Vehicule.findAll({
//     include: ["pannes"],
//   }).then((vehicules) => {
//     return vehicules;
//   });
// };


//get pannes from idVehicule


//------CRUD------

// // Create and Save a new Vehicule
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.immatricule) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }

   // Create a vehicule
  const vehicule = {
    immatricule: req.body.immatricule,
    marque: req.body.marque,
    modele: req.body.modele,
    Kilometrage: req.body.Kilometrage,
    carburant: req.body.carburant,
    PropreteInt: req.body.PropreteInt,
    PropreteExt: req.body.PropreteExt,
    PropreteTapis: req.body.PropreteTapis,
    LeveVitre: req.body.LeveVitre,
    HuileM: req.body.HuileM,
    liquideR: req.body.liquideR,
    liquideF: req.body.liquideF,
    etatB: req.body.etatB,
    assurance : req.body.assurance ,
    // clientId:req.body.clientId,
  
  };

  // Save Vehicule in the database
  Vehicule.create(vehicule)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Vehicule."
      });
    });
};

// // Retrieve all Vehicules from the database.
exports.findAll = (req, res) => {
  const immatricule = req.query.immatricule;
  var condition = immatricule ? { immatricule: { [Op.like]: `%${immatricule}%` } } : null;

  Vehicule.findAll({ where: condition ,include: { model: Client, as: 'client' }})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving vehicules."
      });
    });
};

// Find a single vehicule with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Vehicule.findByPk(id,{include: { model: Client, as: 'client' }})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Vehicule with id=" + id
      });
    });
};

// Update a Vehicule by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Vehicule.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Vehicule was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Vehicule with id=${id}. Maybe vehicule was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Vehicule with id=" + id
      });
    });
};

// Delete a Vehicule with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Vehicule.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "vehicule was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Vehicule with id=${id}. Maybe vehicule was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Vehicule with id=" + id
      });
    });
};

// Delete all Vehicules from the database.
exports.deleteAll = (req, res) => {
  Vehicule.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Vehicule were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all vehicules."
      });
    });
};


