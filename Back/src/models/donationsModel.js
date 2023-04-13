// Require: DataTypes to create the models
const { DataTypes } = require('sequelize')

// Exports: a function that defines the model with the connection to sequelize
module.exports = (sequelize) => {
  // Defines: the model (model name, attributes )
  sequelize.define('donations', {

    id_Donations: {
      type: DataTypes,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },

    amountD: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },

    // Invalidates: Date and time fields
    { timestamps: false }

  )
}