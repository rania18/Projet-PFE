const db = require("../models");
const { clients } = require("../models");
const Client = db.clients ;
//const Vehicule = db.vehicules;
const Op = db.Sequelize.Op;



// Create and Save new clients
exports.createClient = (client) => {

  return Client.create({
    nom: client.nom,
    prenom: client.prenom,
    code: client.code,
    adresse: client.adresse,
    contact: client.contact,
    fax: client.fax,
    email: client.email,
    tel: client.tel,
    status: true,
    // status: req.body.status ? req.body.status : false

  })
    .then((client) => {
      console.log(">> Created client: " + JSON.stringify(client, null, 4));
      return client;
    })
    .catch((err) => {
      console.log(">> Error while creating client: ", err);
    });
};

// Create and Save new vehicule
exports.createVehicule = (clientId, vehicule) => {
  return Vehicule.create({
    name: vehicule.name,
    text: vehicule.text,
    clientId: clientId,
  })
    .then((vehicule) => {
      console.log(">> Created vehicule: " + JSON.stringify(vehicule, null, 4));
      return vehicule;
    })
    .catch((err) => {
      console.log(">> Error while creating vehicule: ", err);
    });
};

// Get the vehicules for a given clients
exports.findClientById = (clientId) => {
  return Client.findByPk(clientId, { include: ["vehicules"] })
    .then((client) => {
      return client;
    })
    .catch((err) => {
      console.log(">> Error while finding client: ", err);
    });
};

// Get the vehicules for a given vehicule id
exports.findVehiculeById = (id) => {
  return Vehi$.findByPk(id, { include: ["client"] })
    .then((client) => {
      return client;
    })
    .catch((err) => {
      console.log(">> Error while finding client: ", err);
    });
};

// Get all clients include vehicules
exports.findAll = () => {
  return Client.findAll({
    include: ["vehicules"],
  }).then((clients) => {
    return clients;
  });
};



//-----CRUD-------



// Create and Save a new Client

exports.create = (req, res) => {
  // Validate request
  // if (!req.body.nom) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return ;
  // }

  // Create a Client
  const client = {
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
    password: req.body.password,
    tel: req.body.tel,
    adresse: req.body.adresse,
    status: true,
  };

  // Save Client in the database
  Client.create(client)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Client."
      });
    });
};

// Retrieve all Clients from the database.
exports.findAll = (req, res) => {
  const nom = req.query.nom;
  var condition = nom ? { nom: { [Op.like]: `%${nom}%` } } : null;

  Client.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving clients."
      });
    });
};

// Find a single Client with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Client.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Client with id=" + id
      });
    });
};

// Update a Client by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Client.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Client was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Client with id=${id}. Maybe Client was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Client with id=" + id
      });
    });
};

// Delete a Client with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Client.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Client was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Client with id=${id}. Maybe Client was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Client with id=" + id
      });
    });
};

// Delete all Clients from the database.
exports.deleteAll = (req, res) => {
  Client.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Clients were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all clients."
      });
    });
};


// find all status Client
exports.findAllStatus = (req, res) => {
  Client.findAll({ where: { status: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Pannes."
      });
    });
};

///count
// Client.count().then(c => {
//   console.log("There are " + c + " projects!")
// })

exports.getClientCount = () =>
 Client.findAndCountAll({
    attributes: ['id', [sequelize.fn('count', sequelize.col('clients')), 'count']],
    group : ['clients.id'],
    raw: true,
    order: sequelize.literal('count DESC')

    // attributes: { 
    //   include: [[Sequelize.fn("COUNT", Sequelize.col('clients.id')) ]] ,  
    // }
      
    }).then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "count not exist."
      });
    });
