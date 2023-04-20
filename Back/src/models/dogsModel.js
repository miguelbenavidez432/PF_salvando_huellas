// Require: DataTypes to create the models
const { DataTypes } = require("sequelize");

// Exports: a function that defines the model with the connection to sequelize
module.exports = (sequelize) => {
  // Defines: the model (model name, attributes )
  sequelize.define(
    "dogs",
    {
      id_Dog: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },

      nameD: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      sexD: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      ageD: {
        type: DataTypes.STRING,
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
        defaultValue:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtnd2zxCezN-AR47pOjggSSeFrrWaLjZhvlA&usqp=CAU",
      },

      is_disabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },

    // Invalidates: Date and time fields
    { timestamps: false }
  );
};
