module.exports = (sequelize, DataTypes) => {
  const Enquete = sequelize.define("enquete", {
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
  });

  return Enquete;
};
