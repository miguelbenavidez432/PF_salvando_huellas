// Require: DataTypes to create the models
const { DataTypes } = require("sequelize");

// Exports: a function that defines the model with the connection to sequelize
module.exports = (sequelize) => {
  // Defines: the model (model name, attributes )
  sequelize.define(
    "carts",
    {
      id_Cart: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },

      articles: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false,
      },

      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }
  );
};
