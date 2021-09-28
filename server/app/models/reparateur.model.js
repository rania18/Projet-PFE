module.exports = (sequelize, DataTypes) => {
  const Reparateur= sequelize.define("reparateur", {
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
    status: {
      type: DataTypes.BOOLEAN
    }
  });

  return Reparateur;
};
