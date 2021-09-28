module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define("client", {
    nom: {
      type: DataTypes.STRING
    },
    prenom: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    tel: {
      type: DataTypes.STRING
    },
    adresse: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.BOOLEAN
    }
  });

  return Client;
};
