module.exports = (sequelize, DataTypes) => {
  const Vehicule = sequelize.define("vehicule", {
    immatricule : {
      type: DataTypes.STRING
    },
    marque: {
      type: DataTypes.STRING
    },
    modele: {
      type: DataTypes.STRING
    },
    Kilometrage : {
      type: DataTypes.STRING
    },
    carburant : {
      type: DataTypes.STRING
    },
    PropreteInt: {
      type: DataTypes.BOOLEAN
    },
    PropreteExt: {
      type: DataTypes.BOOLEAN
    },
    PropreteTapis: {
      type: DataTypes.BOOLEAN
    },
    LeveVitre: {
          type: DataTypes.BOOLEAN
    },
        HuileM: {
      type: DataTypes.BOOLEAN
    }, 
    liquideR: {
      type: DataTypes.BOOLEAN
    },
    liquideF: {
      type: DataTypes.BOOLEAN
    },
    etatB: {
      type: DataTypes.BOOLEAN
    },
    assurance : {
      type: DataTypes.STRING
    }
  });

  return Vehicule;
};
