const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.reponses= require("./reponse.model")(sequelize, Sequelize);
db.questions = require("./question.model")(sequelize, Sequelize);
db.enquetes = require("./enquete.model")(sequelize, Sequelize);
db.vehicules = require("./vehicule.model")(sequelize, Sequelize);
db.pannes = require("./pannes.model")(sequelize, Sequelize);
db.reparateurs = require("./reparateur.model")(sequelize, Sequelize);
db.clients = require("./clients.model")(sequelize, Sequelize);
db.typepannes = require("./typepannes.model")(sequelize, Sequelize);
db.taches = require("./taches.model")(sequelize, Sequelize);
// db.taches = require("./tache_panne.model")(sequelize, Sequelize);
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);




db.questions.hasMany(db.enquetes, { as: "enquetes" });
db.enquetes.belongsTo(db.questions, {
  foreignKey: "questionId",
  as: "question",
});

db.questions.hasMany(db.reponses, { as: "reponses" });
db.reponses.belongsTo(db.questions, {
  foreignKey: "questionId",
  as: "question",
});


db.vehicules.hasMany(db.pannes, { as: "pannes" });
db.pannes.belongsTo(db.vehicules, {
  foreignKey: "vehiculeId",
  as: "vehicule",
});

db.reparateurs.hasMany(db.pannes, { as: "pannes" });
db.pannes.belongsTo(db.reparateurs, {
  foreignKey: "reparateurId",
  as: "reparateur",
});

db.clients.hasMany(db.vehicules, { as: "vehicules" });
db.vehicules.belongsTo(db.clients, {
  foreignKey: "clientId",
  as: "client",
});

db.clients.hasMany(db.reponses, { as: "reponses" });
db.reponses.belongsTo(db.clients, {
  foreignKey: "clientId",
  as: "client",
});


db.typepannes.hasMany(db.pannes, { as: "pannes" });
db.pannes.belongsTo(db.typepannes, {
  foreignKey: "typepanneId",
  as: "typepanne",
});

// db.pannes.belongsToMany(db.taches, {
//   through: "tache_panne",
//   as: "taches",
//   foreignKey: "panneId",
// });

// db.taches.belongsToMany(db.pannes, {
//   through: "tache_panne",
//   as: "pannes",
//   foreignKey: "tacheId",
// });

db.vehicules.hasMany(db.taches, { as: "taches" });
db.taches.belongsTo(db.vehicules, {
  foreignKey: "vehiculeId",
  as: "vehicule",
});

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.ROLES = ["user", "admin", "reparateur"];
module.exports = db;
