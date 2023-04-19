// Require: DataTypes to create the models
const { DataTypes } = require('sequelize')

// Exports: a function that defines the model with the connection to sequelize
module.exports = (sequelize) => {
  // Defines: the model (model name, attributes )
  sequelize.define('stock', {

    id_Stock: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },

    amountS: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },

    // Invalidates: Date and time fields
    { timestamps: false }

  )
}