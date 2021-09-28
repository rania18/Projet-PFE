module.exports = (sequelize, DataTypes) => {
  const Reponse = sequelize.define("reponse", {
    title: {
      type: DataTypes.STRING
    }, 
    description: {
      type: DataTypes.STRING
    }
  });

  return Reponse;
};
