module.exports = (sequelize, DataTypes) => {
  const Typepanne  = sequelize.define("typepanne", {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
    // ,
    // photo: {
    //   type: DataTypes.STRING
    // }
  });

  return Typepanne;
};
