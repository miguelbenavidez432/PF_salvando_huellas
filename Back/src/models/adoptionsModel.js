// Require: DataTypes to create the models
const { DataTypes } = require('sequelize')

// Exports: a function that defines the model with the connection to sequelize
module.exports = (sequelize) => {
  // Defines: the model (model name, attributes )
  sequelize.define('adoptions', {

    id_Adoption: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },

    statusA: {
      type: DataTypes.ENUM("accepted","rejected","pending"),
      defaultValue: "pending",
      allowNull: false,
    },

    adopted_homeA: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    activeA: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },

    // Invalidates: Date and time fields
    { timestamps: false }

  )
}