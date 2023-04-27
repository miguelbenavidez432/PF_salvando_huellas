// Require: DataTypes to create the models
const { DataTypes } = require("sequelize");

// Exports: a function that defines the model with the connection to sequelize
module.exports = (sequelize) => {
  // Defines: the model (model name, attributes )
  sequelize.define(
    "users",
    {
      id_User: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },

      nameU: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      lastNameU: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      passwordU: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      idNumbU: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },

      emailU: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        isEmail: true,
      },

      phoneU: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      addressU: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      reasonU: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      isAdminU: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },

      resetLink: {
        type: DataTypes.STRING,
        defaultValue: ''
     },
      is_ban: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },

    // Invalidates: Date and time fields
    { timestamps: false }
  );
};
