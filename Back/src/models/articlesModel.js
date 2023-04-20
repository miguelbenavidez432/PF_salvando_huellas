// Require: DataTypes to create the models
const { DataTypes } = require('sequelize')

// Exports: a function that defines the model with the connection to sequelize
module.exports = (sequelize) => {
  // Defines: the model (model name, attributes )
  sequelize.define('articles', {

    id_Article: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },

    nameA: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    priceA: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    descriptionA: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    photoA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "https://desarrollowp.com/wp-content/uploads/2018/01/error-404.jpg"
    },

    stockA: {
      type: DataTypes.INTEGER,
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