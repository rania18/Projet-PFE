//const db = require("./app/models");
// const controller = require("./app/controllers/reponse.controller");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();


var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - 
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();
initial();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome Rania" });
});

//nos  points de terminaison
require("./app/routes/vehicule.routes")(app);
require("./app/routes/panne.routes")(app);
require("./app/routes/enquete.routes")(app);
require("./app/routes/question.routes")(app);
require("./app/routes/reponse.routes")(app);
require("./app/routes/client.routes")(app);
require("./app/routes/reparateur.routes")(app);
require("./app/routes/tache.routes")(app);
require("./app/routes/typepanne.routes")(app);
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "reparateur"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}


db.sequelize.sync();
