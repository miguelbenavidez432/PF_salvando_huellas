// Require: DataTypes to create the models
const { DataTypes } = require('sequelize')

// Exports: a function that defines the model with the connection to sequelize
module.exports = (sequelize) => {
  // Defines: the model (model name, attributes )
  sequelize.define('posts', {

    id_Post: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    titleP:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    commentP: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },

    // Invalidates: Date and time fields
    { timestamps: false }

  )
}