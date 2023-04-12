// Require: DataTypes to create the models
const { DataTypes } = require('sequelize')

// Exports: a function that defines the model with the connection to sequelize
module.exports = (sequelize) => {
  // Defines: the model (model name, attributes )
  sequelize.define('dogs', {

    id_Dog: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },

    nameD: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    sexD: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    sizeD: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    historyD: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    photoD: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

    // Invalidates: Date and time fields
    { timestamps: false }

  )
}