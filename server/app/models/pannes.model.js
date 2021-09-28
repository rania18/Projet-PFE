module.exports = (sequelize, DataTypes) => {
  const Panne  = sequelize.define("panne", {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    photo: {
      type: DataTypes.STRING
    }
  });

  return Panne;
};
